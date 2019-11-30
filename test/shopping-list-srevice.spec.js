const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`List Items service object`, function () {
    let db
    let testListItems = [
        {
            id: 1,
            name: 'Pineapple',
            price: '2.50',
            category: 'Snack',
            checked: false,
            date_added: new Date(),
        },
        {
            id: 2,
            name: 'Flour',
            price: '3.50',
            category: 'Main',
            checked: false,
            date_added: new Date(),
        }, {
            id: 3,
            name: 'Avocadoes',
            price: '1.50',
            category: 'Lunch',
            checked: false,
            date_added: new Date(),
        },
    ]

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testListItems)
        })

        it(`getAllShoppingListItems() resolves all items from 'shopping_list', table`, () => {
            //test that ShoppingListService.getAllShoppingListItems gets the data from the table
            return ShoppingListService.getAllShoppingListItems(db)
                .then(actual => {
                    expect(actual).to.eql(testListItems)
                })
        })

        it(`getItemById() resolves an item by id from 'shopping_list' table`, () => {
            const thirdId = 3
            const thirdTestItem = testListItems[thirdId - 1]
            return ShoppingListService.getItemById(db, thirdId)
                .then(actual => {
                    expect(actual).to.eql({
                        id: thirdId,
                        name: thirdTestItem.name,
                        price: thirdTestItem.price,
                        category: thirdTestItem.category,
                        checked: thirdTestItem.checked,
                        date_added: thirdTestItem.date_added,
                    })
                })
        })

        it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
            const itemId = 3
            return ShoppingListService.deleteItem(db, itemId)
                .then(() => ShoppingListService.getAllShoppingListItems(db))
                .then(allItems => {
                    //copy the test items array without the 'deleted' item
                    const expected = testListItems.filter(item => item.id !== itemId)
                    expect(allItems).to.eql(expected)
                })
        })

        it(`updateItem() updates an item from the 'shopping_list' table`, () => {
            const idOfItemToUpdate = 3
            const newItemData = {
                name: 'updated name',
                price: '7.50',
                category: 'Snack',
                checked: true,
                date_added: new Date(),
            }
            return ShoppingListService.updateItem(db, idOfItemToUpdate, newItemData)
                .then(() => ShoppingListService.getItemById(db, idOfItemToUpdate))
                .then(item => {
                    expect(item).to.eql({
                        id: idOfItemToUpdate,
                        ...newItemData,
                    })
                })
        })
    })


    context(`Given 'shopping_list' has no data`, () => {
        it(`getAllShoppingListItems() resolves an empty array`, () => {
            return ShoppingListService.getAllShoppingListItems(db)
                .then(actual => {
                    expect(actual).to.eql([])
                })
        })

        it(`insertItem() inserts a new item and resolves the new item with an 'id'`, () => {
            const newItem = {
                id: 1,
                name: 'Test new name',
                price: '5.50',
                category: 'Main',
                checked: false,
                date_added: new Date(),
            }
            return ShoppingListService.insertItem(db, newItem)
                .then(actual => {
                    expect(actual).to.eql({
                        id: 1,
                        name: newItem.name,
                        price: newItem.price,
                        category: newItem.category,
                        checked: newItem.checked,
                        date_added: newItem.date_added,
                    })
                })
        })
    })
})
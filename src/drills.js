require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})


function getShoppingItems(searchTerm) {
    knexInstance
        .select('id', 'name', 'price', 'checked', 'category')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(`Searched by ${searchTerm}:`, result)
        }
        )

}

getShoppingItems('burger')

function paginateShoppingItems(pageNumber) {
    const productsPerPage = 6
    const offset = productsPerPage * (pageNumber - 1)
    knexInstance
        .select('id', 'name', 'price', 'date_added', 'checked', 'category')
        .from('shopping_list')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log(`page ${pageNumber}:`, result)
        })
}

paginateShoppingItems(4)

function daysAgoItems(daysAgo) {
    knexInstance
        .select('id', 'name', 'price', 'date_added', 'checked', 'category')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .from('shopping_list')
        .then(result => {
            console.log(`Items less than ${daysAgo} days ago:`, result)
        })
}

daysAgoItems(5)


function totalCategoryCost() {
    knexInstance
        .select('category')
        .sum('price')
        .from('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log('Cost per category:', result)
        })
}

totalCategoryCost()
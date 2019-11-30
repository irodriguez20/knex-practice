BEGIN;

INSERT INTO blogful_articles
(title, date_published, content)
VALUES 
('Impeachment Hearing''s Schedule', now() - '29 days'::INTERVAL, 'lorum ipson plorum at 17:30EST.'),
('Dance Schedule', now() - '28 days'::INTERVAL, 'la flour de plorum at 18:30EST.'),
('GAME OF THRONES FINALE', now() - '27 days'::INTERVAL, 'lorum ipson plorum at 19:30EST.'),
('House of Cards new Episode', now() - '26 days'::INTERVAL, 'lorum ipson plorum at 20:30EST.'),
('The up and coming Adelle', now() - '25 days'::INTERVAL, 'lorum nombre es Elli Ingram'),
('How to make Apple Pie', now() - '24 days'::INTERVAL, 'bake at 300 degrees for 22min.'),
('How to make Peach Cobbler', now() - '23 days'::INTERVAL, 'Use peaches without added syrup. Bake at 300 degress for 40min.'),
('The best Acrylic Paints for an Intermediate Artist', now() - '22 days'::INTERVAL, 'Golden, Liquitex, Sennelier, Winsor & Newton.'),
('The best way to become creative', now() - '21 days'::INTERVAL, 'Begin by getting inspired by Spongebob and unleash your Imagination.'),
('What to expect with your 3 month old', now() - '20 days'::INTERVAL, 'Sleepless nights, smiles, finding their voice.'),
('What to expect with your 4 month old', now() - '19 days'::INTERVAL, 'Sleepless nights, shorter nap times, discovering their hands.'),
('What to expect when expecting', now() - '18 days'::INTERVAL, 'This article can only prepare you so much. Pregnancy is different for every woman, every time.'),
('The best childrens books', now() - '17 days'::INTERVAL, 'the hungry caterpillar, charlie''s purple crayon, rainbow fish, just to name a few.'),
('The best fantasy books', now() - '16 days'::INTERVAL, 'The Lord of The Rings, Game of Thrones, Harry Potter.'),
('The most interesting book with coding involved in the story', now() - '15 days'::INTERVAL, 'The Millennium series by Stieg Larsson continued by David Lagercrantz.'),
('Some of the most Intriguing Podcasts', now() - '14 days'::INTERVAL, 'The Joe Rogan Experience, Between the Reps, The HoneyDew, Code Newbie'),
('Did Trump Do It?', now() - '13 days'::INTERVAL, 'An unbiased look into the accusations against President Trump and the evidence for/against, in order for you to come to an educated decision'),
('The 2020 Election', now() - '12 days'::INTERVAL, 'A collection of the potential candidates and an unbiased list of their views, plans and history.'),
('Thanksgiving Dinner: Traditional or Experimental', now() - '11 days'::INTERVAL, 'A survey on how many American families still do the traditional turkey dinner vs how many are creating new Thanksgiving meals with their families.'),
('Marriage is a Rollercoaster', now() - '10 days'::INTERVAL, 'How do you stay together during the lows and grow continuesly, creating an even stronger bond through the inclines and declines.');

COMMIT;
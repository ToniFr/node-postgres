### Start the application locally

First install npm dependencies by:

`npm install`

Start the server on `http://localhost:5000` https with:

`npm run serve`

Feel free to use curl or any REST client against API endpoints.

### How to test certain parts of article?

There are 3 major commits inside this repo:

step 1 -> codebase state after setting the mock server working with in-memory data
step 2 -> codebase state after feature flag branching implementation (endpoints work both with in-memory data and database)
step 3 -> codebase state after completed migration to database feature (endpoints work only with database)

Feel free to checkout any of these commits to test behaviour according to certain part of the article.
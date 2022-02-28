# NodeJS practice

Just a simple CRUD project where I practiced with node js and express.

## Installation

Use the package manager [npm](https://docs.npmjs.com/) to download dependencies.

```bash
npm i
```

## Usage

With Postman open the collection named _postman_collectionv2.1.json_ listed here in the repository.
They are available different API:
- GET _/articles_ to get all the articles
- GET _/article/:id_ to get one specific article
- POST _/article/_ to create an article with body for example
```json
{
    "title": "Title",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "author": "Author",
    "tag": ["node.js", "javascript", "mongodb"]
}
```
- POST _/articles/_ to create many articles with body for example
```json
{
    "articles": [
        {
            "title": "Title2",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "author": "Author",
            "tag": ["node.js", "javascript", "mongodb"]
        },
        {
            "title": "Title3",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "author": "Author",
            "tag": ["node.js", "javascript", "mongodb"]
        }
    ]
}
```
- PUT _/article/_ to update an article with the body
```json
{
    "_id": "6217a4e0ce19cb291012b6d4",
    "title": "Title updated",
    "text": "text updated",
    "author": "Author updated",
    "tag": ["node.js", "javascript", "mongodb", "updated"]
}
```
- DELETE _/articles/_ to delete all articles
- DELETE _/article/:id_ to delete one specific article
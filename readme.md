
STEP 1 : Setup a node project
1. express
2. nodemon - DONE
3. babel - DONE
4. dotenv - DONE
5. mongoose
'''
npm i express dotenv nodemon mongoose @babel/node@7 
@babel/core@7 @babel/cli@7 @babel/preset-env@7
'''

STEP 2 : Create a server

STEP 3 : Connect to MongoDB using Mongoose


STEP 4 : Mapping out your project
USER
firstname
lastname
username
password
profilePic

AUTHOR
name
description
profilePic
age
facebook
instagram
linkedin
email

GENRE
name
description

BOOK
name
description
price
releaseDate
authorName
genre
rating
soldQuantity


STEP 5: Start by selecting to create a single collection
1. Selected GENRE 
2. Create Model in mongoose (Mongoose model -> Mongo DB Collection)
3. To create controllers
API List for GENRE
Create genre            POST        http://localhost:8000/api/v1/genre
Fetch all genre         GET         http://localhost:8000/api/v1/genre
Fetch single genre      GET         http://localhost:8000/api/v1/genre/id
Update single genre     PUT         http://localhost:8000/api/v1/genre/id
Delete single genre     DELETE      http://localhost:8000/api/v1/genre/id

# Furniture Management Software

<h2>App Featuers:</h2>

<h3>1) Security:</h3>
The software comes with a login page:<br/><br/>

![alt text](https://imgur.com/1nyyIbU.png)

<h3>2) Nice user interface:</h3>

![alt text](https://imgur.com/dNmMlxA.png)

<h3>3) Add product feature:</h3>

![alt text](https://imgur.com/reNszb2.png)

<h3>4) Search feature:</h3>
Search for products by thier category, name or id:<br/><br/>

![alt text](https://imgur.com/L48i6Yl.png)

<h3>5) Update feature:</h3>
Select a product and update its data (change the image, product name, category, price and quantity)<br/><br/>

![alt text](https://imgur.com/xRuAt3q.png)

<h3>5) Delete feature:</h3>
Select a product or products and delete them

<h2>Run the app:</h2>

1) First you should have node installed: https://nodejs.org/en/download/
2) Clone this repo
3) Go to its directory
4) Run the following command:
        
        npm install --save-dev electron

5) Open the following files /scripts/main.js && /scripts/login.js
6) Search for the firebase configuration bellow and replace it with yours

        var firebaseConfig = {
          apiKey: "YOUR-API-KEY",
          authDomain: "example.firebaseapp.com",
          databaseURL: "https://example.firebaseio.com",
          projectId: "YOUR-PROJECT-ID",
          storageBucket: "example.appspot.com",
          messagingSenderId: "messagingSenderId",
          appId: "YOUR-appId"
        }
          
7) Add a node called 'login' to your firebase realtime database

        {
          login:{
            username:"YOUR-USERNAME"
            password:"YOUR-PASSWORD"
          }
        }
        
8) Run the app:

        npm start

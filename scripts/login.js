      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "YOUR-API-KEY",
        authDomain: "example.firebaseapp.com",
        databaseURL: "https://example.firebaseio.com",
        projectId: "YOUR-PROJECT-ID",
        storageBucket: "example.appspot.com",
        messagingSenderId: "messagingSenderId",
        appId: "YOUR-appId"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
      var firebaseRef = firebase.database().ref().child('login');
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        document.getElementById("login").addEventListener("click",function(){
          var username = document.getElementById("username");
          var password = document.getElementById("pass");
          if (username.value==loginInfo.username && password.value==loginInfo.password){
            location.replace("home.html");
          }else if(username.value!=loginInfo.username){
            username.style.borderColor="red";
          }else if(password.value!=loginInfo.password){
            password.style.borderColor="red";
          }
        });
      });

      document.getElementById('pass').addEventListener("input",function(){
        document.getElementById("pass").style.borderColor="#ccc";
      });
      document.getElementById('username').addEventListener("input",function(){
        document.getElementById("username").style.borderColor="#ccc";
      });
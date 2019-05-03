(function(){
    
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCTDZc7XPVCKZC_JA3nVJmj2xQ7rojtbOE",
    authDomain: "haqou-40d21.firebaseapp.com",
    databaseURL: "https://haqou-40d21.firebaseio.com",
    projectId: "haqou-40d21",
    storageBucket: "haqou-40d21.appspot.com",
    messagingSenderId: "241003348049"
  };
  firebase.initializeApp(config);

     var database = firebase.database();
     var ref = database.ref('enseignant');
    
    // get element 
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    var txtNom = document.getElementById('txtNom');
    var txtSpécialité = document.getElementById('txtSpécialité');

    
    const btnLogin = document.getElementById('btnLogin');
    const btnSingUp= document.getElementById('btnSingUp');
    const btnLogout = document.getElementById('btnLogout');
    
    /*var txtNom1 = txtNom.value;
    var txtSpécialité1 = txtSpécialité.value;
    var txtEmail1 = txtEmail.value;
    var data = {
        nom_complet : txtNom1 ,
        spécialité : txtSpécialité1,
        Email : txtEmail1
    }*/
    // ref.push(data);
   // add login event 
    
   /* btnLogin.addEventListener('click', e=>{
        // get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth =firebase.auth();
        // sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
       // window.location.replace("store.html");
    });*/
    
    //add signup event
    btnSingUp.addEventListener('click', e=>{
        // get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth =firebase.auth();
        // sign 
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    
    btnLogout.addEventListener('click', e =>{
        firebase.auth().signOut();
    });
    
    
    // realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            console.log('Connecté ');
    var txtNom1 = txtNom.value;
    var txtSpécialité1 = txtSpécialité.value;
    var txtEmail1 = txtEmail.value;
    var data = {
    

        nom_complet : txtNom1 ,
        spécialité : txtSpécialité1,
        Email : txtEmail1
    }
            ref.push(data);
            document.location.href = 'store.html';
        }else {
            console.log('not logged in ');
        }
        
    });
    

}());
const login_btn = document.querySelector('.login_btn');
login_btn.addEventListener('click', () => {
  console.log('click to login button');
});















// const request = new XMLHttpRequest();
// const url = 'https://casper-7b9ef-default-rtdb.firebaseio.com/';

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


// // Login
// const login_btn = document.querySelector('.login_btn'); // Get login BTN
// login_btn.addEventListener('click', () => {


//     var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
//     var theUrl = 'https://jsonblob.com/api/jsonBlob/1109408482632941568';
//     xmlhttp.open("POST", theUrl);
//     xmlhttp.setRequestHeader("Content-Type", "application/json");
//     xmlhttp.send(JSON.stringify({ "status" : "post" }));








//     // After click to btn
//     var input_name = document.querySelector('.login_input').value; // login input
//     var input_pass = document.querySelector('.pass_input').value; // pass input
//     request.open('GET', url, true); // XML request
//     request.onload = () => {
//         // After load the api data
//         db = JSON.parse(request.response); // parse to JSON format
//         // Get the correct user data
//         console.log(db);
//         for(var i = 0; i < db['users'].length; i++){
//             if(db['users'][i]['name'] == input_name && db['users'][i]['pass'] == input_pass){
//                 document.querySelector('.error_out').innerHTML = 'All good';
//                 document.querySelector('.error_out').style.color = 'green';
//             }else{
//                 document.querySelector('.error_out').innerHTML = 'Account not found';
//                 document.querySelector('.error_out').style.color = 'red';
//             }
//         }
//     }

//     request.send(); // Send the response 
// });
// // ==============================================


// /*
// JSON template
// {
//   "users": [
//     {
//       "id": 1,
//       "name": "Elon",
//       "pass": 123,
//       "officeId": 123,
//       "owner": false,
//       "margin": 10000,
//       "loads": [
//         {
//           "loadNumber": [
//             1467,
//             11150821
//           ],
//           "date": [
//             "5/11/2023",
//             "5/12/2023"
//           ],
//           "line": [
//             "Dallas, TX",
//             "Laredo, TX"
//           ],
//           "mc": [
//             1428295,
//             984123
//           ],
//           "id": 1,
//           "status": "on the wey",
//           "payment": false
//         }
//       ]
//     }
//   ]
// }

// */
var firebaseConfig = {
  apiKey: "AIzaSyAk74vUbQRE6pS14vzfdojUQUCQXUbDUew",
  authDomain: "campifylk-website.firebaseapp.com",
  databaseURL: "https://campifylk-website.firebaseio.com",
  projectId: "campifylk-website",
  storageBucket: "campifylk-website.appspot.com",
  messagingSenderId: "818004307328",
  appId: "1:818004307328:web:bc5b3deda82202b2efa565"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref("messages");

//Listen for Form submit
document.getElementById("contactform").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputVal("name");
  var location = getInputVal("location");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var reqitems = getInputVal("reqitems");
  var message = getInputVal("message");

  //Save message
  saveMessage(name, location, email, phone, reqitems, message);

  //Show Alert
  document.querySelector(".alert").style.display = "block";

  //Hide alert timeout
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //Clear Form
  document.getElementById("contactform").reset();
}

//Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Function to save the message to firebase
function saveMessage(name, location, email, phone, reqitems, message) {
  var newMessafeRef = messagesRef.push();
  newMessafeRef.set({
    name: name,
    location: location,
    email: email,
    phone: phone,
    reqitems: reqitems,
    message: message,
  });
}

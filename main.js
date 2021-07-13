// js file for contact form

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8YKWzRqvyY6_OANcUBsIuqFcER7PsjUg",
    authDomain: "my-portfolio-8c6ab.firebaseapp.com",
    databaseURL: "https://my-portfolio-8c6ab-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-8c6ab",
    storageBucket: "my-portfolio-8c6ab.appspot.com",
    messagingSenderId: "595940651624",
    appId: "1:595940651624:web:ae582844316106b55401dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let contactInfo = firebase.database().ref("Contact_Data");

// Listen for a submit
document.querySelector(".detailsFetch").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let contact_num = document.getElementById("contact_num").value;
    let msg = document.getElementById("message").value;
    let newsLetter = document.getElementById("newsletter")


    console.log(fullName, email, contact_num,msg,newsLetter);

    saveContactInfo(fullName, email, contact_num, msg,newsLetter);

    displayAlert();

    document.querySelector(".detailsFetch").reset();
}

// Save infos to Firebase
function saveContactInfo(fullName, email, contact_num, msg, newsLetter) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Name: fullName,
        Email : email,
        ContactNumber: contact_num,
        Message: msg,
        NewsLetter: newsLetter,
    });
}

function displayAlert() {
    swal({
        title: "Thank you!",
        text: "I will contact you soon",
        icon: "success",
        button: "Done",
    });
}

// desktop view button
function requestDesktopSite(){
    if(document.getElementsByTagName('meta')['viewport'].content=='width= 1440px;'){
     document.getElementsByTagName('meta')['viewport'].content='width= 400px;';
    }else{
     document.getElementsByTagName('meta')['viewport'].content='width= 1440px;';
    }
   }
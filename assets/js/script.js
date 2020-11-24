






// Array to Store Data
let myArr = [];

// Grabbing Elements
const form = document.querySelector("form");
const displayContainer = document.querySelector(".display"); 

// Grabbing Buttons
const submitBtn = document.getElementById("Submit");
const cancelBtn = document.getElementById("cancel");

// Grabbing Details
let firstNameData  = document.getElementById("firstName");
let lastNameData  = document.getElementById("lastName");
var genderValue  = null;
let genderData = document.querySelectorAll('input[name = "gender"]:checked');
    if (genderData) {
        genderValue = genderData.value;
    }else{
        genderValue = "hello";
    }
        // console.log(genderData)
        // console.log(genderValue)
let addressData  = document.getElementById("address");
let termsData  = document.querySelector("#terms");

// Validating firstname,lastname and  gender
let validFirstName = false, validLastName = false, validAddress = false;

// FirstName Verfication
firstNameData.addEventListener("blur",(e)=>{
    let firstNameregex = /^[a-zA-z]([a-zA-z]){2,9}$/
    let firstName = firstNameData.value;
    const inputBox = firstNameData.closest(".input-box");
    // console.log(inputBox);
    if(firstNameregex.test(firstName)){

        // Adding and removing class for Border Color
        firstNameData.className = "green-border";
        firstNameData.classList.remove("red-border")
        
        let span = firstNameData.nextElementSibling;
        span.style.display = "none";
        validFirstName = true;

    }
    else if(firstName === ""){
        firstNameData.classList.add("red-border");
        firstNameData.classList.remove("green-border");

        let span = firstNameData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class","red-text");
        let errorMessage = "First Name Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validFirstName = false;
    }
    else{

        // Adding and removing class for Border Color
        firstNameData.classList.add("red-border")
        firstNameData.classList.remove("green-border")

        let span = firstNameData.nextElementSibling;
        span.setAttribute("class","red-text");
        let errorMessage = "Name should be between 3 to 10 character and should not start with Number."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validFirstName = false;
    }
})

// lastName Verfication
lastNameData.addEventListener("blur",(e)=>{
    let lastNameRegex = /^[a-zA-z]([a-zA-z]){2,14}$/
    let lastName = lastNameData.value;
    const inputBox = lastNameData.closest(".input-box");
    if(lastNameRegex.test(lastName)){
        // Adding and removing class for Border Color
        lastNameData.className = "green-border";
        lastNameData.classList.remove("red-border")
        
        let span = lastNameData.nextElementSibling;
        span.style.display = "none"

        validLastName = true;
    }
    else if(lastName === ""){
        lastNameData.classList.add("red-border")
        lastNameData.classList.remove("green-border")

        let span = lastNameData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class","red-text");
        let errorMessage = "Last Name Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validLastName = false;

    }else{
        // Adding and removing class for Border Color
        lastNameData.classList.add("red-border")
        lastNameData.classList.remove("green-border")

        let span = lastNameData.nextElementSibling;
        span.setAttribute("class","red-text");
        let errorMessage = "Last Name should be between 3 to 15 character and should not start with Number."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validLastName = false;
    }
})

// Gender Verification
// let genderData = document.querySelectorAll("input[name='gender']:checked");

// Address Validation
addressData.addEventListener("blur",()=>{
    let regex = /^[a-zA-z]([0-9a-zA-z\s\,\:\.]){2,149}$/
    let name = addressData.value;
    const inputBox = addressData.closest(".input-box");
    if(regex.test(name)){
        // Adding and removing class for Border Color
        addressData.className = "green-border";
        addressData.classList.remove("red-border")
        
        let span = addressData.nextElementSibling;
        span.style.display = "none";
        validAddress = true;
    }
    else if(name === ""){
        addressData.classList.add("red-border")
        addressData.classList.remove("green-border")

        let span = addressData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class","red-text");
        let errorMessage = "Address Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validAddress = false;

    }
    else{
        // Adding and removing class for Border Color
        addressData.classList.add("red-border")
        addressData.classList.remove("green-border")

        let span = addressData.nextElementSibling;
        span.setAttribute("class","red-text");
        let errorMessage = "Address should be between 3 to 150 character & can only use (. , :) symbols."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validAddress = false;
    }
    
})


// Terms and Condition Validation
if(!(termsData)){
    let span = termsData.parentElement;
    console.log(span);
}


// Function for Changing Border color After Submmitting
function borderColor(){
    firstNameData.classList.remove("green-border");
    firstNameData.classList.add("border");
    lastNameData.classList.remove("green-border");
    lastNameData.classList.add("border");
    addressData.classList.remove("green-border");
    addressData.classList.add("border");
}
//Function to  Reset The Form
function formReset(){
    firstNameData.value = "";
    lastNameData.value = "";
    addressData.value = "";
}

// function for data storing 
function data(){

    let objData = {
        name: firstNameData.value.trim(),
        surname: lastNameData.value.trim(),
        gender: genderValue,
        address: addressData.value.trim(),
    };
    // adding datas into Array
    myArr.push(objData);
    borderColor();
    formReset();
}

// function to display  
function display(){
    // Creating Ul
    let ul = document.createElement("ul");
    ul.className = "display-box";

    // creating li     
    for (key in myArr[myArr.length - 1]) {
        let li = document.createElement("li");
        li.textContent = myArr[myArr.length - 1][key];
        ul.appendChild(li);
        console.log(li)
    }
    console.log(myArr);

    // Creating Edit Li
    let editli = document.createElement("li");
    let editBtn = document.createElement("button");
    editBtn.setAttribute("title", "Edit");
    editBtn.setAttribute("class", "btn");
    editBtn.textContent = "Edit";
    editli.appendChild(editBtn);
    ul.append(editli);

    // Creating Delete Li
    let deleteli = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("title", "Button");
    deleteBtn.setAttribute("class", "btn");
    deleteBtn.textContent = "Delete";
    deleteli.appendChild(deleteBtn);
    ul.append(deleteli);

    // Adding Ul to the HTML
    displayContainer.appendChild(ul);

    // adding click event to element

}

//Functioning Submit Button 
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(validFirstName, validLastName, validAddress);
    if(validFirstName && validLastName && validAddress){
        data();
        display();
        validLastName = false;
        validFirstName=false;
        validAddress=false;
    }    
    else{
    }
})

// Functioning Cancel Button
cancelBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formReset();
    borderColor();
})


// Functioning Delete Button















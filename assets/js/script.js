
// Array to Store Data
let myArr = [];

// Grabbing Elements
const form = document.querySelector("form");
const displayContainer = document.querySelector(".display");

// Grabbing Buttons
const submitBtn = document.getElementById("Submit");
const cancelBtn = document.getElementById("cancel");

// Grabbing Details
let firstNameData = document.getElementById("firstName");
let lastNameData = document.getElementById("lastName");
let addressData = document.getElementById("address");
let termsData = document.querySelector("#terms");

// Validating firstname,lastname and  gender
let validFirstName = false, validLastName = false, validAddress = false;

// FirstName Verfication
firstNameData.addEventListener("blur", (e) => {
    let firstNameregex = /^[a-zA-z]([a-zA-z]){2,9}$/
    let firstName = firstNameData.value;
    const inputBox = firstNameData.closest(".input-box");
    // console.log(inputBox);
    if (firstNameregex.test(firstName)) {

        // Adding and removing class for Border Color
        firstNameData.className = "green-border";
        firstNameData.classList.remove("red-border")

        let span = firstNameData.nextElementSibling;
        span.style.display = "none";
        validFirstName = true;

    }
    else if (firstName === "") {
        firstNameData.classList.add("red-border");
        firstNameData.classList.remove("green-border");

        let span = firstNameData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class", "red-text");
        let errorMessage = "First Name Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validFirstName = false;
    }
    else {

        // Adding and removing class for Border Color
        firstNameData.classList.add("red-border")
        firstNameData.classList.remove("green-border")

        let span = firstNameData.nextElementSibling;
        span.setAttribute("class", "red-text");
        let errorMessage = "Name should be between 3 to 10 character and should not start with Number."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validFirstName = false;
    }
})

// lastName Verfication
lastNameData.addEventListener("blur", (e) => {
    let lastNameRegex = /^[a-zA-z]([a-zA-z]){2,14}$/
    let lastName = lastNameData.value;
    const inputBox = lastNameData.closest(".input-box");
    if (lastNameRegex.test(lastName)) {
        // Adding and removing class for Border Color
        lastNameData.className = "green-border";
        lastNameData.classList.remove("red-border")

        let span = lastNameData.nextElementSibling;
        span.style.display = "none"

        validLastName = true;
    }
    else if (lastName === "") {
        lastNameData.classList.add("red-border")
        lastNameData.classList.remove("green-border")

        let span = lastNameData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class", "red-text");
        let errorMessage = "Last Name Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validLastName = false;

    } else {
        // Adding and removing class for Border Color
        lastNameData.classList.add("red-border")
        lastNameData.classList.remove("green-border")

        let span = lastNameData.nextElementSibling;
        span.setAttribute("class", "red-text");
        let errorMessage = "Last Name should be between 3 to 15 character and should not start with Number."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validLastName = false;
    }
})

// Gender Verification
let genderData = document.querySelector("input[name='gender']:checked");
let femaleCheckbox = document.getElementById("female");
// genderData.addEventListener("click",(e)=>{
//     let genderNewData = document.querySelector("input[name='gender']");
//     if(genderNewData[0].checked){
//         console.log("Male is checked")
//     }
//     else if(genderNewData[1].checked){
//         console.log("Female is checked")
//     }
// })

// Address Validation
addressData.addEventListener("blur", () => {
    let regex = /^[a-zA-z]([0-9a-zA-z\s\,\:\.]){2,149}$/
    let name = addressData.value;
    const inputBox = addressData.closest(".input-box");
    if (regex.test(name)) {
        // Adding and removing class for Border Color
        addressData.className = "green-border";
        addressData.classList.remove("red-border")

        let span = addressData.nextElementSibling;
        span.style.display = "none";
        validAddress = true;
    }
    else if (name === "") {
        addressData.classList.add("red-border")
        addressData.classList.remove("green-border")

        let span = addressData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class", "red-text");
        let errorMessage = "Address Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validAddress = false;

    }
    else {
        // Adding and removing class for Border Color
        addressData.classList.add("red-border")
        addressData.classList.remove("green-border")

        let span = addressData.nextElementSibling;
        span.setAttribute("class", "red-text");
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
function borderColor() {
    firstNameData.classList.remove("green-border");
    firstNameData.classList.add("border");
    lastNameData.classList.remove("green-border");
    lastNameData.classList.add("border");
    addressData.classList.remove("green-border");
    addressData.classList.add("border");
}
//Function to  Reset The Form
function formReset() {
    firstNameData.value = "";
    lastNameData.value = "";
    addressData.value = "";
}

// function for data storing 
function data() {
    // var genderValue = null;
    let genderData = document.querySelector('input[name = "gender"]:checked');
    console.log(genderData);
    if (genderData) {
        var genderValue = genderData.value;
    }
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
function display() {
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
    deleteli.addEventListener("click", deleteSelectedRow);
}

//Functioning Submit Button 
// submitBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     // console.log(validFirstName, validLastName, validAddress);
//     if(validFirstName && validLastName && validAddress){
//         data();
//         display();
//         validLastName = false;
//         validFirstName=false;
//         validAddress=false;
//     }    
//     else{
//     }
// })

// Functioning Cancel Button
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let span = femaleCheckbox.nextElementSibling.nextElementSibling;

    formReset();
    borderColor();

   
    firstNameData.classList.remove("red-border");
    firstNameData.nextElementSibling.style.display = "none";
    lastNameData.classList.remove("red-border");
    lastNameData.nextElementSibling.style.display = "none";
    addressData.classList.remove("red-border");
    addressData.nextElementSibling.style.display = "none";
    span.style.display = "none"

})


// Functioning Delete Button

// Submitting 
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (firstNameData.value === "") {
        const inputBox = firstNameData.closest(".input-box");
        firstNameData.classList.add("red-border");
        firstNameData.classList.remove("green-border");

        let span = firstNameData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class", "red-text");
        let errorMessage = "First Name Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validFirstName = false;
    }
    if (lastNameData.value === "") {
        const inputBox = lastNameData.closest(".input-box");
        lastNameData.classList.add("red-border")
        lastNameData.classList.remove("green-border")

        let span = lastNameData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class", "red-text");
        let errorMessage = "Last Name Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validLastName = false;

    }
    if (addressData.value === "") {
        const inputBox = addressData.closest(".input-box")
        addressData.classList.add("red-border")
        addressData.classList.remove("green-border")

        let span = addressData.nextElementSibling;
        span.style.display = "block";
        span.setAttribute("class", "red-text");
        let errorMessage = "Address Cannot be empty."
        span.textContent = errorMessage;
        span.style.display = "block";
        inputBox.appendChild(span);
        validAddress = false;
    }
    if (validFirstName && validLastName && validAddress) {
        data();
        display();
        validLastName = false;
        validFirstName = false;
        validAddress = false;
    }

    if(!(genderData)){
        let span = femaleCheckbox.nextElementSibling.nextElementSibling;
        span.style.display = "block";
        span.className = "red-text"
        span.textContent = "Please check atleast One button"
    }else if(genderData){
        let span = femaleCheckbox.nextElementSibling.nextElementSibling;
        span.style.display = "none";
        console.log("Not chec")
    }
})


// Delete Row
function deleteSelectedRow(){

// grabing all Ul
let displayBox = displayContainer.children;

let emptyArr = [];
for(let i=0; i<displayBox.length; i++){
    emptyArr.push(displayBox[i]);
}
for (var i = 0; i < displayBox.length; i++) {
    displayBox[i].onclick = function () {
      var index = emptyArr.indexOf(this);
      if(index > 0){
        myArr.splice(index, 1);
        console.log(index)
        var ulRemove = document.querySelector(".display");
        ulRemove.removeChild(ulRemove.children[index]);
      }
    }
}
}
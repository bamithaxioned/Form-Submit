
// Array to Store Data
let myArr = [];

// Grabbing Elements
const form = document.querySelector("form");
const displayContainer = document.querySelector(".display");

// Grabbing Buttons
const submitBtn = document.getElementById("Submit");
const cancelBtn = document.getElementById("cancel");

let genderData = document.querySelector("input[name='gender']:checked");
let genderArray = document.querySelectorAll("input[name='gender']");
let femaleCheckbox = document.getElementById("female");

// Grabbing Details
let firstNameData = document.getElementById("firstName");
let lastNameData = document.getElementById("lastName");
let addressData = document.getElementById("address");
let termsData = document.querySelector("#terms");

// Validating firstname,lastname , address , terms & condition and  gender
let validFirstName = false, validLastName = false, validAddress = false, validGender = false, validTerms= false;

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
        // inputBox.appendChild(span);
        validLastName = false;
    }
})

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

// Function for validating Gender
function genderValidate(){
    let genderSpan = femaleCheckbox.nextElementSibling.nextElementSibling;
    if(genderArray[0].checked == true || genderArray[1].checked == true){
        validGender = true;
        genderSpan.style.display = "none";
    }else{
        validGender = false;
        genderSpan.style.display = "block";
        genderSpan.classList.add("red-text");
        genderSpan.textContent = "Please Select your Gender"; 
    }
}

// Function for Changing Border color After Submmitting
function borderColor() {
    firstNameData.classList.remove("green-border");
    firstNameData.classList.add("border");
    lastNameData.classList.remove("green-border");
    lastNameData.classList.add("border");
    addressData.classList.remove("green-border");
    addressData.classList.add("border");
    // let span = femaleCheckbox.nextElementSibling.nextElementSibling;
    // span.style.display = "none";
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
        // console.log(li);
    }
    // console.log(myArr);

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

    // adding click event to Delete button and edit Button
    deleteli.addEventListener("click", deleteSelectedRow);
    editli.addEventListener("click",editSelectedRow)
}

// Function To remove the click sign from radio Button of Gender 
function removeRadioSign(){
    if(genderArray[0].checked == true || genderArray[1].checked == true){
        genderArray[0].checked = false;
        genderArray[1].checked = false;
    }
}

// Function to remove the checkbox sign of terms and conditions
function removeCheckboxSign(){
    if(terms.checked == true){
        terms.click();
    }
}

// Functioning Cancel Button
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let span = femaleCheckbox.nextElementSibling.nextElementSibling;
    let termsErrorMessage = termsData.nextElementSibling.lastElementChild;

    formReset();
    borderColor();
   
    firstNameData.classList.remove("red-border");
    firstNameData.nextElementSibling.style.display = "none";
    lastNameData.classList.remove("red-border");
    lastNameData.nextElementSibling.style.display = "none";
    addressData.classList.remove("red-border");
    addressData.nextElementSibling.style.display = "none";
    span.style.display = "none"
    termsErrorMessage.style.display = "none";

    // To remove the click sign from radio Button of Gender 
    removeRadioSign();

    // to remove the checkbox sign of terms and conditions
    removeCheckboxSign();
})

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

    // Validation for Gender
    genderValidate();

    // Validation terms and condition checkbox
     if(termsData.checked == true){
        let termsErrorMessage = termsData.nextElementSibling.lastElementChild;
        validTerms = true;
        // console.log(validTerms);
        termsErrorMessage.style.display = "none";
    }  
    else{
        validTerms = false;
        // console.log(validTerms);
        let termsErrorMessage = termsData.nextElementSibling.lastElementChild;
        // console.log(termsErrorMessage);
        termsErrorMessage.style.display = "block";
        termsErrorMessage.classList.add("red-text")
        termsErrorMessage.textContent = "Please Accept the Terms and Condition" ;
    }

    // 
    if (validFirstName && validLastName && validAddress && validGender && validTerms) {
        data();
        display();
        // To remove the click sign from radio Button of Gender 
        removeRadioSign();

        // to remove the checkbox sign of terms and conditions
        removeCheckboxSign();
        validLastName = false;
        validFirstName = false;
        validAddress = false;
        // validTerms = false;
        // validGender = false;
    }
    // console.log(myArr);
})

// Delete Row
function deleteSelectedRow(){
// grabing all Ul
let displayBox = displayContainer.children;

  // Creating an array to add all Ul in it
  let emptyArr = [];
    //iterating ul and adding it inside array
    for(let i=0; i<displayBox.length; i++){
        emptyArr.push(displayBox[i]);
    }
    // iterating ul and grabbing index of the the ul and splicing it 
    for (var i = 0; i < displayBox.length; i++) {
        displayBox[i].onclick = function () {
            // grabbing index of displayBox[i]
        var index = emptyArr.indexOf(this);
        console.log(index);
            if(index > 0){
                myArr.splice(index, 1);;
                var ulRemove = document.querySelector(".display");
                console.log(ulRemove.children[index]);
                ulRemove.removeChild(ulRemove.children[index]);
            }
        }
    }
}

// Function the Edit Button of li
function editSelectedRow(){

    let displayBox = displayContainer.children; 
    let editArray = [];

    for(let i=0;i<displayBox.length; i++){
        editArray.push(displayBox[i]);
    }
    console.log(editArray);
    for(let i=0; i<displayBox.length; i++){
        displayBox[i].onclick =function(){
             let index = editArray.indexOf(this);
             console.log(index);
             if(index > 0){
                // array to store the values of a single ul
                let ulArray = [];
                // iterating ul
                for(key in myArr[index - 1]){
                    ulArray.push(myArr[index - 1][key]);
                }

                let firstName = document.querySelector("#firstName");
                let lastName = document.querySelector("#lastName");
                let genderArr = document.querySelectorAll("input[name='gender']")
                let address = document.querySelector("#address");
                
                // Adding values in inputs
                firstName.value = ulArray[0];
                lastName.value = ulArray[1];
                // gender
                if(ulArray[2] === "Male"){
                    genderArr[0].checked = true;
                    // document.querySelector("#male").checked = true;
                }else{
                    genderArr[1].checked = true;
                    // document.querySelector("#female").checked = true;
                }
                address.value = ulArray[3];

                console.log(myArr); 
                // removing from main array
                myArr.splice(index -1, 1);
                console.log(myArr);
                let editUl = document.querySelector(".display");
                editUl.removeChild(editUl.children[index]);

             }
        }
    }
}
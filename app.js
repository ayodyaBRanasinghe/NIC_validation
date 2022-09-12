//display a message with input
function showMessage(input, message, type) {
	
// get the small element and set the message
const msg = input.parentNode.querySelector("small");

//getting the message
msg.innerText = message;

// update the class for the input
input.className = type ? "success" : "error";

return type;

}


//display the error message
function showError(input, message) {
	return showMessage(input, message, false);
}


//display the success message
function showSuccess(input) {
	return showMessage(input, "", true);
}


//display the message related to the input and empty 
function hasValue(input, message) {
	
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	
	return showSuccess(input);
}


//validation of NIC
function validateNIC(input, requiredMsg, invalidMsg) {
	
	
// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	
	
// validate NIC format related to the given number format
	const nicRegex = /^([0-9]{9}[xXvV]|[0-9]{12})$/;
	
	const nic = input.value.trim();
	
	
//if NIC is not match with the above format then display it as a error or not
	if (!nicRegex.test(nic)) {
		return showError(input, invalidMsg);
		
	}
	
	return true;
}

//display of the output
const form = document.querySelector("#new1");


//when there is the given field is empty the message is displayed as below.
const NAME_REQUIRED = "Please enter your name";
const NIC_REQUIRED = "Enter your National Identity Card Number";
const NIC_INVALID =""; 


//to submit the form
form.addEventListener("submit", function (event) {

	
// stop form submission
event.preventDefault();


// validate the form with given format
let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
let nicValid = validateNIC(form.elements["nic"], NIC_REQUIRED, NIC_INVALID);


// if entered name and NIC are valid then display a alert message.
if (nameValid && nicValid) {
	alert("you are successfully logged in.");
}


//if entered NIC is not valid or incorrect with the given format then display it as a alert message.
else if (!nicValid) {
		alert("please enter valid NIC ");
	}
	
});













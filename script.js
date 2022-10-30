function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneInput = document.getElementById('phone').value
    let genderInput = document.getElementById('gender').value
    let countryInput = document.getElementById('country').value
    
    let error = false

    if(firstNameInput && firstNameInput.length >=3) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if(lastNameInput && lastNameInput.length >=3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf("@") !==0) {
        
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
    } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true;
    }

    if(phoneInput != ' ' &&
        phoneInput.length === 10) {
        document.getElementById("phone-valid").style.display = "block";
        document.getElementById("phone-invalid").style.display = "none";
    }

    else {
        document.getElementById("phone-invalid").style.display = "block";
        document.getElementById("phone-valid").style.display = "none";
        error = true;
    }

    if(genderInput !== 'None'){
		document.getElementById('gender-valid').style.display = "block";
		document.getElementById('gender-invalid').style.display = "none";
	} else {
		document.getElementById('gender-invalid').style.display = "block";
		document.getElementById('gender-valid').style.display = "none";
		error = true
    }
    
    if(countryInput !== 'None'){
		document.getElementById('country-valid').style.display = "block";
		document.getElementById('country-invalid').style.display = "none";
	} else {
		document.getElementById('country-invalid').style.display = "block";
		document.getElementById('country-valid').style.display = "none";
		error = true
    }
    
    

	if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('phone').value = ''
		document.getElementById('gender').value = ''
		document.getElementById('country').value = ''
		

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("phone-valid").style.display = "none";
		document.getElementById("gender-valid").style.display = "none";
		document.getElementById('country-valid').style.display = "none";
	}

}

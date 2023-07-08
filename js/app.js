const emailError = document.querySelector(".error-msg")
const warning = document.querySelector('.warning')
const subBtn = document.querySelector('.sub-btn')
const dismissBtn = document.querySelector('.dismiss-btn')
const emailInput = document.getElementById('email')
const notValid = document.querySelector('.not-valid')

subBtn.addEventListener("click", function (e) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if (emailInput.value && emailInput.value.matches(emailRegex)) { 
            warning.classList.add('active')
            console.log(e)
      } else {
            notValid.classList.add('active')
      }
})

dismissBtn.addEventListener('click', function() {
      warning.classList.remove('active')
})

// function validateEmail() {
//       let email = document.getElementById('email').value;

//       if (email.length == 0) {
//             emailError.innerHTML = 'Valid Email Required'
//             return false;
//       }
      
//       if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//             emailError.innerHTML = 'Valid Email Required'
//             return false;
//       }
      
//       emailError.innerHTML = '';
//       return true;
// }



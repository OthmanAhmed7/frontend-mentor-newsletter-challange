const emailError = document.querySelector(".error-msg")
const warning = document.querySelector('.warning')
const subBtn = document.querySelector('.sub-btn')
const dismissBtn = document.querySelector('.dismiss-btn')
const emailInput = document.getElementById('email')
const notValid = document.querySelector('.not-valid')



subBtn.addEventListener("click", function (e) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if (emailInput.value && emailInput.value.match(emailRegex)) { 
            warning.classList.add('active')
            console.log(e)
            notValid.classList.remove('visible')
      } else {
            notValid.classList.add('visible')
      }
})

dismissBtn.addEventListener('click', function() {
      warning.classList.remove('active')
})

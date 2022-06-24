
function sendMail(){

  let params = {

    from_name: document.getElementById("name").value,
    email_id:  document.getElementById("email").value,
    message: document.getElementById("message").value
  }
  emailjs.send("service_j58cloi", "template_e8aqufn", params);
};



const form = document.getElementById("form");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
let isValid = false;

function validateForm(){

  // Using constraint API
    isValid = form.checkValidity();
  
  // style main message for an error

if (isValid === true ){

   message.textContent = "Message sent";
  message.style.color = "green";
  messageContainer.style.borderColor = "green";

} else {
  message.textContent = "Please fill the values";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";  
}
  }


  function storeFormDate(){

    const user = {
      name: form.fullname.value,
      email: form.email.value,
      message: form.message.value
    };
      console.log(user)
  }

function processFormData(e){

  e.preventDefault();

  // validate form
  validateForm();

if (isValid === true ){

  storeFormDate();
}

sendMail();

form.reset();
}




// event listener
form.addEventListener("submit", processFormData);








  AOS.init();

  AOS.init({


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

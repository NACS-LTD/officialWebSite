// This is just a  of a JavaScript script. You can add more functionality to your website as needed.

const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data.
  const name = contactForm.querySelector('[name="name"]').value;
  const email = contactForm.querySelector('[name="email"]').value;
  const phone = contactForm.querySelector('[name="phone"]').value;
  const message = contactForm.querySelector('[name="message"]').value;

  // Send the form data to the server.
  // You can use a variety of methods to do this, such as Axios, Fetch, or jQuery.

  // Once the form data has been sent, clear the form.
  contactForm.reset();

  // Display a success message.
  alert('Your message has been sent!');
});




// image slide

let i = 0; // current slide
let j = 5; // total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
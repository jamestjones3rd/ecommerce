//Slideshow for homepage
let slideshows = document.querySelectorAll('[data-component="slideshow"]');

// JavaScript code using jQuery library
$(document).ready(function(){
    // Set variables
    var slides = $('.slider img');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,3000);
  
    // Define function to advance to the next slide
    function nextSlide() {
      $(slides[currentSlide]).fadeOut(2000);
      currentSlide = (currentSlide+1)%slides.length;
      $(slides[currentSlide]).fadeIn(2000);
    }
  });


// Ajax request to fetch to request the data from JSON file


//creating an xmlhttp-request object
let http = new XMLHttpRequest();

//http holds now all methods and properties of the object

// next prepare the request with the open() method
http.open('get', 'products.json', true);
//first argument sets the http method
//second argument we pass the file where our data lives

//and last the keyword true, sets the request to be async


//next send the request
http.send();

//catch the response 
//check the onload eventlistener
http.onload = function() {
//check the readystate and status properties
if(this.readyState == 4 && this.status == 200){
    //if we have a succesful response then I have to parse the json data
    //and convert them to a javascript array
    let products = JSON.parse(this.responseText);
    
    //need an empty variable to add the incoming data
    let output = '';

    //loop through products and in every iteration
    //add an html template to the output variable
    for(let items of products){
        output += `
        <div class='product'>
            <img src='${item.image}' alt='${item.image}'></img>
            <p class="title">${item.image}</p>
            <p class="description">${item.image}</p>
            <p class="price">
                <span>${item.image}</span>
                <span>&euro;</span>
            </p>
        </div>
        `;
    }
    //target the products container and add the data that the output variable holds
    document.querySelector(".products").innerHTML = output;
    }
}
fetch('myData.json')
  .then(response => response.json())
  .then(data => {
    // Your code to work with the JSON data goes here
    console.log(data);
  });

  const data = [
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    },
    {
      "image": "image1",
      "title": "title 1",
      "description": "lorem",
      "price": "14.44"
    }
  ];
  
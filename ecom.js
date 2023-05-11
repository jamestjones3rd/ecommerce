'use strict'

var i = 0;

var img = [];

var time = 5000; 


//image list

img[0] = '/img/game.jpeg'

img[1] = '/img/homeimage.jpeg'

img[2] = '/img/OG GAMES.png'

//change image

function slideShow(){

document.slide.src = img[i];

if(i < img.length - 1){
 i++;
}else{
    i = 0;
}

//This method calls a function after a number of milisecconds ex. 1sec = 1000 miliseconds

setTimeout("slideShow()",time)
}


//This will load the slideshow imedditely when the page loads
window.onload = slideShow;
















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
    for(let item of products){
        output += `
        <div class='product'>
            <img src='${item.image}' alt='${item.image}'></img>
            <p class="title">${item.title}</p>
            <p class="description">${item.description}</p>
            <p class="price">
                <span>${item.price}</span>
                <span>&euro;</span>
            </p>
        </div>
        `;
    }
    //target the products container and add the data that the output variable holds
    document.querySelector(".products").innerHTML = output;
    }
}


// fetch('myData.json')
//   .then(response => response.json())
//   .then(data => {
//     // Your code to work with the JSON data goes here
//     console.log(data);
//   });

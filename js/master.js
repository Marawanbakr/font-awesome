
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Image
let imgsArray = ["01.jpg", "02.jpg" , "03.jpg" , "04.jpg" , "05.jpg"];

setInterval(() => {

    //Get Random Number
    let randomNumber = Math.floor(Math.random()*imgsArray.length)

    // Change Background Image Url 
     landingPage.style.backgroundImage = 'url("imags/' +imgsArray [randomNumber] +'")'



},100000)

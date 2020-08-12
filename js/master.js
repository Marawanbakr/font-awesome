// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Image
let imgsArray = ["01.png", "02.jpeg", "03.jpeg", "04.jpg", "05.jpg"];

setInterval(() => {
  //Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change Background Image Url
  landingPage.style.backgroundImage =
    'url("imags/' + imgsArray[randomNumber] + '")';
  console.log(landingPage.style.backgroundImage);
}, 5000);

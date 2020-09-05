
  // Check If There,s Local Storge Color Option
let mainColors = localStorage.getItem("color_option")

if (mainColors !==null) {


document.documentElement.style.setProperty('--main--color' ,mainColors);


  //  Remove Active Class From All Colors List Items
    document.querySelectorAll(".colors-list li ").forEach(element => {
        
    element.classList.remove("active")

  //Add Active Class On Element With Data-Color === Local Srtonge Item
    
   if (element.dataset.color === mainColors){

   //Add Active Class 
     element.classList.add("active");
    }
   });

}
  //Random Background Option 
     let backgroundOption = true;

  // Variable To Control The Background Interval
     let backgroundInterval;

  // Toggle Spin Class On Icon
   document.querySelector(".toggle-settings .fa-gear").onclick = function () {
     

  // Toggle Class fa spin for rotation on self  
    this.classList.toggle("fa-spin");
  
  // toggle Class Open main settings Box
    document.querySelector(".settings-box").classList.toggle("open");``

  };

  //Check If There,s local Stronge Random Background Item

      let backgroundLocalItem = localStorage.getItem("background-option");

  //Check If Random Background Local Storge Is Not Empty
   if(backgroundLocalItem !== null ){
       
      if (backgroundLocalItem === 'true'){

         backgroundOption = true;

    } else {

      backgroundOption = false
  }

  // Remove Active Class From All Spans
    document.querySelectorAll(".random-background span").forEach(element => {
    
      element.classList.remove("active");
    });

    if(backgroundLocalItem === 'true') {

     document.querySelector(".random-background .yes").classList.add("active")
  
    }else{

      document.querySelector(".random-background .no").classList.add("active")
    }
}

  // Switch Colors
    const colorsLi = document.querySelectorAll(".colors-list li");

  // Loop On All List Items 
    colorsLi.forEach (li => {
     
  //  Clic On Every List Items 
    li.addEventListener("click" , (e) => {
 
  // Set Color On Root 
      document.documentElement.style.setProperty('--main--color' , e.target.dataset.color)
         
  // Set Color On Local Stronge  
      localStorage.setItem("color_option" , e.target.dataset.color)


  //  Remove Active Class From Childrens
      e.target.parentElement.querySelectorAll(".active").forEach(element => {
        
           element.classList.remove("active")
    });
    
  // Add Active Class On Self
    
    e.target.classList.add("active");

    }); 

});

// Switch Random background Option
   const randomBackEl = document.querySelectorAll(".random-background span");

// Loop On All Spans
   randomBackEl.forEach (span => {
   
//  Clic On Every Span 
    span.addEventListener("click" , (e) => {

//  Remove Active Class From Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      
    element.classList.remove("active")
  });
  
// Add Active Class On Self
  
  e.target.classList.add("active");

  if (e.target.dataset.background === 'yes'){
     
    backgroundOption = true;

    randomizeImags () 

  localStorage.setItem("background-option" , true)
    
  } 
    else {

    backgroundOption = false;

    clearInterval(backgroundInterval);

    localStorage.setItem("background-option" , false)

  }

}); 

});
// Select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// Get Array Of Image
   let imgsArray = ["01.png", "02.jpeg", "03.jpeg", "04.jpg", "05.jpg"];


//Function To Randomize I mage
  function randomizeImags (){

    if (backgroundOption === true)
      ackgroundInterval = setInterval(() => {
      //Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length); 
      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imags/' + imgsArray[randomNumber] + '")';
      (landingPage.style.backgroundImage);
    }, 1000);
    
}

randomizeImags () 



// Select Skills Selector

 let ourSkills = document.querySelector(".skills");

   window.onscroll = function (){ 
   
  //Skills Offset Top

  let skillsOffsetTop = ourSkills.offsetTop
  // this .console.log(skillsOffsetTop)

  //Skills Outer Height 
  let skillsOuterHeight = ourSkills.offsetHight;

  //Window Hight
  let windowHight = this.innerHeight;

  //window ScrollTop
  let windowScrollTop = this.pageYOffset


  if (windowScrollTop > ( skillsOffsetTop + skillsOuterHeight - windowHight )) {
     
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
 
   allSkills.forEach(skill => {

     skill.style.width = skill.dataset.progress;

   });
 
  }

};












// For User Image:-

let profilePic = document.getElementById("profile_pic");
let inputFile = document.getElementById("input_file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

// For Login Form:-
let loginForm = document.getElementById("login_container");

document.querySelector('#profile_pic').onclick = () => {
    loginForm.classList.toggle('from_display');
    buyPlan.classList.remove('buyPlan_display')

}
document.querySelector('#close_sym').onclick = () => {
    loginForm.classList.remove('from_display');
}

// For Ads in Buy Plan Section:-
let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("ad_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// For Buy Plane:-
let buyPlan = document.getElementById('buy_plan');

document.querySelector('#buy_plans').onclick = () => {
    buyPlan.classList.toggle('buyPlan_display')
    loginForm.classList.remove('from_display');

}

// onscroll Login & BUY Plan :-

window.onscroll = () => {
    loginForm.classList.remove('from_display');
    buyPlan.classList.remove('buyPlan_display')
}


// Top btns Option scroll:-

let scrollBtns = document.querySelector('.btns_container');

scrollBtns.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollBtns.scrollLeft += evt.deltaY;
    scrollBtns.style.scrollBehavior = "auto";
})


// Ads2_container:-

let ad1Img = 0;
first_carousel();

function first_carousel() {
    let i;
    let x = document.getElementsByClassName("ad1_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad1Img++;
    if (ad1Img > x.length) { ad1Img = 1 }
    x[ad1Img - 1].style.display = "block";
    setTimeout(first_carousel, 2200);
}

let ad2Img = 0;
second_carousel();

function second_carousel() {
    let i;
    let x = document.getElementsByClassName("ad2_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad2Img++;
    if (ad2Img > x.length) { ad2Img = 1 }
    x[ad2Img - 1].style.display = "block";
    setTimeout(second_carousel, 2000);
}

let ad3Img = 0;
third_carousel();

function third_carousel() {
    let i;
    let x = document.getElementsByClassName("ad3_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad3Img++;
    if (ad3Img > x.length) { ad3Img = 1 }
    x[ad3Img - 1].style.display = "block";
    setTimeout(third_carousel, 2500);
}

let ad4Img = 0;
fourth_carousel();

function fourth_carousel() {
    let i;
    let x = document.getElementsByClassName("ad4_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad4Img++;
    if (ad4Img > x.length) { ad4Img = 1 }
    x[ad4Img - 1].style.display = "block";
    setTimeout(fourth_carousel, 3400);
}

let ad5Img = 0;
fifth_carousel();

function fifth_carousel() {
    let i;
    let x = document.getElementsByClassName("ad5_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad5Img++;
    if (ad5Img > x.length) { ad5Img = 1 }
    x[ad5Img - 1].style.display = "block";
    setTimeout(fifth_carousel, 3000);
}


let ad6Img = 0;
sixth_carousel();

function sixth_carousel() {
    let i;
    let x = document.getElementsByClassName("ad6_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad6Img++;
    if (ad6Img > x.length) { ad6Img = 1 }
    x[ad6Img - 1].style.display = "block";
    setTimeout(sixth_carousel, 3500);
}


// scroll of ads:-
let scrollContainer = document.querySelector(".ads2_container");

        
scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";
})


let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -= 900;
})
let adImg =document.querySelector('.ad1_img');
backBtn.addEventListener("click",()=>{
    adImg.style.marginLeft="1pc";
})

// Scroll fro aLL:-

let ScrollOne = document.querySelector(".trending_container");
  
ScrollOne.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollOne.scrollLeft += evt.deltaY;
    ScrollOne.style.scrollBehavior="auto";
});

let ScrollTwo = document.querySelector(".topShows_container");
  
ScrollTwo.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollTwo.scrollLeft += evt.deltaY;
    ScrollTwo.style.scrollBehavior="auto";
});

let ScrollThree = document.querySelector(".live_container");
  
ScrollThree.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollThree.scrollLeft += evt.deltaY;
    ScrollThree.style.scrollBehavior="auto";
});

let ScrollFour = document.querySelector(".movies_container");
  
ScrollFour.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollFour.scrollLeft += evt.deltaY;
    ScrollFour.style.scrollBehavior="auto";
});

let ScrollFive = document.querySelector(".sports_container");
  
ScrollFive.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollFive.scrollLeft += evt.deltaY;
    ScrollFive.style.scrollBehavior="auto";
});

let ScrollSix = document.querySelector(".sportsV_container");
  
ScrollSix.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollSix.scrollLeft += evt.deltaY;
    ScrollSix.style.scrollBehavior="auto";
});

let ScrollSeven = document.querySelector(".mustMovie_container");
  
ScrollSeven.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollSeven.scrollLeft += evt.deltaY;
    ScrollSeven.style.scrollBehavior="auto";
});

let ScrollEight = document.querySelector(".news_container");
  
ScrollEight.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollEight.scrollLeft += evt.deltaY;
    ScrollEight.style.scrollBehavior="auto";
});

let ScrollNine = document.querySelector(".newsV_container");
  
ScrollNine.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollNine.scrollLeft += evt.deltaY;
    ScrollNine.style.scrollBehavior="auto";
});



// main section ads:-

let ad7Img = 0;
seven_carousel();

function seven_carousel() {
    let i;
    let x = document.getElementsByClassName("ad7_img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ad7Img++;
    if (ad7Img > x.length) { ad7Img = 1 }
    x[ad7Img - 1].style.display = "block";
    setTimeout(seven_carousel, 3200);
}
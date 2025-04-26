const imgContainer = document.querySelector(".showcase > div")
const img = document.querySelector(".showcase img")
const shadow = document.querySelector(".shadow")


const thumb= document.querySelectorAll(".thumbs img")
const titleOverlay = document.querySelector(".titleOverlay")
const title = document.querySelector(".titleText")
const desc = document.querySelector(".description")

const sizes = document.querySelectorAll(".sizes > li")
const stars= document.querySelectorAll(".stars i")
const price = document.querySelector(".price")
const colorBtn = document.querySelectorAll(".color")

const pag = document.querySelectorAll(".pag")
const prev = document.querySelector("#arr-left")
const next = document.querySelector("#arr-right")
const shoeNum = document.querySelector(".shoe-num")
const shoeTotal = document.querySelector(".shoe-total")

// id variables
let id = 1;
let colorType = 1;
let shoe = 1;

const colors = [
    [
        "3ae001b", " #111111"
    ],

[
    "linear-gradient(0deg, orange, red", "#bda08e"
],
[
    "linear-gradient(0deg, #00b8ea 0%, #e6882d 50%, #e56da6 100%)",
    "linear-gradient(0deg, #dae766, #b2afaa)"
],
];

const prices = ["10,000", "15,000", "6,0000"];

const names = [
    [
        "Victoria Secret",
        "Smart Collection"
    ],
    [
        "Bombshell Collection",
        "50ml Collection"
    ],
    [
        "Carribean Scents",
        "Black perfume Collection"
    ],
];

const description = [
    [
       
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid voluptatum eaque atque voluptatibus? Distinctio exercitationem eaque excepturi dolor? Possimus a distinctio eos perferendis. Suscipit tempore ad blanditiis laudantium ab"
    ],
    [
        
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid voluptatum eaque atque voluptatibus? Distinctio exercitationem eaque excepturi dolor? Possimus a distinctio eos perferendis. Suscipit tempore ad blanditiis laudantium ab"
    ],

    [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid voluptatum eaque atque voluptatibus? Distinctio exercitationem eaque excepturi dolor? Possimus a distinctio eos perferendis. Suscipit tempore ad blanditiis laudantium ab?"
    ],
    [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid voluptatum eaque atque voluptatibus? Distinctio exercitationem eaque excepturi dolor? Possimus a distinctio eos perferendis. Suscipit tempore ad blanditiis laudantium ab?"
    ]
];

const ratings = [4,5,3]
function getImage (imgType, id, extension){
    return "img/" + 
    imgType + "1 (13) " + "." + extension;
}
function resetactive(element , elementClass, i){
    for(let i=0; i < element.length; i++){
        element[i].classList.remove(elementClass + " .active");
    }
    element[i].classList.add(elementClass + ".active")
}
function animate(element, time, anim){
    element.style.animation = anim;
    setTimeout(() =>{
        element.style.animatio = "none"

    }, time);
}

function assignColors(i, shoe){
    colorBtn[i].style.background = color[shoe - 1][i];
}

function resetStars(shoe){
    for(let i =0; i < stars.length; i++){
        stars[i].innerText = "star_outline";
    }

    for(let i = 0; i < rating[shoe]; i++){
        stars[i].innerText = "star";
    }
}


for(let i = 0; i < sizes.length; i++){
    sizes[i].addEventListener('click', (e) =>{
        resetactive(sizes, "size", i);

    });
}



























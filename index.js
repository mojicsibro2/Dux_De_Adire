const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "MARBLING",
        price: 900000,
        colors: [
            {
                code: "black",
                Image: "./images/marbling.jpg",
            },
            {
                code: "blueviolet",
                Image: "./images/marbling2.jpg",
            },
        ],
    },
    {
        id:2,
        title: "BATIK",
        price: 139000,
        colors: [
            {
                code: "black",
                Image: "./images/batic.jpg",
            },
            {
                code: "darkblue",
                Image: "./images/batic1.jpg",
            },
        ], 
    },
    {
        id:3,
        title: "ELEKO",
        price: 100000,
        colors: [
            {
                code: "teal",
                Image: "./images/eleko.jpg",
            },
            {
                code: "black",
                Image: "./images/eleko2.jpg",
            },
        ], 
    },
    {
        id:4,
        title: "KNOTTING",
        price: 99900,
        colors: [
            {
                code: "black",
                Image: "./images/knotting.jpg",
            },
            {
                code: "coral",
                Image: "./images/knotting2.jpg",
            },
        ], 
    },
    
    {
        id:5,
        title: "SPIRAL",
        price:11110 ,
        colors: [
            {
                code: "grey",
                Image: "./images/spiral.jpg",
            },
            {
                code: "darkblue",
                Image: "./images/spiral.jpg",
            },
        ], 
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".producting");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=> {


        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].Image;
    });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=> {
    payment.style.display="flex"
})

close.addEventListener("click", ()=> {
    payment.style.display="none"
})

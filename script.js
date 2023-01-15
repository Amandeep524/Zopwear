const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");

const products = [
    {
        id: 1,
        title: "Sparx",
        price: "$119",
        color: [
            {
                code: "Orange",
                img: "./SparxOrange.png"
            },

            {
                code: "Yellow",
                img: "./SparxYellow.png"
            }
        ]


    },
    {
        id: 2,
        title: "Reebok",
        price: "$220",
        color: [
            {
                code: "Blue",
                img: "./ReebokBlue.png"
            },

            {
                code: "Black",
                img: "./ReebokBlack.png"
            }
        ]


    },
    {
        id: 3,
        title: "Campus",
        price: "$120",
        color: [
            {
                code: "Blue",
                img: "./CampusBlue.png"
            },

            {
                code: "Black",
                img: "./CampusBlack.png"
            }
        ]


    },
    {
        id: 4,
        title: "Jordan",
        price: "$329",
        color: [
            {
                code: "Blue",
                img: "./JordanBlue.png"
            },

            {
                code: "Black",
                img: "./JordanBlack.png"
            }
        ]


    },
];

const currentImg = document.querySelector(".productImg");
const currentTitle = document.querySelector(".productTitle");
const currentPrice = document.querySelector(".productPrice");
const currentColors = document.querySelectorAll(".color");
const currentSizes = document.querySelectorAll(".size");

let chosenProduct = products[0];

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // wrapper.style.transform = "translateX(-300vw)";
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = products[index];
        currentTitle.textContent = chosenProduct.title;
        currentPrice.textContent = chosenProduct.price;
        currentImg.src = chosenProduct.color[0].img;

        currentColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.color[index].code;

        })

    });
});

currentColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentImg.src = chosenProduct.color[index].img;

    });

});

currentSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        size.style.backgroundColor = "black";
        size.style.color = "white";

    });

});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});
close.addEventListener("click", () => {
    payment.style.display = "none";
});
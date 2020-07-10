const dogIcon = document.querySelector('.dog-icon');

const imgArray = [
    "/assets/images/P1.svg",
    "/assets/images/P2.svg",
    "/assets/images/P3.svg",
    "/assets/images/P4.svg",
    "/assets/images/P5.svg",
];

let count = 0; 

let timer = setInterval(() => {
    
    if (count >=imgArray.length){
        count = 0;
    }
    dogIcon.src = imgArray[count];
    count++
}, 3000);




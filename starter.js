// Kohen Liverance
// 4/29/26
// JS Image Swap Project


const modelImages = ["cut-out.jpg, background-removal - Copy.png"]


const imgElement = document.getElementById("model-frame");


const preload = new Image();
preload.src = modelImages[1];


imgElement.addEventListener('mouseenter', () => {
    imgElement.src = modelImages[1];
});


imgElement.addEventListener('mouseleave', () => {
    imgElement.src = modelImages[0];
});

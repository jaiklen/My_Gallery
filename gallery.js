
const image = document.getElementById("image")
function upDate(previewPic)
{
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.innerHTML = previewPic.alt;
}

function unDo()
{
    image.style.backgroundImage = "url('')";
    image.innerHTML = "Hover over an image below to display here.";      
}

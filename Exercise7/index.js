function openImage(element)
{
    let image = element.src;
    let newWindow = window.open(image, image.alt, 'image.width, image.height');
    newWindow.resizeTo(screen.availWidth, screen.availHeight);
}

function changeImage()
{
    let figureToChange = document.querySelectorAll("figure > img");
    let randomFigure = figureToChange[Math.floor(Math.random() * figureToChange.length)];
    randomFigure.src = figureToChange[Math.floor(Math.random() * figureToChange.length)].src;
}
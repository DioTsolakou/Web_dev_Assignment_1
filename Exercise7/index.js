function start()
{
    updateDate();
    changeImage();
}

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

function updateDate()
{
    let dateSpecificSentence = document.querySelector("#date_sentence");
    let date = document.querySelector("#date");

    switch (new Date().getDay())
    {
        case 0:
            dateSpecificSentence.innerHTML = "Get your week started with confidence!";
            date.innerHTML = "Monday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
        case 1:
            dateSpecificSentence.innerHTML = "One day less for the weekend!";
            date.innerHTML = "Tuesday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
        case 2:
            dateSpecificSentence.innerHTML = "Reached the middle of the work week. Keep it up!";
            date.innerHTML = "Wednesday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
        case 3:
            dateSpecificSentence = "You might be tired, but hold on!";
            date = "Thursday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
        case 4:
            dateSpecificSentence = "It's finally Fridayy!";
            date = "Friday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
        case 5:
            dateSpecificSentence = "Saturdayy! Enjoy your free time!";
            date = "Saturday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
        case 6:
            dateSpecificSentence = "It's Sunday, the new week is almost looming! You still have some free time though!";
            date = "Sunday, " + getTodayDate();
            console.log(date.innerHTML);
            break;
    }
}

function convertMonth()
{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date().getMonth()];
}

function getTodayDate()
{
    return new Date().getDate() + " " + convertMonth() + " " + new Date().getFullYear();
}
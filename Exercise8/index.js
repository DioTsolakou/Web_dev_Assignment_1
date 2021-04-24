function start()
{
    updateDate();
    changeRandomCSS();
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

function changeRandomCSS()
{
    let tag = document.querySelectorAll("body > * > *");
    let random = Math.floor(Math.random() * tag.length);
    console.log(tag[random]);
    tag[random].style.color = "#f5d142";
}

function updateDate()
{
    let dateSpecificSentence;
    let date;

    switch (new Date().getDay())
    {
        case 0:
            dateSpecificSentence = "It's Sunday, the new week is almost looming! You still have some free time though!";
            date = "Sunday, " + getTodayDate();
            break;
        case 1:
            dateSpecificSentence = "Get your week started with confidence!";
            date = "Monday, " + getTodayDate();
            break;
        case 2:
            dateSpecificSentence = "One day less for the weekend!";
            date = "Tuesday, " + getTodayDate();
            break;
        case 3:
            dateSpecificSentence = "Reached the middle of the work week. Keep it up!";
            date = "Wednesday, " + getTodayDate();
            break;
        case 4:
            dateSpecificSentence = "You might be tired, but hold on!";
            date = "Thursday, " + getTodayDate();
            break;
        case 5:
            dateSpecificSentence = "It's finally Fridayy!";
            date = "Friday, " + getTodayDate();
            break;
        case 6:
            dateSpecificSentence = "Saturdayy! Enjoy your free time!";
            date = "Saturday, " + getTodayDate();
            break;
        default:
            console.log(new Date().getDay());
            break;
    }

    document.querySelector("#date").innerHTML = date;
    document.querySelector("#date_sentence").innerHTML = dateSpecificSentence;
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

function dataValidation()
{
    ageCheck();
    passwordMatching();
}

function passwordMatching()
{
    let pw = document.getElementById("pw");
    let conf_pw = document.getElementById("conf_pw");

    if (pw === conf_pw)
    {
        pw.setCustomValidity("")
    }
    else pw.setCustomValidity("Password and Confirm Password need to match!")
}

function ageCheck()
{
    let dob = document.getElementById("dob");

    let date_now = new Date();
    let birthdate = dob.split('/');
    let born = new Date(birthdate[2], birthdate[0] - 1, birthdate[1]);

    let age_today = getAge(born, date_now);
    if (age_today < 16)
    {
        dob.setCustomValidity("You need to be at least 16 to sign up!");
    }
}

function getAge(date_born, date_now)
{
    let birthday = new Date(date_now.getFullYear(), date_born.getMonth(), date_born.getDate());
    if (date_now >= birthday)
    {
        return date_now.getFullYear() - date_born.getFullYear();
    }
    else
    {
        return date_now.getFullYear() - date_born.getFullYear() - 1;
    }
}
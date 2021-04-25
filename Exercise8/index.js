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

function dataValidation(form)
{
    let age = ageCheck();
    let pwM = passwordMatching();
    let pwC = checkPassword();

    return !(!age || !pwM || !pwC);
}

function passwordMatching()
{
    let pw = document.getElementById("pw");
    let conf_pw = document.getElementById("conf_pw");

    if (pw.value !== conf_pw.value)
    {
        conf_pw.setCustomValidity("Password and Confirm Password need to match!")
        conf_pw.reportValidity();
        conf_pw.preventDefault();
        return false;
    }
    else
    {
        conf_pw.setCustomValidity("");
        return true;
    }
}

function ageCheck()
{
    let dob = document.getElementById("dob");

    let date_now = new Date();
    let born = new Date(dob.value);

    let age_today = getAge(born, date_now);
    if (age_today < 16)
    {
        dob.setCustomValidity("You need to be at least 16 to sign up!");
        dob.reportValidity();
        dob.preventDefault();
        return false;
    }
    else
    {
        dob.setCustomValidity("");
        return true;
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

function checkPassword()
{
    let pw = document.getElementById("pw");

    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!pw.value.match(regExp))
    {
        pw.setCustomValidity("Password must have at least 8 characters, up to 25 characters, one lowercase" +
            " and one uppercase letter, one digit and one special character!");
        pw.reportValidity();
        return false;
    }
    else
    {
        pw.setCustomValidity("");
        return true;
    }
}
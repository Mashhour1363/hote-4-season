function setRandomImage(){
    const mainHeader = document.getElementById("main-header");

    // Define the folder path where your images are stored
    const imagePath = 'images/';

    const seasons = {
        'spring': 'spring/',
        'summer': 'summer/',
        'autumn': 'autumn/',
        'winter': 'winter/',
    };

    // Array to store the file names of images in the folder
    const imageFiles = [
        '01.jpg',
        '02.jpg',
        '03.jpg',
        '04.jpg',
        '05.jpg',
        '06.jpg',
        '07.jpg',
        '08.jpg',
        '09.jpg',
        '10.jpg',
        // Add more image file names as needed
    ];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * imageFiles.length);

    // Create the image source by combining the folder path and the randomly selected file name
    // get theme name from body
    const randomImagePath = imagePath + seasons[document.body.className] + imageFiles[randomIndex];

    // Set the source attribute of the current image element
    mainHeader.style.backgroundImage = `url('${randomImagePath}')`;
    mainHeader.style.backgroundSize = "cover";
};

document.addEventListener("DOMContentLoaded", setRandomImage);

setInterval(setRandomImage, 5000);

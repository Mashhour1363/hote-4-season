const startBookingButton = document.getElementById("start-booking");
const submitBookingButton = document.getElementById("submit-booking");
const body = document.body;

startBookingButton.addEventListener("click", () => {
    body.classList.toggle("book-form");
    console.log('something happened!');
});

submitBookingButton.addEventListener("click", () => {
    body.classList.toggle("book-form");
    console.log('something happened!');
});

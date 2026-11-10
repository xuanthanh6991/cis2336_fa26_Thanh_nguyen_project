
const rooms = {
    "Ballroom": true,
    "Theater": true,
    "Meeting Room A": true,
    "Meeting Room B": false,
    "Group Study Room": false
};

const form = document.getElementById("booking-form");
const room = document.getElementById("room");
const date = document.getElementById("date");
const start = document.getElementById("start");
const end = document.getElementById("end");
const roomStatus = document.getElementById("room-status");
const message = document.getElementById("message");

function isRoomAvailable(roomName) {
    return rooms[roomName] === true;
}

room.addEventListener("change", function () {
    if (room.value === "") {
        roomStatus.textContent = "";
    } else if (isRoomAvailable(room.value)) {
        roomStatus.textContent = room.value + " is available.";
        roomStatus.className = "success";
    } else {
        roomStatus.textContent = room.value + " is not available. Please choose another room.";
        roomStatus.className = "error";
    }
});


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const today = new Date().toLocaleDateString("en-CA");
    message.className = "error";

    if (date.value < today) {
        message.textContent = "Please choose today or a future date.";
    } else if (end.value <= start.value) {
        message.textContent = "The end time must be after the start time.";
    } else if (!isRoomAvailable(room.value)) {
        message.textContent = "Sorry, " + room.value + " is not available. Please choose another room.";
    } else {
        message.textContent = "Thank you! Your request for " + room.value + " on " + date.value + " was submitted.";
        message.className = "success";
        form.reset();
        roomStatus.textContent = "";
    }
});

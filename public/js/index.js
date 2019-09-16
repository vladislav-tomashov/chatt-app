const socket = io();

// Elements
const $roomsSelect = document.querySelector("#selectedroom");
const $roomInput = document.querySelector("#room");

// Templates
const roomsSelectTemplate = document.querySelector("#room-list-template")
  .innerHTML;

$roomsSelect.addEventListener("change", e => {
  if ($roomsSelect.value) {
    $roomInput.setAttribute("disabled", "disabled");
  } else {
    $roomInput.removeAttribute("disabled");
  }
});

socket.on("roomList", rooms => {
  const html = Mustache.render(roomsSelectTemplate, {
    rooms
  });
  $roomsSelect.innerHTML = html;
});

socket.emit("getRoomList");

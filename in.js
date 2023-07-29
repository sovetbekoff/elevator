function moveElevator(direction) {
  const elevator = document.getElementById("elevator");
  const currentFloor = parseInt(elevator.style.bottom) || 0;
  const targetFloor =
    direction === "up" ? currentFloor - 100 : currentFloor + 100;

  if (targetFloor >= -200 && targetFloor <= 400) {
    elevator.style.bottom = targetFloor + "px";
  }
}

function moveToFloor() {
  const targetFloor = document.getElementById("floorInput").value;
  const elevator = document.getElementById("elevator");
  const currentFloor = parseInt(elevator.style.bottom) || 0;
  const targetPosition = (targetFloor + 1) * 10;

  if (targetFloor >= 1 && targetFloor <= 10) {
    elevator.style.bottom = targetPosition + "px";
  }
}
console.log("Hello Kasi");

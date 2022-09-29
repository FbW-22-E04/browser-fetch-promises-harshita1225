// The following line makes sure your styles are included in the project. Don't remove this.
import { Modal } from "bootstrap";
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");

const promiseOfModal = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 6000);
});

promiseOfModal.then(() => {
  modal.style.display = "block";
});

//close modal

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

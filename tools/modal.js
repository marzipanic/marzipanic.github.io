// -----------------------------------------------------------------
// Define Modal Toggles
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modalWindowOverlay = document.getElementById("modal-overlay");

// -----------------------------------------------------------------
// FUNCTIONS to handle Show/Hide of Modal
const showModalWindow = () => {
    modalWindowOverlay.style.display = 'flex';
}

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

const hideModalWindowOnBlur = (e) => {
    if(e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget)
        hideModalWindow();
    }
}

// -----------------------------------------------------------------
// Handle clicks to show/hide Modal
openModalButton.addEventListener("click", showModalWindow);
closeModalButton.addEventListener("click", hideModalWindow);
modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur);
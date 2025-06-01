(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-s]"),
      closeModalBtns: document.querySelectorAll("[data-modal-close-s]"),
      modal: document.querySelector("[data-modal-s]"),
    };
  
    document.querySelectorAll(".modal").forEach((el) => el.addEventListener("click", (e) => e.stopPropagation()));
    refs.openModalBtns.forEach((b) => b.addEventListener("click", toggleModal));
    refs.closeModalBtns.forEach((b) => b.addEventListener("click", toggleModal));
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();

  (() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-m]"),
      closeModalBtns: document.querySelectorAll("[data-modal-close-m]"),
      modal: document.querySelector("[data-modal-m]"),
    };
  
    document.querySelectorAll(".modal").forEach((el) => el.addEventListener("click", (e) => e.stopPropagation()));
    refs.openModalBtns.forEach((b) => b.addEventListener("click", toggleModal));
    refs.closeModalBtns.forEach((b) => b.addEventListener("click", toggleModal));
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();

  (() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-l]"),
      closeModalBtns: document.querySelectorAll("[data-modal-close-l]"),
      modal: document.querySelector("[data-modal-l]"),
    };
  
    document.querySelectorAll(".modal").forEach((el) => el.addEventListener("click", (e) => e.stopPropagation()));
    refs.openModalBtns.forEach((b) => b.addEventListener("click", toggleModal));
    refs.closeModalBtns.forEach((b) => b.addEventListener("click", toggleModal));
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();
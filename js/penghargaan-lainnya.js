const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");

const modalTitle = document.getElementById("modalTitle");
const modalText  = document.getElementById("modalText");
const modalDate  = document.getElementById("modalDate");
const modalLink  = document.getElementById("modalLink");

const data = {
  4: {
    title: "Introduction To Financial Literacy",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar literasi keuangan dan penerapannya dalam pengelolaan uang secara bijak.",
    date: "Diberikan pada 11 Januari 2026",
    link: "https://www.dicoding.com/certificates/1RXYQ971QZVM"
  },
  5: {
    title: "Membangun tampilan Website Yang Interaktif",
    text: "Sertifikat ini saya dapatkan di event kompetisi membangun website yang responsive dan interaktif antara user/pengguna dengan website.",
    date: "Diberikan pada 27 Nivember 2025",
    link: "#"
  },
};

function openModal(id) {
  modalTitle.textContent = data[id].title;
  modalText.textContent  = data[id].text;
  modalDate.textContent  = data[id].date;
  modalLink.href         = data[id].link;

  modal.style.display = "flex";
  modalContent.classList.add("show");
}

function closeModal() {
  modalContent.classList.remove("show");
  modalContent.classList.add("hide");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("hide");
  }, 300);
}

/* klik luar modal */
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

/* ESC */
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});
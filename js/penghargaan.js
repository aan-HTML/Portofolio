const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");

const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalDate = document.getElementById("modalDate");
const modalLink = document.getElementById("modalLink");

const authenticityNote = document.createElement("div");
authenticityNote.className = "authenticity-note";
authenticityNote.innerHTML = '<i class="fas fa-shield-alt"></i> Klik link di atas untuk verifikasi keaslian sertifikat';

const modalFooter = document.createElement("div");
modalFooter.className = "modal-footer";
modalFooter.appendChild(modalLink);
modalFooter.appendChild(authenticityNote);

const modalDateElement = document.getElementById("modalDate");
if (modalDateElement) {
    modalDateElement.parentNode.insertBefore(modalFooter, modalDateElement.nextSibling);
}

const data = {
  1: {
    title: "Belajar Dasar Pemrograman Web",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar pemrograman web dan penerapannya dalam membuat halaman web sederhana.",
    date: "Diberikan pada 11 Januari 2026",
    link: "https://www.dicoding.com/certificates/72ZDKLYNVPYW"
  },
  2: {
    title: "Belajar Dasar Artificial Intelligence",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar AI dan penerapannya.",
    date: "Diberikan pada 11 Januari 2026",
    link: "https://www.dicoding.com/certificates/JLX156RL5Z72"
  },
  3: {
    title: "Sertifikat Penghargaan Dicoding",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar JavaScript dan penerapannya dalam membuat kode interaktif sederhana",
    date: "Diberikan pada 17 Januari 2026",
    link: "https://www.dicoding.com/certificates/L4PQ20QDOZO1"
  }
};

function openModal(id) {
  const award = data[id];
  
  modalTitle.textContent = award.title;
  modalText.textContent = award.text;
  modalDate.textContent = award.date;
  modalLink.href = award.link;
  
  //teks tombol
  modalLink.textContent = "Cek Keaslian Sertifikat";
  
  modal.style.display = "flex";
  setTimeout(() => {
    modalContent.classList.add("show");
  }, 10);
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
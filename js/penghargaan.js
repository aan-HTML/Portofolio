const awardData = {
  1: {
    title: "Dasar Pemrograman Web",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar pemrograman web dan penerapannya dalam membuat halaman web sederhana.",
    date: "Diberikan pada 11 Januari 2026",
    link: "https://www.dicoding.com/certificates/72ZDKLYNVPYW",
    image: "images/dasar-pemrograman-web.png"
  },
  2: {
    title: "Dasar Artificial Intelligence",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar AI dan penerapannya.",
    date: "Diberikan pada 11 Januari 2026",
    link: "https://www.dicoding.com/certificates/JLX156RL5Z72",
    image: "images/dicoding2.jpeg"
  },
  3: {
    title: "Pemrograman Dengan JavaScript",
    text: "Sertifikat ini membuktikan pemahaman saya terhadap konsep dasar JavaScript dan penerapannya dalam membuat kode interaktif sederhana.",
    date: "Diberikan pada 17 Januari 2026",
    link: "https://www.dicoding.com/certificates/L4PQ20QDOZO1",
    image: "images/belajar-javascript.png"
  }
};

const modal = document.getElementById("modal");
const modalContent = modal ? modal.querySelector(".modal-content") : null;
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalDate = document.getElementById("modalDate");
const modalLink = document.getElementById("modalLink");
const awardsContainer = document.getElementById("awardsContainer");

function openModal(id) {
  const award = awardData[id];
  if (!award || !modal || !modalContent) return;

  modalTitle.textContent = award.title;
  modalText.textContent = award.text;
  modalDate.innerHTML = `<i class="far fa-calendar-alt"></i> ${award.date}`;
  modalLink.href = award.link;

  modal.style.display = "flex";
  setTimeout(() => {
    modalContent.classList.add("show");
  }, 10);
}

function closeModal() {
  if (!modal || !modalContent) return;

  modalContent.classList.remove("show");
  modalContent.classList.add("hide");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("hide");
  }, 300);
}

function generateAwardCards() {
  if (!awardsContainer) return;

  awardsContainer.innerHTML = "";

  for (let i = 1; i <= Object.keys(awardData).length; i++) {
    const award = awardData[i];

    const card = document.createElement("div");
    card.className = "award-card ftco-animate";
    card.setAttribute("onclick", `openModal(${i})`);

    card.innerHTML = `
      <div class="award-image">
        <img src="${award.image}" alt="${award.title}" loading="lazy">
        <div class="image-overlay"></div>
        <div class="award-badge">${i}</div>
      </div>
      <div class="award-content">
        <h3 class="award-title">${award.title}</h3>
        <div class="award-date">
          <i class="far fa-calendar-alt"></i> ${award.date}
        </div>
        <p class="award-excerpt">${award.text.substring(0, 100)}...</p>
        <div class="view-btn">
          <i class="fas fa-search"></i> Verifikasi Keaslian
        </div>
      </div>
    `;

    awardsContainer.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateAwardCards();

  if (!modal) return;

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});

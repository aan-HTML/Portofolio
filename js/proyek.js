const projectData = {
  1: {
    title: "Website E-Commerce",
    category: "Website E-Commerce",
    description: "Platform e-commerce yang lengkap dengan list produk dan katalog serta perhitungan otomatis biaya belanja.",
    technologies: ["React", "TypeScript", "TailwindCSS", "PHP", "MySQL"],
    demoLink: "demo.html",
    githubLink: "https://github.com/aan-HTML/E-commers_web.git",
    image: "images/web-belanja-online.png"
  },
  2: {
    title: "Website Sekolah",
    category: "Website",
    description: "Website sekolah sebagai sarana komunikasi dan manajemen informasi akademik seputar sekolah.",
    technologies: ["HTML", "JavaScript", "CSS", "Google Maps API"],
    demoLink: "demo.html",
    githubLink: "https://github.com/aan-HTML/Landing-Page-SMA-IT-Nusantara.git",
    image: "images/project-2.png"
  },
  3: {
    title: "Absensi Kelas Secara Online",
    category: "Aplikasi Web",
    description: "Platform web untuk mencatat dan mengelola kehadiran siswa secara online dengan antarmuka yang mudah digunakan.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    demoLink: "demo.html",
    githubLink: "https://github.com/aan-HTML/Absensi-Kelas.git",
    image: "images/absensi-kelas.png"
  },
  4: {
    title: "Permainan Ular Tangga",
    category: "Game Web",
    description: "Permainan Ular Tangga berbasis web yang menggunakan JavaScript sebagai otak dari permainan.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://permainanulartangga.vercel.app/",
    githubLink: "https://github.com/aan-HTML/Bookshelf.git",
    image: "images/project-3.jpg"
  }
};

const categoryIcons = {
  "Website E-Commerce": "fas fa-shopping-cart",
  "Website": "fas fa-globe",
  "Aplikasi Web": "fas fa-window-maximize",
  "Game Web": "fas fa-gamepad"
};

function ensureProjectModal() {
  if (document.getElementById("projectModal")) return;

  const modalHTML = `
    <div class="project-modal" id="projectModal">
      <div class="project-modal-content">
        <div class="project-modal-header">
          <button class="project-close-btn" onclick="closeProjectModal()">&times;</button>
          <h2 class="project-modal-title" id="projectModalTitle">Judul Proyek</h2>
          <div class="project-modal-category" id="projectModalCategory">
            <i class="fas fa-code"></i> Kategori Proyek
          </div>
        </div>
        <div class="project-modal-body">
          <div class="project-modal-text-container">
            <p class="project-modal-description" id="projectModalDescription">
              Deskripsi proyek akan ditampilkan di sini.
            </p>
            <div class="project-modal-tech" id="projectModalTech"></div>
          </div>
        </div>
        <div class="project-modal-footer">
          <a class="project-modal-link" id="projectModalDemoLink" href="#" target="_blank">
            <i class="fas fa-external-link-alt"></i> Lihat Demo
          </a>
          <a class="project-modal-link github" id="projectModalGithubLink" href="#" target="_blank">
            <i class="fab fa-github"></i> Kode Sumber
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function openProjectModal(id) {
  const project = projectData[id];
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalContent = modal.querySelector(".project-modal-content");
  const modalTitle = document.getElementById("projectModalTitle");
  const modalCategory = document.getElementById("projectModalCategory");
  const modalDescription = document.getElementById("projectModalDescription");
  const modalTech = document.getElementById("projectModalTech");
  const modalDemoLink = document.getElementById("projectModalDemoLink");
  const modalGithubLink = document.getElementById("projectModalGithubLink");

  const iconClass = categoryIcons[project.category] || "fas fa-code";

  modalTitle.textContent = project.title;
  modalCategory.innerHTML = `<i class="${iconClass}"></i> ${project.category}`;
  modalDescription.textContent = project.description;
  modalDemoLink.href = project.demoLink;
  modalGithubLink.href = project.githubLink;

  modalTech.innerHTML = "";
  project.technologies.forEach(tech => {
    const tag = document.createElement("span");
    tag.className = "project-modal-tech-tag";
    tag.textContent = tech;
    modalTech.appendChild(tag);
  });

  if (project.demoLink === "#") {
    modalDemoLink.innerHTML = '<i class="fas fa-eye-slash"></i> Demo Tidak Tersedia';
    modalDemoLink.style.opacity = "0.7";
    modalDemoLink.style.cursor = "not-allowed";
    modalDemoLink.onclick = event => event.preventDefault();
  } else {
    modalDemoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Lihat Demo';
    modalDemoLink.style.opacity = "1";
    modalDemoLink.style.cursor = "pointer";
    modalDemoLink.onclick = null;
  }

  modal.style.display = "flex";
  setTimeout(() => {
    modalContent.classList.add("show");
  }, 10);
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const modalContent = modal.querySelector(".project-modal-content");
  modalContent.classList.remove("show");
  modalContent.classList.add("hide");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("hide");
  }, 400);
}

function generateProjectCards() {
  const projectsContainer = document.getElementById("projectsContainer") || document.querySelector(".projects-grid");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  for (let i = 1; i <= Object.keys(projectData).length; i++) {
    const project = projectData[i];
    const iconClass = categoryIcons[project.category] || "fas fa-code";

    const card = document.createElement("div");
    card.className = "project-card ftco-animate";

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="image-overlay"></div>
        <div class="project-badge">
          <i class="${iconClass}"></i> ${project.category}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-category">
          <i class="${iconClass}"></i> ${project.category}
        </div>
        <p class="project-description">${project.description.substring(0, 120)}...</p>

        <div class="project-tech">
          ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
          ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ""}
        </div>

        <div class="project-links">
          <a href="${project.demoLink}" class="project-link demo" target="_blank" ${project.demoLink === "#" ? 'onclick="event.preventDefault();"' : ""}>
            <i class="fas fa-external-link-alt"></i> Demo
          </a>
          <a href="${project.githubLink}" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProjectModal(i));

    const links = card.querySelectorAll(".project-link");
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.stopPropagation();
      });
    });

    projectsContainer.appendChild(card);
  }

  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ensureProjectModal();
  generateProjectCards();

  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeProjectModal();
    }
  });
});

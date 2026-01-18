const projectData = {
  1: {
    title: "Website E-Commerce",
    description: "Platform e-commerce yang lengkap dengan list produk dan katalog serta perhitungan otomatis biaya belanja.",
    fullDescription: "Platform e-commerce lengkap dengan sistem manajemen produk, keranjang belanja, checkout, dan dashboard admin. Fitur termasuk filter produk, pencarian, ulasan pelanggan, dan integrasi pembayaran.",
    features: [
      "Sistem keranjang belanja real-time",
      "Filter dan pencarian produk",
      "Sistem checkout multi-step",
      "Dashboard admin untuk manajemen",
      "Ulasan dan rating produk",
      "Integrasi gateway pembayaran"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "PHP", "MySQL"],
    demoLink: "demo.html",
    githubLink: "https://github.com/aan-HTML/E-commers_web.git",
    image: "images/web-belanja-online.png"
  },
  2: {
    title: "Website Sekolah",
    description: "Website sekolah sebagai sarana komunikasi dan menegement informasi akademik seputar sekolah.",
    fullDescription: "Platform website sekolah yang menyediakan sistem informasi terpadu untuk seluruh stakeholder sekolah. Website ini berfungsi sebagai hub komunikasi antara pihak sekolah, siswa, orang tua, dan masyarakat umum, dengan fitur-fitur administrasi dan akademik yang lengkap.",
    features: [
      "Berita dan Pengumuman yang ter-update",
      "Profil sekolah yang lengkap",
      "Galeri dan foto kegiatan",
      "Alamat Sekolah",
      "User Frendly"
    ],
    technologies: ["HTML", "JavaScript", "Google Map API", "CSS"],
    demoLink: "demo.html",
    githubLink: "https://github.com/aan-HTML/Landing-Page-SMA-IT-Nusantara.git",
    image: "images/project-2.png"
  },
  3: {
    title: "Absensi Kelas Secara Online",
    description: "Platform web untuk mencatat dan mengelola kehadiran siswa secara online dengan antarmuka yang mudah digunakan.",
    fullDescription: "Sistem absensi kelas berbasis website yang menggantikan metode manual dengan sistem digital terintegrasi. Platform ini memungkinkan guru untuk melakukan presensi dengan cepat, otomatis menghasilkan laporan kehadiran, serta memberikan akses real-time bagi orang tua untuk memantau kehadiran anak mereka. Dibangun dengan teknologi web modern yang responsif dan dapat diakses dari berbagai perangkat.",
    features: [
      "Monitoring kehadiran real-time",
      "Statistik kehadiran",
      "Desain yang minimalis dan mudah dibaca",
      "Bisa export ke excel atau pdf"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
    demoLink: "demo.html",
    githubLink: "https://github.com/aan-HTML/Absensi-Kelas.git",
    image: "images/absensi-kelas.png"
  },
  4: {
    title: "Permainan Ular Tangga",
    description: "Aplikasi web untuk mengelola koleksi buku pribadi secara digital dengan fitur katalogisasi lengkap.",
    fullDescription: "Bookshelf App adalah platform web yang memungkinkan pengguna untuk mencatat, mengorganisir, dan melacak koleksi buku pribadi mereka. Aplikasi ini menggantikan rak buku fisik dengan versi digital yang bisa diakses dari mana saja, dilengkapi dengan sistem katalog, pencarian cerdas, dan status pembacaan yang interaktif.",
    features: [
      "User frendly",
      "3 Mode Permainan",
      "Bisa Dimainkan Semua Kalangan"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://permainanulartangga.vercel.app/",
    githubLink: "https://github.com/aan-HTML/Bookshelf.git",
    image: "images/project-3.jpg"
  }
};

// Generate kartu proyek saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  const projectsGrid = document.querySelector('.projects-grid');
  
  if (projectsGrid) {
    // Hapus konten lama jika ada
    projectsGrid.innerHTML = '';
    
    // Generate kartu untuk setiap proyek
    Object.keys(projectData).forEach(id => {
      const project = projectData[id];
      
      const card = document.createElement('div');
      card.className = 'project-card';
      
      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          
          <div class="project-tech">
            ${project.technologies.slice(0, 2).map(tech => 
              `<span class="tech-tag">${tech}</span>`
            ).join('')}
            ${project.technologies.length > 2 ? 
              `<span class="tech-tag more">+${project.technologies.length - 2}</span>` : ''
            }
          </div>
          
          <div class="project-actions">
            <button class="project-btn demo" onclick="openProjectModal(${id})">
              <i class="fas fa-eye"></i> Demo
            </button>
            <button class="project-btn github" onclick="window.open('${project.githubLink}', '_blank')">
              <i class="fab fa-github"></i> GitHub
            </button>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(card);
    });
  }
  
  // Tambahkan modal ke body jika belum ada
  if (!document.getElementById('projectModal')) {
    const modalHTML = `
      <div class="project-modal" id="projectModal">
        <div class="project-modal-content">
          <div class="project-modal-header">
            <button class="project-close-btn" onclick="closeProjectModal()">&times;</button>
            <h2 class="project-modal-title" id="projectModalTitle"></h2>
            <div class="project-modal-category" id="projectModalCategory"></div>
          </div>
          <div class="project-modal-body">
            <p class="project-modal-description" id="projectModalDescription"></p>
            
            <div class="project-modal-features">
              <h4><i class="fas fa-star"></i> Fitur Utama</h4>
              <ul id="projectModalFeatures"></ul>
            </div>
            
            <div class="project-modal-tech">
              <h4><i class="fas fa-code"></i> Teknologi</h4>
              <div id="projectModalTech"></div>
            </div>
          </div>
          <div class="project-modal-footer">
            <button class="project-btn demo" id="projectModalDemoBtn">
              <i class="fas fa-external-link-alt"></i> Lihat Demo
            </button>
            <button class="project-btn github" id="projectModalGithubBtn">
              <i class="fab fa-github"></i> Kode Sumber
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
});

// Fungsi modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.project-modal-content');
  
  // Isi data modal
  document.getElementById('projectModalTitle').textContent = project.title;
  document.getElementById('projectModalDescription').textContent = project.fullDescription;
  
  // Isi fitur
  const featuresList = document.getElementById('projectModalFeatures');
  featuresList.innerHTML = '';
  project.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  // Isi teknologi
  const techContainer = document.getElementById('projectModalTech');
  techContainer.innerHTML = '';
  project.technologies.forEach(tech => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.textContent = tech;
    techContainer.appendChild(tag);
  });
  
  // Set tombol aksi
  const demoBtn = document.getElementById('projectModalDemoBtn');
  const githubBtn = document.getElementById('projectModalGithubBtn');
  
  demoBtn.onclick = function() {
    if (project.demoLink !== '#') {
      window.open(project.demoLink, '_blank');
    }
  };
  
  githubBtn.onclick = function() {
    window.open(project.githubLink, '_blank');
  };
  
  // Update style tombol demo jika tidak tersedia
  if (project.demoLink === '#') {
    demoBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Demo Tidak Tersedia';
    demoBtn.classList.add('disabled');
    demoBtn.onclick = null;
  } else {
    demoBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> Lihat Demo';
    demoBtn.classList.remove('disabled');
  }
  
  // Tampilkan modal
  modal.style.display = 'flex';
  setTimeout(() => {
    modalContent.classList.add('show');
  }, 10);
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.project-modal-content');
  
  modalContent.classList.remove('show');
  modalContent.classList.add('hide');
  
  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('hide');
  }, 300);
}

// Close modal dengan klik di luar
document.addEventListener('click', function(e) {
  const modal = document.getElementById('projectModal');
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

// Close modal dengan ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});
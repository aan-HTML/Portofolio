// Array data penghargaan
const penghargaanData = [
  { judul: "Penghargaan 4", img: "images/belajar-javascript.png", deskripsi: "Aku mendapatkan penghargaan dari Dicoding karena berhasil menyelesaikan kelas Belajar JavaScript. Ini nunjukin kalau aku udah paham dasar-dasar JavaScript dan bisa bikin kode sederhana sendiri.", url: "https://www.dicoding.com/certificates/L4PQ20QDOZO1" },
  { judul: "Penghargaan 5", img: "images/dasar-pemrograman-web.png", deskripsi: "Aku mendapatkan penghargaan dari Dicoding setelah menyelesaikan kelas Belajar Dasar Pemrograman Web. Ini bukti kalau aku paham dasar HTML, CSS, dan JavaScript, serta bisa bikin halaman web sederhana sendiri", url: "https://www.dicoding.com/certificates/72ZDKLYNVPYW" },
  { judul: "Penghargaan 6", img: "img/penghargaan6.jpg", deskripsi: "Keberhasilan mengikuti lomba tingkat nasional", url: "#" }
  // Tambahkan penghargaan lainnya di sini
];

const container = document.getElementById("penghargaan-container");

penghargaanData.forEach(item => {
  const div = document.createElement("div");
  div.className = "penghargaan-item";

  div.innerHTML = `
    <h3 class="judul-penghargaan">${item.judul}</h3>
    <img src="${item.img}" alt="${item.judul}">
    <p class="deskripsi">${item.deskripsi}</p>
    <button onclick="window.open('${item.url}', '_blank')">Cek Keaslian</button>
  `;

  container.appendChild(div);
});

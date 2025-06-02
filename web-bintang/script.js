const stars = 
[
  {
    title: "Katai Merah (Red Dwarf)",
    desc: "Nama 'katai' berarti ukurannya kecil, dan 'merah' karena suhu permukaannya rendah, sehingga cahayanya tampak kemerahan. Katai merah adalah bintang kecil yang dingin dan redup dibandingkan Matahari, tetapi sangat stabil dan berumur panjang. Contohnya: Proxima Centauri.",
    image: "image/1.jpg"
  },
  {
    title: "Katai Kuning (Yellow Dwarf)",
    desc: "Katai Kuning adalah jenis bintang deret utama dengan massa dan ukuran sedang, termasuk dalam tipe spektral G. Contoh paling terkenal dari katai kuning adalah Matahari, yang menopang kehidupan di Bumi. Bintang ini memiliki suhu permukaan sekitar 5.500°C (sekitar 5.800 Kelvin), bersinar dengan warna kuning keputihan, dan menghasilkan energi melalui reaksi fusi hidrogen di intinya. Umurnya tergolong sedang, bisa mencapai hingga 10 miliar tahun, menjadikannya cukup stabil untuk memungkinkan terbentuknya dan bertahannya kehidupan di planet sekitarnya.",
    image: "image/6.jpg"
  },
  {
    title: "Raksasa Merah (Red Giant)",
    desc: "Raksasa Merah adalah fase lanjut dalam kehidupan bintang berukuran sedang, seperti Matahari, ketika ia kehabisan hidrogen sebagai bahan bakar di intinya. Bintang ini kemudian membengkak sangat besar, bahkan bisa cukup besar untuk menelan planet-planet di sekitarnya, termasuk Bumi jika Matahari sudah memasuki fase ini. Meski ukurannya raksasa, suhu permukaannya justru lebih dingin, sekitar 3.000–5.000 Kelvin, sehingga warnanya tampak merah-oranye. Fase ini menandai awal dari akhir hidup bintang sebelum berubah menjadi katai putih atau meledak (untuk bintang bermassa besar).",
    image: "image/3.jpg"
  },
  {
    title: "Raksasa Biru (Blue Giant)",
    desc: "Raksasa biru adalah salah satu jenis bintang yang sangat panas, sangat terang, dan berukuran besar. Warna birunya menunjukkan suhu permukaan yang bisa mencapai 10.000–50.000 Kelvin. Bintang ini termasuk dalam jenis bintang masif dan biasanya bertipe spektrum O atau B.Bintang besar, sangat panas, dan terang, tapi hidupnya pendek. Bisa berakhir sebagai supernova.Karena massanya besar, raksasa biru membakar bahan bakarnya (hidrogen) dengan sangat cepat melalui proses fusi, sehingga masa hidupnya jauh lebih pendek dibanding bintang seperti Matahari. Setelah kehabisan bahan bakar, bintang ini bisa berevolusi menjadi super raksasa biru, lalu meledak sebagai supernova, yang kemudian dapat membentuk bintang neutron atau lubang hitam.",
    image: "image/2.jpg"
  },
  {
    title: "Supergiant",
    desc: "Super giant adalah jenis bintang paling besar dan paling terang di alam semesta. Mereka bisa mencapai ukuran ratusan hingga ribuan kali lebih besar dari Matahari dan bersinar jutaan kali lebih terang. Bintang terbesar dan paling terang seperti Betelgeuse. Biasanya akan meledak menjadi supernova.Super giant terbentuk dari bintang-bintang masif yang sudah melewati fase raksasa biru. Karena ukurannya sangat besar, mereka membakar bahan bakar dengan sangat cepat dan hidup sangat singkat, hanya beberapa juta tahun saja. Ketika kehabisan bahan bakar, super giant akan meledak dalam ledakan supernova, dan bisa berubah menjadi bintang neutron atau lubang hitam.",
    image: "image/4.jpg"
  },
  {
    title: "Katai Putih (White Dwarf)",
    desc: "Katai putih adalah sisa inti dari bintang kecil yang telah mati, sangat padat dan panas, terbentuk setelah bintang kehabisan bahan bakar dan melepaskan lapisan luarnya. Meskipun ukurannya kecil, massanya hampir sebesar Matahari. Katai putih tidak lagi menghasilkan energi, hanya memancarkan sisa panas, dan akan perlahan mendingin selama miliaran tahun hingga akhirnya menjadi katai hitam.",
    image: "image/5.jpg"
  },
  {
    title: "Bintang Neutron",
    desc: "Bintang neutron adalah sisa inti yang sangat padat dari bintang besar yang meledak dalam peristiwa supernova. Diameternya hanya sekitar 10- 20 km, tetapi massanya bisa melebihi Matahari. Bintang ini hampir seluruhnya terdiri dari neutron dan memiliki medan gravitasi serta magnet yang sangat kuat. Banyak bintang neutron yang berputar sangat cepat sambil memancarkan gelombang radio secara teratur dan dikenal sebagai pulsar.",
    image: "image/7.jpg"

  },
  {
    title: "Lubang Hitam (Black Hole)",
    desc: "Lubang hitam adalah sisa dari bintang yang sangat besar yang sudah meledak dan kemudian runtuh karena gravitasinya sendiri. Runtuhannya begitu kuat sampai jadi benda yang super berat dan padat, dan gravitasinya sangat kuat, bahkan cahaya pun tidak bisa keluar darinya. Karena itu, lubang hitam tidak bisa dilihat langsung, tapi bisa diketahui dari cara ia menarik benda-benda di sekitarnya.",
    image: "image/8.jpeg"
  },
  {
    title: "Protostar",
    desc: "Protostar adalah bintang muda yang baru terbentuk dari awan gas dan debu di angkasa (nebula). Protostar ini masih dalam tahap perkembangan dan belum stabil. Ia sedang mengalami proses pertumbuhan dengan menyerap materi dari sekitarnya. Bagian inti protostar mulai memanas dan memancarkan cahaya, namun belum cukup panas untuk menjalankan reaksi fusi nuklir seperti bintang dewasa. Jika proses ini terus berlangsung, protostar akan menjadi bintang yang matang seperti Matahari.",
    image: "image/9.jpg"
  },
  {
    title: "Bintang Ganda",
    desc: " Bintang ganda atau sistem biner adalah dua bintang yang tampak berdekatan jika dilihat dari Bumi, terutama lewat teleskop. Jika keduanya benar-benar saling mengorbit dan terikat gravitasi, disebut bintang ganda sejati atau sistem biner. Jika hanya terlihat berdekatan karena sudut pandang, disebut bintang ganda optik. Sistem biner penting untuk mengukur massa bintang dan memahami evolusi bintang karena keduanya terbentuk bersama, tapi bisa berkembang berbeda.",
    image: "image/14.png"
  },
  {
    title: "Bintang Variabel",
    desc: "Bintang variabel adalah bintang yang kecerlangannya berubah-ubah, bisa secara berkala atau acak. Salah satu jenis penting adalah bintang Cepheid, yang memiliki hubungan antara periode pulsasi dan luminositasnya. Karena hubungan ini, kita bisa menghitung luminositas sejati bintang hanya dari periode cahayanya. Dengan membandingkan luminositas sejati dan kecerlangan tampak, kita dapat menghitung jarak bintang. Oleh karena itu, bintang Cepheid digunakan sebagai “lilin standar” untuk mengukur jarak ke bintang dan galaksi lain di alam semesta.",
    image: "image/13.jpg"
  }
];

let current = 0;

function renderStar() {
  const star = stars[current];
  const container = document.getElementById("bintangCard");
  container.innerHTML = `
    <h2>${star.title}</h2>
    <img src="${star.image}" alt="${star.title}" />
    <p>${star.desc}</p>
  `;
}

function nextStar() {
  current = (current + 1) % stars.length;
  renderStar();
}

function prevStar() {
  current = (current - 1 + stars.length) % stars.length;
  renderStar();
}

const team = [
  {
    name: "Aira Rahmawati",
    role: "Baik hati, rajin menabung, tidak sombong, dan suka volly especially pemain volly yang nomor punggungnya 2, Sugawara Koushi.",
    photo:"image/12.jpg"
  },
  {
    name: "Ghofrina Smarta Ramadhani",
    role: "Pecinta cwok gepeng especially Tsukishima Kei. Suka baca novel especially novel sejarah dan misteri. Pendengar NIKI nomor 1. The next tim inti fisika dan mahasiswi STEI-R atau FTTM ITB 27",
    photo: "image/11.jpg"
  },
  {
    name: "Hanifah Naila Zahra",
    role: "Matcha lovers, coquette gurl, hobi makan & tidur, alhamdulillah hidup aman tentram dan damai.",
    photo: "image/15.jpg"
    
  },
  {
    name: "Nafisah Amanullah",
    role: "Sukanya kalau dipanggil fish, favoritnya ngelihatin langit, bumi aja dia sabar mempelajarinya apalagi kamu?",
    photo: "image/16.jpg"
  }
];

let memberIndex = 0;

function renderMember() {
  const member = team[memberIndex];
  const card = document.getElementById("timCard");
  card.innerHTML = `
    <img src="${member.photo}" alt="${member.name}" class="profile-photo" />
    <h2>${member.name}</h2>
    <p>${member.role}</p>
  `;
}

function nextMember() {
  memberIndex = (memberIndex + 1) % team.length;
  renderMember();
}

function prevMember() {
  memberIndex = (memberIndex - 1 + team.length) % team.length;
  renderMember();
}

document.addEventListener("DOMContentLoaded", () => {
  renderStar();
  renderMember();
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.star-container');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDuration = (1 + Math.random() * 2) + 's';
    container.appendChild(star);
  }
});


star.classList.add("star");
star.style.top = Math.random() * window.innerHeight + "px";
star.style.left = Math.random() * window.innerWidth + "px";
star.style.width = star.style.height = Math.random() * 2 + 1 + "px"; // Ukuran bintang acak (1–3px)
star.style.animationDuration = (0.5 + Math.random() * 1.5) + "s"; // Lebih variatif

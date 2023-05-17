// Mendapatkan elemen dengan id "restaurantList"
const restaurantList = document.getElementById("restaurantList");

// Mengimport data JSON dari file data.json
const data = require("../public/data/DATA.json");

// Menampilkan daftar restoran
data.restaurants.forEach((restaurant) => {
  const { name, description, pictureId, city, rating } = restaurant;

  // Membuat elemen HTML untuk setiap restoran
  const restaurantElement = document.createElement("article");
  restaurantElement.classList.add("post-item");
  restaurantElement.setAttribute("tabindex", "0"); // Menambahkan atribut tabindex

  const thumbnailElement = document.createElement("img");
  thumbnailElement.classList.add("post-item__thumbnail");
  thumbnailElement.src = pictureId;
  thumbnailElement.alt = name;
  restaurantElement.appendChild(thumbnailElement);
  thumbnailElement.setAttribute("tabindex", "0"); // Menambahkan atribut tabindex

  const contentElement = document.createElement("div");
  contentElement.classList.add("post-item__content");
  // contentElement.setAttribute("tabindex", "0");

  const titleElement = document.createElement("h2");
  // const titleLinkElement = document.createElement("a");
  // titleLinkElement.href = "#"; // Tambahkan URL tujuan jika ada
  titleElement.textContent = name;
  // titleElement.appendChild(titleLinkElement);
  contentElement.appendChild(titleElement);
  titleElement.setAttribute("tabindex", "0"); // Menambahkan atribut tabindex

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("post-item__description");
  descriptionElement.textContent = description;
  contentElement.appendChild(descriptionElement);
  descriptionElement.setAttribute("tabindex", "0"); // Menambahkan atribut tabindex

  // Menampilkan minimal satu di antara kota, rating, atau deskripsi pada restoran
  let additionalInfo = "";
  if (city) {
    additionalInfo += `City: ${city}`;
  }
  if (rating) {
    additionalInfo += `${
      additionalInfo.length > 0 ? ", " : ""
    }Rating: ${rating}`;
  }

  if (additionalInfo) {
    const additionalInfoElement = document.createElement("h3");
    additionalInfoElement.textContent = additionalInfo;
    contentElement.appendChild(additionalInfoElement);
    additionalInfoElement.setAttribute("tabindex", "0"); // Menambahkan atribut tabindex
  }

  restaurantElement.appendChild(contentElement);

  // Menambahkan elemen restoran ke daftar restoran
  restaurantList.appendChild(restaurantElement);
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

// selama yg di klik targetnya bukan hamburger atau navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// category button section process
const btnContainer = document.getElementById("category-btn-container");
const cardContainer = document.getElementById("card-container");
// fetch category buttons
const loadCategoryButtons = () => {
  fetch("JSON/category.json")
    .then((res) => res.json())
    .then((data) => displayButtons(data.categories))
    .catch((err) => console.error(err));
};
// display category buttons
const displayButtons = (data) => {
  //   console.log(data[0].product_type);
  data.forEach((button) => {
    // console.log(button);
    const div = document.createElement("div");
    div.innerHTML = `<button onclick="loadCategoryCard('${button.category_id}', '${button.product_type}')" class='category-btn' id='${button.category_id}'>${button.category}</button>`;
    btnContainer.appendChild(div);
  });
  activateButton();
};
// fetch default card data
const loadCardData = () => {
  loader();
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    fetch("JSON/items-101.json")
      .then((res) => res.json())
      .then((data) => displayCard(data.women_products));
  }, 3000);
};
// display card
const displayCard = (data) => {
  cardContainer.innerHTML = "";
  data.forEach((card) => {
    // console.log(card)
    let { thumbnail, title, category } = card;
    const div = document.createElement("div");
    div.classList.add("main-card");
    div.innerHTML = `
        ${
          card.others.discount !== ""
            ? `<div class="discount-overlay">-29%</div>`
            : ""
        }
        <figure>
        <img class="image" src="${thumbnail}" alt="" />
        <div class="icons-overlay">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-repeat"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        </figure>
        <div class="body-card">
          <p class="category-title">${category}</p>
          <h2 class="short-text">
            ${title}
          </h2>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              checked="checked"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <p class="product-price">₹100,847.94</p>
        </div>
        `;
    cardContainer.appendChild(div);
  });
};
const loadCategoryCard = (id, product_type) => {
  loader();
  //   alert(product_type);
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    fetch(`JSON/items-${id}.json`)
      .then((res) => res.json())
      .then((data) => displayCard(data[product_type]))
      .catch((err) => console.log(err));
  }, 3000);
};
const loader = () => {
  cardContainer.innerHTML = "";
  document.getElementById("loader").style.display = "flex";
};

loadCategoryButtons();
loadCardData();

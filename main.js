let nav = document.querySelector("nav");
let dimmer = document.querySelector(".dimmer");
let cart = document.querySelector(".cartMenu");
let main = document.querySelector("main");
let showMenu = () => {
  nav.classList.toggle("hide");
  dimmer.classList.toggle("hide");
};
let hideMenu = () => {
  nav.classList.toggle("hide");
  dimmer.classList.toggle("hide");
};
let cartBtn = document.querySelector(".cartBtn");
let empty = document.querySelector(".empty");
let showCart = () => {
  if (items.innerHTML == "") {
    cartBtn.classList.add("hide");
    empty.classList.remove("hide");
  } else {
    empty.classList.add("hide");
    cartBtn.classList.remove("hide");
  }
  cart.classList.toggle("hide");
};

main.addEventListener("click", function () {
  if (!cart.classList.contains("hide")) {
    cart.classList.toggle("hide");
  }
  if (!nav.classList.contains("hide")) {
    nav.classList.toggle("hide");
  }
});
let itemCount = document.querySelector(".itemCount");
let counter = +itemCount.innerHTML;
let add = () => {
  counter += 1;
  itemCount.innerHTML = `${counter}`;
};
let minus = () => {
  if (counter !== 0) {
    counter -= 1;
    itemCount.innerHTML = `${counter}`;
  }
};
let items = document.querySelector(".items");
let itemName = document.querySelector(".itemName");
let itemPrice = document.querySelector(".itemPrice");
let div = document.createElement("div");
let cartCount = document.querySelector(".counter");
let addItems = () => {
  if (items.innerHTML != "") {
    alert("Already added");
  } else {
    if (counter !== 0) {
      div.id = "item";
      div.className = "item";
      div.innerHTML = `
            <div class="right">
              <img src="./images/image-product-1-thumbnail.jpg" alt="shoes" />
              <div class="itemInfo">
                <p>${itemName.innerHTML}</p>
                <p>${itemPrice.innerHTML} x ${counter} <strong>$${Number(
        itemPrice.innerHTML.slice(1) * +counter
      ).toFixed(2)}</strong></p>
              </div>
            </div>
            <div class="left">
              <img src="./images/icon-delete.svg" alt="delete" class="delete" onclick="deleteItem(this)"/>
            </div>
            `;
      items.appendChild(div);
      cartCount.classList.remove("hide");
      cartCount.innerHTML = counter;
    }
  }
  itemCount.innerHTML = +0;
  counter = 0;
};

let deleteItem = (elem) => {
  let item = elem.parentNode.parentNode;
  item.remove();
  if (items.innerHTML == "") {
    cartBtn.classList.add("hide");
    empty.classList.remove("hide");
  } else {
    empty.classList.add("hide");
    cartBtn.classList.remove("hide");
  }
  cartCount.classList.add("hide");
};

let mains = document.querySelectorAll("#mains");
let thumbnails_1 = document.querySelectorAll(".thumbnails")[0].children;
let showMain = (id) => {
  for (let i = 0; i < mains.length; i++) {
    mains[i].classList.add("hide");
  }
  mains[id].classList.remove("hide");

  for (let i = 0; i < thumbnails_1.length; i++) {
    thumbnails_1[i].classList.remove("select");
  }
  thumbnails_1[id].classList.add("select");
};

let lightView = document.querySelector(".lightView");
let light = document.querySelectorAll("#light");
let showLight = (id) => {
  lightView.classList.remove("Hide");
  for (let i = 0; i < light.length; i++) {
    light[i].classList.remove("active");
  }
  light[id].classList.add("active");
};
let thumbnails_2 = document.querySelectorAll(".thumbnails")[1].children;

let showMainLight = (id) => {
  for (let i = 0; i < light.length; i++) {
    light[i].classList.remove("active");
  }
  light[id].classList.add("active");

  for (let i = 0; i < thumbnails_2.length; i++) {
    thumbnails_2[i].classList.remove("select");
  }
  thumbnails_2[id].classList.add("select");
};
let closeLight = () => {
  lightView.classList.add("Hide");
};

let perLigth = () => {
  let id;
  for (let i = 0; i < light.length; i++) {
    if (light[i].classList.contains("active")) {
      id = i;
    }
    light[i].classList.remove("active");
  }
  if (id === 0) {
    light[3].classList.add("active");
    id = 3;
  } else {
    light[id - 1].classList.add("active");
    id = id - 1;
  }
  for (let i = 0; i < thumbnails_2.length; i++) {
    thumbnails_2[i].classList.remove("select");
  }
  thumbnails_2[id].classList.add("select");
};

let nexLigth = () => {
  let id;
  for (let i = 0; i < light.length; i++) {
    if (light[i].classList.contains("active")) {
      id = i;
    }
    light[i].classList.remove("active");
  }
  if (id === 3) {
    light[0].classList.add("active");
    id = 0;
  } else {
    light[id + 1].classList.add("active");
    id = id + 1;
  }
  for (let i = 0; i < thumbnails_2.length; i++) {
    thumbnails_2[i].classList.remove("select");
  }
  thumbnails_2[id].classList.add("select");
};

let per = () => {
  let id;
  for (let i = 0; i < mains.length; i++) {
    if (!mains[i].classList.contains("hide")) {
      id = i;
    }
    mains[i].classList.add("hide");
  }
  if (id === 0) {
    mains[3].classList.remove("hide");
    id = 3;
  } else {
    mains[id - 1].classList.remove("hide");
    id = id - 1;
  }
};

let nex = () => {
  let id;
  for (let i = 0; i < mains.length; i++) {
    if (!mains[i].classList.contains("hide")) {
      id = i;
    }
    mains[i].classList.add("hide");
  }
  if (id === 3) {
    mains[0].classList.remove("hide");
    id = 0;
  } else {
    mains[id + 1].classList.remove("hide");
    id = id + 1;
  }
};

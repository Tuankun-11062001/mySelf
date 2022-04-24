// inport data from file data

import data from "../data/data.js";

// navigation
const itemNavigations = document.querySelectorAll(".header__item");

for (const itemNavigation of itemNavigations) {
  itemNavigation.addEventListener("click", (e) => {
    const item = e.target;
    const parentItem = item.parentElement;
    for (const itemNavigation of itemNavigations) {
      if (itemNavigation.classList.contains("active")) {
        itemNavigation.classList.remove("active");
      }
    }
    parentItem.classList.add("active");
  });
}

// open menu mobie

const buttonOpenMobile = document.querySelector(".btn-menu");
const buttonCloseMobile = document.querySelector(".btn-close");
const headerMobile = document.querySelector(".header");

console.log(buttonOpenMobile, buttonCloseMobile);

buttonOpenMobile.addEventListener("click", () => {
  headerMobile.classList.add("openMenuMobie");
});

buttonCloseMobile.addEventListener("click", () => {
  headerMobile.classList.remove("openMenuMobie");
});

// typed JS libraly
var typed = new Typed(".type", {
  strings: ["Designer.", "Devolopment Font - End."],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

// slick slider experience

$(".main__contain__experience__slides").slick({
  infinite: true,
  slidesToShow: 2,
  // slidesToScroll: 3,
  prevArrow:
    "<button type='button' class='slick-prev btn-slick'><i class='bx bx-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next btn-slick'><i class='bx bx-chevron-right' ></i></button>",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// slick slider education

$(".main__contain__education__slides").slick({
  infinite: true,
  slidesToShow: 2,
  // slidesToScroll: 3,
  prevArrow:
    "<button type='button' class='slick-prev btn-slick'><i class='bx bx-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next btn-slick'><i class='bx bx-chevron-right' ></i></button>",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// slick

// contact

const contactEl = document.querySelector(".main__contain__contact__form");

// listen inputs

const inputEls = contactEl.querySelectorAll("input");

for (const inputEl of inputEls) {
  inputEl.addEventListener("blur", checkForm);
  inputEl.addEventListener("input", checkCharacter);
}

// listen button Submit

const buttonSubmit = contactEl.querySelector("button");

buttonSubmit.addEventListener("click", (e) => {
  e.target.defaultPrevented;
  for (const inputEl of inputEls) {
    if (inputEl.value == "") {
    }
  }
  const inputEmail = contactEl.querySelectorAll("input")[1];
  checkEmail(inputEmail);
});

function checkForm(e) {
  const input = e.target;
  const inputParent = input.parentElement;
  const messEl = inputParent.querySelector("p");
  if (input.value.trim() == "") {
    inputParent.classList.add("error");
    errorForm(messEl, "Error Fiel");
  }
}

function checkCharacter(e) {
  const input = e.target;
  const inputParent = input.parentElement;
  const messEl = inputParent.querySelector("p");

  if (input.value.trim()) {
    inputParent.classList.remove("error");
    messEl.innerHTML = "";
  }
}

function errorForm(input, mess) {
  const messError = mess;
  input.innerHTML = messError;
}

function checkEmail(inputEmail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

// get data

function getDataElemnt(nameElement, render) {
  data.filter((item) => {
    if (item.title === nameElement) {
      render(item);
    }
  });
}

function render(dataEl) {
  // if dataEl title equal about

  if (dataEl.title == "about") {
    // get container about though id.

    const parentEl = document.querySelector("#about");

    // get element node para

    const detailEl = parentEl.querySelector(".main__contain__about__detail");

    // get elment node age

    const ageEl = parentEl.querySelector(
      ".main__contain__about__info__item__age"
    );

    // get elment node phone

    const phoneEl = parentEl.querySelector(
      ".main__contain__about__info__item__phone"
    );

    // get elment node email

    const emailEl = parentEl.querySelector(
      ".main__contain__about__info__item__email"
    );

    // get elment node school

    const schoolEl = parentEl.querySelector(
      ".main__contain__about__info__item__school"
    );

    // get elment node address

    const addressEl = parentEl.querySelector(
      ".main__contain__about__info__item__address"
    );

    // get elment node experience

    const experienceEl = parentEl.querySelector(
      ".main__contain__about__info__item__experience"
    );

    // add data from data to element has get though innerHTML.

    detailEl.innerHTML = dataEl.para;
    ageEl.innerText = dataEl.age;
    phoneEl.innerText = dataEl.phone;
    emailEl.innerText = dataEl.email;
    schoolEl.innerText = dataEl.school;
    addressEl.innerText = dataEl.address;
    experienceEl.innerText = dataEl.experience;
  }

  // if dataEl title equal experience

  // error slick slider not working, so not use it.
  else if (dataEl.title == "experience") {
    // get container selection experience

    const parentEl = document.querySelector("#resume");

    // get container selection slider

    const slidesEl = parentEl.querySelector(
      ".main__contain__experience__slides"
    );

    // create silde Item and assign item map on it.

    const slideItem = dataEl.dataTitle.map((item) => {
      return `
        <div class="main__contain__experience__slide__item">
                  <div class="main__contain__experience__slide__item__title">
                    <h2><span>${item.time}</span> ${item.name}</h2>
                  </div>
                  <div class="main__contain__experience__slide__item__content">
                    ${item.detail}
                  </div>
                </div>
      `;
    });

    // add item map to container slider and use method join on it.

    slidesEl.innerHTML = slideItem.join("");
  }

  // if dataEl title equal education
  else if (dataEl.title == "education") {
    console.log("title :" + dataEl.title);
  }

  // if dataEl title equal project
  else if (dataEl.title == "project") {
    const parentEl = document.querySelector("#project");
    const listEl = parentEl.querySelector(".main__contain__projects__list");
    const itemEl = dataEl.dataTitle.map((item) => {
      return `
        <div class="main__contain__projects__item ${item.reponsive}">
                  <img
                    src="${item.img}"
                    alt=""
                  />
                  <div class="main__contain__projects__item__getlink">
                    <a href="${item.link}">
                      <lord-icon
                        src="https://cdn.lordicon.com/wjwuvtno.json"
                        trigger="hover"
                        class="icon"
                      >
                      </lord-icon>
                    </a>
                  </div>
                </div>
      `;
    });
    listEl.innerHTML = itemEl.join("");

    const btnControls = parentEl.querySelectorAll("button");
    for (const btn of btnControls) {
      // get cmd atribute button

      const cmd = btn.getAttribute("data-cmd");

      // listener button

      btn.addEventListener("click", (e) => {
        // get element button

        const button = e.target;

        // loop button and active it

        for (const btn of btnControls) {
          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
          } else {
            button.classList.add("active");
          }
        }

        // find project reponsive and not reponsive

        // get item of projects

        const items = listEl.querySelectorAll(".main__contain__projects__item");

        // loop though them

        for (const item of items) {
          // check cmd equal search classlist ? and display them

          switch (cmd) {
            case "all":
              item.style.display = "block";
              break;
            case "reponsive":
              if (item.classList.contains("yes")) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
              break;
            case "not-reponsive":
              if (item.classList.contains("no")) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
              break;
          }
        }
      });
    }
  }
}

getDataElemnt("about", render);
// // getDataElemnt("experience", render);
// getDataElemnt("education", render);
getDataElemnt("project", render);

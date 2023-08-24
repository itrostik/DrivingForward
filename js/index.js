// Header Mobile Menu

const headerMobileMenuButton = document.querySelector(".header__mobileMenu-button")
const headerMobileMenu = document.querySelector(".header__mobileMenu")
const headerMobileMenuCloseButton = document.querySelector(".header__mobileMenu-closeButton")
const wrapper = document.querySelector(".wrapper")

headerMobileMenuButton.addEventListener('click' , () => {
  headerMobileMenu.classList.add("openButton")
  headerMobileMenuButton.style.opacity = "0"
  wrapper.classList.toggle("closing")
  headerMobileMenu.style.animation = "0.5s ease forwards onslide"
})

headerMobileMenuCloseButton.addEventListener('click', () => {
  headerMobileMenuButton.style.opacity = "1"
  wrapper.classList.toggle("closing")
  headerMobileMenu.style.animation = "0.5s ease forwards offslide"
})


//Оставить заявку

const advantagesButton = document.querySelector(".main__advantages-button")
const advantagesForm = document.querySelector(".form")
const advantagesFormCloseButton = document.querySelector(".form__closeButton")

advantagesButton.addEventListener("click", () => {
  advantagesForm.classList.toggle("openButton")
  wrapper.classList.toggle("closing")
})

advantagesFormCloseButton.addEventListener('click', () => {
  advantagesForm.classList.toggle("openButton")
  wrapper.classList.toggle("closing")
})

//Дропдаун при выборе услуг

let servicesInputButton = document.querySelector(".main__contacts-form-service__button")
const arrowService = document.querySelector(".arrow-service")
const servicesMenu = document.querySelector(".dropdown__list")

servicesInputButton.addEventListener("click", () => {
  arrowService.classList.toggle("rotate-arrow")
  servicesMenu.classList.toggle("openButton")
})

const servicesText = document.querySelector(".main__contacts-form-service-text")
const servicesMenuItems = document.querySelectorAll(".dropdown__list-item")

servicesMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const text = item.innerText;
    servicesMenu.classList.toggle("openButton");
    arrowService.classList.toggle("rotate-arrow")
    servicesInputButton.value = text;
  })
})


//Адаптив
if (window.innerWidth <= 576) {
  servicesInputButton.value = "Выберите услугу";
}




//Дропдаун при выборе номера


const countryChooseButtons = document.querySelectorAll(".country")


countryChooseButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const countryArrow = item.querySelector(".arrow-country")
    const countryList = item.querySelector(".country__menu")
    countryArrow.classList.toggle("rotate-arrow")
    countryList.classList.toggle("open")
    const countryItems = item.querySelectorAll(".country__item");
    countryItems.forEach((elem) => {
      elem.addEventListener('click', () => {
        const countryItemImage = elem.children[0]
        const countryItemNumber = elem.children[1].innerText
        const currentCountryItemImage = item.children[0]
        const currentCountryNumber = item.parentNode.children[1].innerText
        elem.prepend(item.children[0])
        item.prepend(countryItemImage)
        elem.children[1].innerText = currentCountryNumber;
        item.parentNode.children[1].innerText = countryItemNumber
      })
    })
  })
})



//Плавный скролл меню

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substring(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//Плавный скролл кнопки "Листайте вниз"

const buttonDown = document.querySelector(".main__advantages-next-text")

buttonDown.addEventListener("click", (e) => {
  e.preventDefault()
  const request = document.querySelector(".main__request")
  request.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})




// Header Mobile Menu

const headerMobileMenuButton = document.querySelector(".header__mobileMenu-button")
const headerMobileMenu = document.querySelector(".header__mobileMenu")
const headerMobileMenuCloseButton = document.querySelector(".header__mobileMenu-closeButton")
const wrapper = document.querySelector(".wrapper")

headerMobileMenuButton.addEventListener('click' , () => {
  headerMobileMenu.classList.add("openButton")
  headerMobileMenuButton.style.opacity = "0"
  headerMobileMenu.style.animation = "0.5s ease forwards onslide"
  if (window.innerWidth <= 645) {
    document.body.style.overflow = 'hidden';

  }
})

headerMobileMenuCloseButton.addEventListener('click', () => {
  headerMobileMenuButton.style.opacity = "1"
  headerMobileMenu.style.animation = "0.5s ease forwards offslide"
  if (window.innerWidth <= 645) {
    document.body.style.overflow = '';
  }
})

//Плавный скролл мобильного меню

const headerMobileMenuItems = headerMobileMenu.querySelectorAll(".header__menu-item")

headerMobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMobileMenuButton.style.opacity = "1"
    headerMobileMenu.style.animation = "0.5s ease forwards offslide"
    if (window.innerWidth <= 645) {
      document.body.style.overflow = '';
    }
  })
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
  const country = document.querySelector(".country__menu")
  const arrow = document.querySelector(".arrow-country")
  country.classList.remove("open")
  arrow.classList.remove("rotate-arrow")

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


//Закрытие дропдауна при выборе услуг

document.addEventListener('click', (e) => {
  const dropdownServicesMenu = document.querySelector(".dropdown__menu");
  const click = e.composedPath().includes(dropdownServicesMenu)
  if (!click) {
    servicesMenu.classList.remove("openButton");
    arrowService.classList.remove("rotate-arrow")
  }
})

//Адаптив
if (window.innerWidth <= 576) {
  servicesInputButton.value = "Выберите услугу";
}




//Дропдаун при выборе номера


const countryChooseButtons = document.querySelectorAll(".country__button")


countryChooseButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const itemMenu = item.parentNode;
    const countryArrow = itemMenu.querySelector(".arrow-country")
    const countryList = itemMenu.querySelector(".country__menu")
    countryArrow.classList.toggle("rotate-arrow")
    countryList.classList.toggle("open")
  })
})





const countryItems = document.querySelectorAll(".country__item");

countryItems.forEach(elem => {
  elem.addEventListener('click', () => {
    const countryMenu = document.querySelector(".open")
    const countryItemImage = elem.children[0]
    const countryItemNumber = elem.children[1].innerText
    const currentCountryItemImage = countryMenu.parentNode.children[0].children[0]
    const currentCountryNumber = countryMenu.parentNode.parentNode.children[1].innerText
    elem.prepend(currentCountryItemImage)
    countryMenu.parentNode.children[0].prepend(countryItemImage)
    elem.children[1].innerText = currentCountryNumber;
    countryMenu.parentNode.parentNode.children[1].innerText = countryItemNumber
    const countryArrow = countryMenu.parentNode.querySelector(".arrow-country")
    const countryList = countryMenu.parentNode.querySelector(".country__menu")
    countryArrow.classList.remove("rotate-arrow")
    countryList.classList.remove("open")
  })
})




// Закрытие дропдауна при клике извне

document.addEventListener('click', (e) => {
  countryChooseButtons.forEach(item => {
    const itemMenu = item.parentNode
    const click = e.composedPath().includes(itemMenu)
    if (!click) {
      const countryArrow = itemMenu.querySelector(".arrow-country")
      const countryList = itemMenu.querySelector(".country__menu")
      countryArrow.classList.remove("rotate-arrow")
      countryList.classList.remove("open")
    }
  })
})


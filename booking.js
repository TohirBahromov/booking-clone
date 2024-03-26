let DesNavbar = document.querySelector(".destination-ul").querySelectorAll("li"),
  DesRegion = document.querySelector(".loving-destinations-region"),
  DesCities = document.querySelector(".loving-destinations-cities"),
  DesInternet = document.querySelector(".loving-destinations-internet");

DesNavbar[0].addEventListener("click", ()=>{
  DesNavbar[0].classList.add('active')
  DesNavbar[1].classList.remove('active')
  DesNavbar[2].classList.remove('active')
  DesCities.classList.add('d-none')
  DesInternet.classList.add('d-none')
  DesRegion.classList.remove('d-none')
})
DesNavbar[1].addEventListener("click", ()=>{
  DesNavbar[1].classList.add('active')
  DesNavbar[0].classList.remove('active')
  DesNavbar[2].classList.remove('active')
  DesRegion.classList.add('d-none')
  DesInternet.classList.add('d-none')
  DesCities.classList.remove('d-none')
})
DesNavbar[2].addEventListener("click", ()=>{
  DesNavbar[2].classList.add('active')
  DesNavbar[0].classList.remove('active')
  DesNavbar[1].classList.remove('active')
  DesRegion.classList.add('d-none')
  DesCities.classList.add('d-none')
  DesInternet.classList.remove('d-none')
})
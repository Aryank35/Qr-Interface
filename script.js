const navList = document.getElementById("navList");
const openMenu = document.getElementById("sideBar");
const closeMenu = document.getElementById("cross");

openMenu.addEventListener("click",()=>{
  sideBar.classList.add("hidden");
  navList.classList.remove("hidden");
  navList.classList.add("translate-x-0")
})

closeMenu.addEventListener("click",()=>{
  sideBar.classList.remove("hidden");
  navList.classList.add("hidden");
})
let sidebar = document.querySelector('#sidebar');

const openSidebar = () => sidebar?.classList.toggle("active");


const closeSidebar = () => sidebar?.classList.remove("active");


const articleDropdown = () => {
  const dropdownMenu = document.querySelector("#dropdownMenu");
  const icon = document.querySelector('.rotate-icon');
  icon.classList.toggle('active');
  dropdownMenu.classList.toggle("active");
  if (dropdownMenu.classList.contains("active")) {
    dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
  } else {
    dropdownMenu.style.height = "0";
    setTimeout(() => {
      dropdownMenu.style.height = "";
    }, 300);
  }
};


const backUp = value => {
  window.scrollTo({
    top: value,
    behavior: "smooth",
  });
};

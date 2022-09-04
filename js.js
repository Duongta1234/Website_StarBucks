var button = document.getElementById("button1");
button.addEventListener("click", function () {
  if (button.clicked === false) {
  } else {
    button.style.animation = "animaterbutton .5s  ease-in-out";
  }
});
var button_list = document.getElementById("button_list");
button_list.addEventListener("click", function () {
  let list_menu = document.getElementById("list_menu");
  let list = document.getElementById("list");
  let button_form = document.getElementById("button_form");

  let logo = document.getElementById("logo");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
  if (logo.style.display === "none") {
    logo.style.display = "flex";
  } else {
    logo.style.display = "none";
  }
  if (button_form.style.display === "none") {
    button_form.style.display = "flex";
  } else {
    button_form.style.display = "none";
  }
  if (list_menu.style.height === "0%") {
    list_menu.style.height = "100%";
  } else {
    list_menu.style.height = "0%";
  }
});



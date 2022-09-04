let gifcardform_menu = document.getElementById("gifcard_form_menu");
let btn_starbuck_gifcardform = document.getElementById(
  "btn_starbuck-gifcardform"
);
btn_starbuck_gifcardform.addEventListener("click", function () {
  if (gifcardform_menu.style.display === "none") {
    gifcardform_menu.style.display = "block";
    gifcardform_menu.style.transition = "all 0,5s ease-in-out";
  } else {
    gifcardform_menu.style.display = "none";
  }
});

let submit_form = document.getElementById("submit_form");
submit_form.addEventListener("click", function (e) {
  e.preventDefault();
  let firt_name = document.getElementById("firt-name");
  let Thongbao1 = document.getElementById("Thongbao1");
  if (firt_name.value === "") {
    Thongbao1.innerHTML = "Không đc để trống Firt Name";
    Thongbao1.style.color = "crimson";
    Thongbao1.style.fontSize = "16px";
    Thongbao1.style.fontWeight = "600";
    Thongbao1.style.marginTop = "10px";
    firt_name.style.borderColor = "red";
    Thongbao1.style.marginLeft = "10px";
  } else {
    Thongbao1.innerHTML = "";
  }
  let Last_name = document.getElementById("Last-name");
  let Thongbao2 = document.getElementById("Thongbao2");
  let regex_text_lenght = /[^\w{5,10}$]/;
  if (Last_name.value === "") {
    Thongbao2.innerHTML = "Không đc để trống Last Name";
    Thongbao2.style.color = "crimson";
    Thongbao2.style.fontSize = "16px";
    Thongbao2.style.fontWeight = "600";
    Thongbao2.style.marginTop = "10px";
    Last_name.style.borderColor = "red";
    Thongbao2.style.marginLeft = "10px";
  } else {
    Thongbao2.innerHTML = "";
  }

  let email = document.getElementById("emails");
  let passwords = document.getElementById("Passwords");
  checkEmail(email);
  checkPasswords(passwords);
  let cardNumber = document.getElementById("cardNumber");
  CheckCardNumber(cardNumber);
  let Security_code = document.getElementById("Security_code");
  CheckSecurityCode(Security_code);
});

function checkEmail(emails) {
  let thongbao3 = document.getElementById("thongbao3");

  if (emails.value === "") {
    thongbao3.innerHTML = "Không đc để trống Email";
    thongbao3.style.color = "crimson";
    thongbao3.style.fontSize = "17px";
    thongbao3.style.fontWeight = "600";
    thongbao3.style.marginTop = "10px";
    thongbao3.style.marginLeft = "10px";
    emails.style.borderColor = "red";
  } else {
    thongbao3.innerHTML = "";
    emails.style.borderColor = "grey";
  }
  let regex_email =
    /^((([a-z]|[0-9]|!|#|$|%|&|'|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/;
  if (!regex_email.test(emails.value)) {
    thongbao3.innerHTML = "Email ko đúng định dạng";
    thongbao3.style.color = "crimson";
    thongbao3.style.fontSize = "17px";
    thongbao3.style.fontWeight = "600";
    thongbao3.style.marginTop = "10px";
    thongbao3.style.marginLeft = "10px";
    emails.style.borderColor = "red";
  } else {
    thongbao3.innerHTML = "";
    emails.style.borderColor = "grey";
  }
}

function checkPasswords(passwords) {
  let thongbao4 = document.getElementById("thongbao4");
  if (passwords === "") {
    thongbao4.innerHTML = "Không đc để trống Passwords";
    thongbao4.style.color = "crimson";
    thongbao4.style.fontSize = "17px";
    thongbao4.style.fontWeight = "600";
    thongbao4.style.marginTop = "10px";
    thongbao4.style.marginLeft = "10px";
    passwords.style.borderColor = "red";
  } else {
    thongbao4.innerHTML = "";
    passwords.style.borderColor = "grey";
  }

  let regex_pass = /^[A-Za-z]\w{7,14}$/;
  if (!passwords.value.match(regex_pass)) {
    passwords.style.borderColor = "red";
    thongbao4.innerHTML = "Passwords not strong enough";
    thongbao4.style.color = "crimson";
    thongbao4.style.fontSize = "17px";
    thongbao4.style.fontWeight = "600";
    thongbao4.style.marginTop = "10px";
    thongbao4.style.marginLeft = "10px";
  } else {
    thongbao4.innerHTML = "";
    passwords.style.borderColor = "grey";
  }
}
function CheckCardNumber(cardNumber) {
  let thongbao5 = document.getElementById("thongbao5");
  if (cardNumber.value === "") {
    thongbao5.innerHTML = "Please enter a valid card number";
    thongbao5.style.color = "crimson";
    thongbao5.style.fontSize = "15px";
    thongbao5.style.fontWeight = "600";
    thongbao5.style.marginTop = "10px";
    cardNumber.style.borderColor = "red";
    thongbao5.style.marginLeft = "10px";
  } else {
    thongbao5.innerHTML = "";
    cardNumber.style.borderColor = "grey";
  }
  let regex_cardNumber = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
  if (!cardNumber.value.match(regex_cardNumber)) {
    thongbao5.innerHTML = "Ko du so luong";
    thongbao5.style.color = "crimson";
    thongbao5.style.fontSize = "15px";
    thongbao5.style.fontWeight = "600";
    thongbao5.style.marginTop = "10px";
    cardNumber.style.borderColor = "red";
    thongbao5.style.marginLeft = "10px";
  } else {
    cardNumber.style.borderColor = "grey";
    thongbao5.innerHTML = "";
  }
}

function CheckSecurityCode(Security_code) {
  let thongbao6 = document.getElementById("thongbao6");
  if (Security_code.value === "") {
    thongbao6.style.color = "crimson";
    thongbao6.style.fontSize = "15px";
    thongbao6.style.fontWeight = "600";
    thongbao6.style.marginTop = "10px";
    thongbao6.innerHTML = "Ko dc để trống Security_code";
    Security_code.style.borderColor = "red";
  } else {
    thongbao6.innerHTML = "";
    Security_code.style.borderColor = "grey";   
  }
  let regex_Security = /[0-9]{3} {0,1}[0-9]{1} {0,1}[0-9]{1} {0,1}[0-9]{1}/;
  if (!Security_code.value.match(regex_Security)) {
    thongbao6.style.color = "crimson";
    thongbao6.style.fontSize = "15px";
    thongbao6.style.fontWeight = "600";
    thongbao6.style.marginTop = "10px";
    thongbao6.innerHTML = "Số lượng ko đủ";
    Security_code.style.borderColor = "red";    

    return false;
  } else {
    thongbao6.innerHTML = "";
  Security_code.style.borderColor = "grey";   
  }
}

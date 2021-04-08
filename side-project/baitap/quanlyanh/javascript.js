
const formInput = document.getElementsByTagName("form")[0];
const itemName = document.getElementById("input__item-name");
const itemCategory = document.getElementById("input__category");
const itemImage = document.getElementById("input__image");
// Preview Image
const imagePreview = function (event) {
  document.getElementById("input__image-warning").innerHTML = "";
  document.getElementById("input__image--chosen").src = URL.createObjectURL(event.target.files[0]);
}
// Validity & Get file
const validity = formInput.addEventListener("submit", function (event) {
  if (!itemName.validity.valid) {
    document.getElementById("input__name-warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__name-warning").innerHTML = "";
  }
  if (!itemCategory.validity.valid) {
    document.getElementById("input__category-warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__category-warning").innerHTML = "";
  }
  if (!itemImage.validity.valid) {
    document.getElementById("input__image-warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  
});
// Show Data
const submit = function () {
  if ((itemName.validity.valid) & (itemCategory.validity.valid) & (itemImage.validity.valid)) {
    let formInput = {};
    formInput.append()
  }
}


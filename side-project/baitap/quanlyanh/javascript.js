
const formInput = document.getElementsByTagName("form")[0];
// Preview Image
const imagePreview = function (event) {
  document.getElementById("input__image-warning").innerHTML = "";
  document.getElementById("input__image--chosen").src = URL.createObjectURL(event.target.files[0]);
}
// Validity & Get file
const validity = formInput.addEventListener("submit", function (event) {
  const itemName = document.getElementById("input__item-name");
  const itemCategory = document.getElementById("input__category");
  const itemImage = document.getElementById("input__image");
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
  if ((itemName.validity.valid) & (itemCategory.validity.valid) & (itemImage.validity.valid)) {
    localStorage.setItem("itemName", itemName.value);
    localStorage.setItem("itemCategory", itemCategory.value);
    localStorage.setItem("itemImage", document.getElementById("input__image--chosen").src);
    document.getElementById("input__image--chosen").src = "";
    document.getElementById("input__form").reset();
    document.getElementById("output__item-name").innerHTML = localStorage.getItem("itemName");
    document.getElementById("output__item-category").innerHTML= localStorage.getItem("itemCategory");
    document.getElementById("output__item-image").src= localStorage.getItem("itemImage");
  }  
});

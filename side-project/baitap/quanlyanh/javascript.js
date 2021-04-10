
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
  console.log(itemName.value.substr(0,1));
  // Validate Name
  if ((!itemName.validity.valid) || (parseInt(itemName.value.substr(0,1)))) {
    document.getElementById("input__name-warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__name-warning").innerHTML = "";
  }
  // Validate Category
  if (!itemCategory.validity.valid) {
    document.getElementById("input__category-warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__category-warning").innerHTML = "";
  }
  // Validate Image
  if (!itemImage.validity.valid) {
    document.getElementById("input__image-warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  // Get Content
  if ((itemName.validity.valid) & (itemCategory.validity.valid) & (itemImage.validity.valid)) {
    document.getElementById("output__item-name").innerHTML = itemName.value;
    document.getElementById("output__item-category").innerHTML = itemCategory.value;
    document.getElementById("output__item-image").src = document.getElementById("input__image--chosen").src;
  }
});

// Create Entity Set
const inputSet = [
  {
    itemnumber: "1",
    itemname: "1",
    itemcategory: "1",
    itemimage: "blob:http://127.0.0.1:5500/1a92687f-2466-4ff0-8b4c-90f13e3a3b3a",
  }, 
  {
    itemnumber: "2",
    itemname: "2",
    itemcategory: "2",
    itemimage: "2",
  }
];
// Create Entity
let input = {
  key: "1",
  name: "1",
  category: "1",
  url: "1",
};
// Preview Image
const imagePreview = function (event) {
  document.getElementById("input__image__warning").innerHTML = "";
  document.getElementById("image-preview").src = URL.createObjectURL(event.target.files[0]);
}
// Validate
const submit = function inputValue (event) {
  const itemName = document.getElementById("input-name");
  const itemCategory = document.getElementById("input-category");
  const itemImage = document.getElementById("input-image");
  // Validate name
  if (!itemName.validity.valid) {
    document.getElementById("input__item-name__warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__item-name__warning").innerHTML = "";
  }
  // Validate Category
  if (!itemCategory.validity.valid) {
    document.getElementById("input__item-category__warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__item-category__warning").innerHTML = "";
  }
  // Validate Image
  if (!itemImage.validity.valid) {
    document.getElementById("input__image__warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
}
// Create Tabel
for (i = 0; i < inputSet.length; i++) {
  // Create output-container
  const row = document.createElement("div");
  row.setAttribute("class","output__content");
  row.setAttribute("id",inputSet[i].itemnumber);
  document.getElementById("output").appendChild(row);
  // Create Output Items
  function setID(element,list) {
    for (x = 0; x < 5; x++) {
      if (x == 3) {
        cel = cell = document.createElement("img");
      }
      else {
        cell = document.createElement("p");
      }
      cell.setAttribute("class","output-items");
      cell.setAttribute(element,inputSet[i].itemnumber + "_" + list[x]);
      row.appendChild(cell);
    }
  };
  setID("id",["itemnumber","itemname","itemcategory","itemimage","itemaction"]);
}
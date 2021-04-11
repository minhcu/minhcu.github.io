// Create Entity Set
const inputSet = [];
// Create Entity
let input = {};
// Create Table
function addElement(array) {
  for (i = 0; i < array.length; i++) {
  // Create output-container
  const row = document.createElement("div");
  row.setAttribute("class","output__content");
  row.setAttribute("id",array[i].key);
  document.getElementById("output").appendChild(row);
  // Create Output Items
  function setID(element,idList,objValue) {
    objValue[0] = document.createTextNode(i+1);
    objValue[3] = document.createTextNode(inputSet[i].image);
    objValue[4] = document.createTextNode("button");
    for (x = 0; x < 5; x++) {
        cell = document.createElement("div");
        row.appendChild(cell);
        cell.setAttribute("class","output-items");
        cell.setAttribute(element,array[i].key + "_" + idList[x]);
        cell.appendChild(objValue[x]);
      }
    }
  setID("id",["number","name","category","image","action"],[i+1,inputSet[i].name,inputSet[i].category,inputSet[i].image,"button"]);
  };
}
// Preview Image
const imagePreview = function (event) {
  document.getElementById("input__image__warning").innerHTML = "";
  document.getElementById("image-preview").src = URL.createObjectURL(event.target.files[0]);
}
const selectedValue = function update() {
  let select = document.getElementById("input-category");
  for (i = 0; i < 4; i++) {
    select.options[i].removeAttribute("selected");
  }
  select.options[select.selectedIndex].setAttribute("selected","");
} 
// Validate & Create Table
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
  if ((itemName.validity.valid) && (itemCategory.validity.valid) && (itemImage.validity.valid)) {
    input = {
      key: Math.random(),
      name: itemName.cloneNode(true),
      category: itemCategory.cloneNode(true),
      image: itemImage.value,
    }
    input.name.setAttribute("disabled","");
    input.category.setAttribute("disabled","");
    input.name.setAttribute("id",input.key + "_name");
    input.category.setAttribute("id",input.key + "_category");
    inputSet.push(input);
  }
  // Create Table
  if (inputSet.length >= 1) {
    let deleteElement = document.getElementsByClassName("output__content");
    while (deleteElement[0]) {
    deleteElement[0].parentNode.removeChild(deleteElement[0]);
    }
    addElement(inputSet);
  }
  else {
    addElement(inputSet);
  }
}

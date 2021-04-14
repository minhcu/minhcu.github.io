// Xu ly giao dien truoc roi luu data sau
// Đã tham khảo mentor nhưng không thích làm theo mentor

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
    function setID(idList,objValue) {
      objValue[0] = document.createTextNode(i+1);
      objValue[4] = document.createTextNode("");
      for (x = 0; x < 5; x++) {
          cell = document.createElement("div");
          row.appendChild(cell);
          cell.setAttribute("class","output-items");
          cell.setAttribute("id",array[i].key + "_" + idList[x]);
          cell.appendChild(objValue[x]);
        }
      }
    setID(["number","name","category","image","action"],["",inputSet[i].name,inputSet[i].category,inputSet[i].image,""]);
    // Create Button
    function setBTN(btnClass, btnId, jsfunction) {
      const btncell = document.getElementById(array[i].key + "_" + "action");
      for (x = 0; x < 4; x++) {
        btn = document.createElement("button");
        btncell.appendChild(btn);
        btn.setAttribute("class",btnClass[x]);
        btn.setAttribute("id",array[i].key + "_" + btnId[x]);
        btn.setAttribute("onclick",jsfunction[x]);
        btn.appendChild(document.createTextNode(btnId[x]));
      }
    };
    setBTN(["btn btn__edit","btn btn__delete","btn btn__save","btn btn__cancel"],["edit","delete","save","cancel"],["edit()","deleteTable(id)","save()","cancel()"])
  };
}
// // Edit Items
// const editItems = function(btnID) {
//   id = btnId.split('_');
// }
// Delte Table
const deleteTable = function(btnId) {
  id = btnId.split('_');
  for(i = 0; i < inputSet.length; i++) {
    if (id[0] == inputSet[i].key) {
      inputSet.splice(i,1);
    }
  }
  let deleteElement = document.getElementsByClassName("output__content");
  if (inputSet.length >= 1) {
    while (deleteElement[0]) {
    deleteElement[0].parentNode.removeChild(deleteElement[0]);
    }
    addElement(inputSet);
  }
  else {
    while (deleteElement[0]) {
      deleteElement[0].parentNode.removeChild(deleteElement[0]);
    }
  }
};
// Preview Image - NEW
const previewImage = document.getElementById("input-image");
const displayPreview = document.getElementById("image-preview");
previewImage.addEventListener("change", function () {
    let inputFile = this.files[0];
    if (inputFile.type.indexOf('image') < 0) {
      return;
    }
    const whyFileReader = new FileReader();
    whyFileReader.onload = function() {
      displayPreview.src = whyFileReader.result;
      // convertImage(previewImage);
    }
    whyFileReader.readAsDataURL(inputFile);
  }
);

// const convertImage = function convertImageData(img) {
//   const canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   let ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   const dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }














// Lock Category
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
  if ((!itemImage.validity.valid) && (file.type.indexOf('image') < 0)) {
    document.getElementById("input__image__warning").innerHTML = "Không hợp lệ";
    event.preventDefault();
  }
  if ((itemName.validity.valid) && (itemCategory.validity.valid) && (itemImage.validity.valid)) {
    input = {
      key: Math.random(),
      name: itemName.cloneNode(true),
      category: itemCategory.cloneNode(true),
      image: displayPreview.cloneNode(true),
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

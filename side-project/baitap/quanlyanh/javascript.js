// Xu ly giao dien truoc roi luu data sau
// Đã tham khảo mentor nhưng không thích làm theo mentor

// Get Data
const data = JSON.parse(localStorage.getItem("data")) || [];
if (data.length >= 1) {
  addElement(data);
}
// Create output-container
function addElement(array) {
  for (i = 0; i < array.length; i++) {
    const row = document.createElement("div");
    row.setAttribute("class","output__content");
    row.setAttribute("id",array[i].key);
    document.getElementById("output").appendChild(row);
    // Create Items Box
    function setID(idList) {
      for (x = 0; x < 5; x++) {
        cell = document.createElement("div");
        row.appendChild(cell);
        cell.setAttribute("class","output-items");
        cell.setAttribute("id",array[i].key + "_" + idList[x]);
      }
    }
    setID(["number","name-box","category-box","image","action"]);
    // Number
    const number = document.getElementById(array[i].key + "_" + "number");
    number.appendChild(document.createTextNode(i+1));

    // Name
    const name = document.getElementById(array[i].key + "_" + "name-box");
    const nameInput = document.getElementById("input-name").cloneNode(true);
    const nameWarning = document.createElement('p');
    nameInput.setAttribute("id",array[i].key + "_name");
    nameWarning.setAttribute("id",array[i].key + "_name-warning");
    nameWarning.setAttribute("class","warning-text");
    nameInput.setAttribute("disabled","");
    name.appendChild(nameInput);
    name.appendChild(nameWarning);
    nameInput.value = array[i].name;

    // Category
    const category = document.getElementById(array[i].key + "_" + "category-box");
    const categoryInput = document.getElementById("input-category").cloneNode(true);
    const categoryWarning = document.createElement('p');
    category.appendChild(categoryInput);
    category.appendChild(categoryWarning);
    categoryInput.setAttribute("id",array[i].key + "_" + "category");
    categoryWarning.setAttribute("id",array[i].key + "_" + "category-warning");
    categoryWarning.setAttribute("class","warning-text");
    categoryInput.setAttribute("disabled","");
    for (z = 0; z < 4; z++) {
      if (categoryInput.options[z].value === array[i].category) {
        categoryInput.options[z].setAttribute("selected","");
      }
    }

    // Image
    const image = document.getElementById(array[i].key + "_" + "image");
    const imageInput = document.getElementById("input-image").cloneNode(true);
    const imageWarning = document.createElement('p');
    image.appendChild(imageInput);
    imageInput.setAttribute("id",array[i].key + "_image-input");
    imageInput.style.display = "none";
    const imageURL = document.createElement("img");
    image.appendChild(imageURL);
    imageURL.setAttribute("src",array[i].image);
    imageURL.setAttribute("id",array[i].key + "_image-preview");
    imageURL.setAttribute("class","input__image--preview")
    imageInput.setAttribute("onclick","changeImageEdit(id)");
    image.appendChild(imageWarning);
    imageWarning.setAttribute("id",array[i].key + "_image-warning");
    imageWarning.setAttribute("class","warning-text");

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
    setBTN(["btn btn__edit","btn btn__delete","btn btn__save","btn btn__cancel"],["edit","delete","save","cancel"],["editItems(id)","deleteTable(id)","saveItems(id,event)","cancelItems(id)"])
    // Hide Button
    document.getElementById(array[i].key + "_save").style.display = "none";
    document.getElementById(array[i].key + "_cancel").style.display = "none";
  }
}

// Save Items Button
const saveItems = function(btnId,event) {
  const id = btnId.split('_');
  const nameId = id[0] + "_name";
  const categoryId = id[0] + "_category";
  const imageId = id[0] + "_image-input";
  const name = document.getElementById(nameId);
  const category = document.getElementById(categoryId);
  const imageSrc = document.getElementById(id[0] + "_image-preview");
  // Validate name
  if (name.value === "") {
    document.getElementById(id[0] + "_name-warning").innerHTML = "*Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById(id[0] + "_name-warning").innerHTML = "";
  }
  // Validate Category
  if (category.value === "") {
    document.getElementById(id[0] + "_category-warning").innerHTML = "*Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById(id[0] + "_category-warning").innerHTML = "";
  }
  if (imageSrc.src == "") {
    document.getElementById(id[0] + "_image-warning").innerHTML = "*Không hợp lệ";
    event.preventDefault();
  }
  if ((name.validity.valid) && (category.validity.valid) && (imageSrc.src != "")) {
    data.forEach(ele => {
      if (ele.key == id[0]) {
        ele.name = name.value;
        ele.category = category.value;
        ele.image = imageSrc.src;
      }
    });
    localStorage.setItem("data",JSON.stringify(data));
    name.setAttribute("disabled","");
    category.setAttribute("disabled","");
    document.getElementById(id[0] + "_save").style.display = "none";
    document.getElementById(id[0] + "_cancel").style.display = "none";
    document.getElementById(id[0] + "_image-input").style.display = "none";
    document.getElementById(id[0] + "_edit").style.display = "inline";
    document.getElementById(id[0] + "_delete").style.display = "inline";
  }
}

// Edit Items Button
const editItems = function(btnId) {
  const id = btnId.split('_');
  const nameId = id[0] + "_name";
  const categoryId = id[0] + "_category";
  document.getElementById(nameId).removeAttribute("disabled");
  document.getElementById(categoryId).removeAttribute("disabled");
  document.getElementById(id[0] + "_save").style.display = "inline";
  document.getElementById(id[0] + "_cancel").style.display = "inline";
  document.getElementById(id[0] + "_image-input").style.display = "inline";
  document.getElementById(id[0] + "_edit").style.display = "none";
  document.getElementById(id[0] + "_delete").style.display = "none";
}

// Cancel Items Button
const cancelItems = function(btnId) {
  const id = btnId.split('_');
  data.forEach(ele => {
    if (ele.key == id[0]) {
      const name = document.getElementById(ele.key + "_" + "name");
      name.value = ele.name;
      name.setAttribute("disabled","");

      const category = document.getElementById(ele.key + "_" + "category");
      category.value = ele.category;
      category.setAttribute("disabled","");
      for (z = 0; z < 4; z++) {
        if (category.options[z].value === ele.category) {
          category.options[z].setAttribute("selected","");
        }
      }
      const image = document.getElementById(ele.key + "_image-preview")
      image.src = ele.image;
    }
  })
  document.getElementById(id[0] + "_save").style.display = "none";
  document.getElementById(id[0] + "_cancel").style.display = "none";
  document.getElementById(id[0] + "_image-input").style.display = "none";
  document.getElementById(id[0] + "_edit").style.display = "inline";
  document.getElementById(id[0] + "_delete").style.display = "inline";
}

// Delete Items Button
const deleteTable = function(btnId) {
  const id = btnId.split('_');
  for(i = 0; i < data.length; i++) {
    if (id[0] == data[i].key) {
      data.splice(i,1);
      localStorage.setItem("data",JSON.stringify(data));
    }
  }
  let deleteElement = document.getElementsByClassName("output__content");
  if (data.length >= 1) {
    while (deleteElement[0]) {
    deleteElement[0].parentNode.removeChild(deleteElement[0]);
    }
    addElement(data);
  }
  else {
    while (deleteElement[0]) {
      deleteElement[0].parentNode.removeChild(deleteElement[0]);
    }
  }
};

// Preview Image - EDIT MODE
const changeImageEdit = function (btnId) {
  const id = btnId.split('_');
  const editPreview = document.getElementById(id[0] + "_image-input");
  const editDisplay = document.getElementById(id[0] + "_image-preview");
  editPreview.addEventListener("change", function () {
      let inputFile = this.files[0];
      if (inputFile.type.indexOf('image') < 0) {
        return;
      }
      const whyFileReader = new FileReader();
      whyFileReader.onload = function() {
        editDisplay.src = whyFileReader.result;
      }
      whyFileReader.readAsDataURL(inputFile);
    }
  );
}

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
    }
    whyFileReader.readAsDataURL(inputFile);
  }
);

// Lock Category
const selectedValue = function update() {
  let select = document.getElementById("input-category");
  for (i = 0; i < 4; i++) {
    select.options[i].removeAttribute("selected");
  }
  select.options[select.selectedIndex].setAttribute("selected","");
}

// Validate & Create Table
const submit = function inputValue(event) {
  const itemName = document.getElementById("input-name");
  const itemCategory = document.getElementById("input-category");
  const itemImage = document.getElementById("input-image");
  // Validate name
  if (itemName.value === "") {
    document.getElementById("input__item-name__warning").innerHTML = "*Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__item-name__warning").innerHTML = "";
  }
  // Validate Category
  if (itemCategory.value === "") {
    document.getElementById("input__item-category__warning").innerHTML = "*Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__item-category__warning").innerHTML = "";
  }
  // Validate Image
  if (itemImage.value === "") {
    document.getElementById("input__image__warning").innerHTML = "*Không hợp lệ";
    event.preventDefault();
  }
  else {
    document.getElementById("input__item-category__warning").innerHTML = "";
  }
  if ((itemName.value !== "") && (itemCategory !== "") && (itemImage.value !== "")) {
    const input = {
      key: Math.random(),
      name: itemName.value,
      category: itemCategory.value,
      image: displayPreview.src,
    }
    data.push(input);
    localStorage.setItem("data",JSON.stringify(data));
    if (data.length >= 1) {
      let deleteElement = document.getElementsByClassName("output__content");
      while (deleteElement[0]) {
      deleteElement[0].parentNode.removeChild(deleteElement[0]);
      }
      addElement(data);
    }
    else {
      addElement(data);
    }
  }
}

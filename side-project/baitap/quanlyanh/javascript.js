// Validity

const validityCheck = function validityCheck() {
    let name = document.getElementById("name");
    let category = document.getElementById("category");
    if (typeof name.substr(0,1) == "number") {
        document.getElementById("warning-name").innerHTML = "*Tên không hợp lệ";
    }
    
}
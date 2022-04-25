
function changeText(element) {
    console.log(element);
    if
    (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}


function likesalert(element){
    alert("Ninja was liked!");
}


function removeElement(element){
    element.remove();
}
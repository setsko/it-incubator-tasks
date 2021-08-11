

let search = document.getElementById("search");
let butt = document.getElementById("butt");

butt.addEventListener("click", () => {
    if ( search.value === "google") {
        setTimeout(() => {
            alert('Yandex круче. Но это не точно');
        }, 3000);;
}
})

function alertWithTimer() {
    
}
var elements = document.querySelectorAll(".element");
elements.forEach((element) => {
    element.addEventListener('click', myFunction, false);
    var eleNum = element.className.split(' ')[1];
    var imgUrl = "https://source.unsplash.com/random/100x100?sig=" + eleNum;
    var imgTag = `<img src="${imgUrl}" alt="" > <input type="checkbox" class="checkbox" />`
    element.innerHTML = imgTag;
})

function generate() {
    window.location.reload();
}

function myFunction(e) {
    const t = e.target.closest("div").querySelector(".checkbox");
    t.click();
}
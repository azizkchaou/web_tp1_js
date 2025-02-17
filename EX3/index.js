nom = document.getElementById("nom")
content = document.getElementById("content")
button = document.getElementById("button")
button.addEventListener("click", function (e) {
    const dive = document.createElement("div");
    document.body.appendChild(dive);
    const result = document.createElement("input");
    dive.appendChild(result);
    dive.style.textAlign = "left";
    result.value = nom.value + " : " + content.value + "  🗑";
    result.addEventListener("click", function (e) {
        result.remove();
    })

})
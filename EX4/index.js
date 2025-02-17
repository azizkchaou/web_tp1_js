function Generer_Aleatoirement_Couleur() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return [red, green, blue];
}
const li1 = document.getElementById("liste1");
const li2 = document.getElementById("liste2");
const li3 = document.getElementById("liste3");
const li4 = document.getElementById("liste4");
const li5 = document.getElementById("liste5");

li1.addEventListener("click", function (e) {
    let red, green, blue;
    [red, green, blue] = Generer_Aleatoirement_Couleur();
    li1.style.color = `rgb(${red},${green}, ${blue})`;

})
li2.addEventListener("click", function (e) {
    let red, green, blue;
    [red, green, blue] = Generer_Aleatoirement_Couleur();
    li2.style.color = `rgb(${red},${green}, ${blue})`;
})
li3.addEventListener("click", function (e) {
    let red, green, blue;
    [red, green, blue] = Generer_Aleatoirement_Couleur();
    li3.style.color = `rgb(${red},${green}, ${blue})`;
})
li4.addEventListener("click", function (e) {
    let red, green, blue;
    [red, green, blue] = Generer_Aleatoirement_Couleur();
    li4.style.color = `rgb(${red},${green}, ${blue})`;

})
li5.addEventListener("click", function (e) {
    let red, green, blue;
    [red, green, blue] = Generer_Aleatoirement_Couleur();
    li5.style.color = `rgb(${red},${green}, ${blue})`;

})
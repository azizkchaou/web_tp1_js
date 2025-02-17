
function changestyle(){
    let setcolor =document.getElementById("colorID").value
    console.log(setcolor);
    
    let size =(Math.abs(Number(document.getElementById("numberID").value))).toString();
    size +="px";
    console.log(size)
    let font=document.getElementById("fontID").value
    console.log(font)
    const paragraphe=document.getElementById("myParagraphe");
    //paragraphe.setAttribute("style", `color: ${setcolor}; font-size: ${size};`);
    paragraphe.style.color=setcolor;
    paragraphe.style.fontSize=size;
    paragraphe.style.fontFamily=font;
}

document.getElementById("colorID").addEventListener("input", changestyle);
document.getElementById("numberID").addEventListener("input", changestyle);
document.getElementById("fontID").addEventListener("input", changestyle);
const top_left = document.getElementById("top-left");
const top_right = document.getElementById("top-right");
const bottom_left = document.getElementById("bottom-left");
const bottom_right = document.getElementById("bottom-right");
const width = document.getElementById("width");
const height = document.getElementById("height");
const code = document.getElementById("code");
const blob = document.querySelector(".blob");
const copy = document.querySelector(".copy");

var codeText = `border-radius: ${top_left.value}% ${top_right.value}% ${bottom_left.value}% ${bottom_right.value}% ;`;
code.innerText = codeText

function handleChangeRadius(top_left, top_right, bottom_left, bottom_right) {
    codeText = `border-radius: ${top_left}% ${top_right}% ${bottom_left}% ${bottom_right}% ;`;
    code.innerText = codeText
}


width.value='550';
height.value='550';
width.parentNode.setAttribute("data-attr", width.value)
height.parentNode.setAttribute("data-attr", height.value)

width.oninput = () => {
blob.style.width = `${width.value}px`;
width.parentNode.setAttribute("data-attr", width.value)
}
height.oninput = () => {
    blob.style.height = `${height.value}px`;
    height.parentNode.setAttribute("data-attr", height.value)
}

top_left.oninput = () => {
    blob.style.borderTopLeftRadius = `${top_left.value}%`
    top_left.parentNode.setAttribute("data-attr", top_left.value)
    handleChangeRadius(top_left.value, top_right.value, bottom_left.value, bottom_right.value)
}
top_right.oninput = () => {
    blob.style.borderTopRightRadius = `${top_right.value}%`
    top_right.parentNode.setAttribute("data-attr", top_right.value)
    handleChangeRadius(top_left.value, top_right.value, bottom_left.value, bottom_right.value)
}
bottom_left.oninput = () => {
    blob.style.borderBottomLeftRadius = `${bottom_left.value}%`
    bottom_left.parentNode.setAttribute("data-attr", bottom_left.value)
    handleChangeRadius(top_left.value, top_right.value, bottom_left.value, bottom_right.value)
}
bottom_right.oninput = () => {
    blob.style.borderBottomRightRadius = `${bottom_right.value}%`
    bottom_right.parentNode.setAttribute("data-attr", bottom_right.value)
    handleChangeRadius(top_left.value, top_right.value, bottom_left.value, bottom_right.value)
}

copy.addEventListener("click", function () {
    copyCode();
})

function copyCode() {
    str = code.innerHTML;
    const element = document.createElement('textarea');
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    alert('Code Copied !');
};

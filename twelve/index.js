const pressed = [];
const secretCode = "wesbos";
window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    console.log("e.key");
    console.log(pressed);
    pressed.splice(-secretCode.length - 1, pressed.lenghth - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log("ding ding");
        cornify_add();

    }
});



let display = document.querySelector(".display");
let displaySpan = document.querySelector(".display span");
let text = "";
let mainColor1 = "rgb(58, 71, 100)";
let secColor1 = "rgb(24, 32, 52)";
let mainColor2 = "rgb(230, 230, 230)";
let secColor2 = "rgb(237, 237, 237)";
let customColor2 = "rgb(209, 204, 204)"
let mainColor3 = "rgb(22, 6, 40)";
let customColor3 = "rgb(255, 229, 62)";
let keyBack3 = "rgb(29, 9, 52)";
let keyBack32 = "rgb(52, 28, 79)";
let keyShadow3 = "rgb(188, 21, 244)";
let toggleBack3 = "rgb(0,224,209)";
let toggleShadow3 = "rgb(108, 249, 242)";
let customButton3 = "rgb(88, 7, 125)";

document.addEventListener("click", e => {
    if (e.target.classList.contains("key")) {
        if (text === "0") {
            text = "";
        }
        if (e.target.innerText !== "=") {
            if (e.target.innerText === "×") {
                text += " " + "*" + " ";
            }
            else if (e.target.innerText === "/") {
                text += " " + "/" + " ";
            }
            else if (e.target.innerText === "+") {
                text += " " + "+" + " ";
            }
            else if (e.target.innerText === "-") {
                text += " " + "-" + " ";
            }
            else if (e.target.innerText === "DEL") {
                text = text.toString().replace(/ /g, "");
                let arr = text.toString().split("");
                arr.pop();
                newA = arr.join("");
                text = newA;
                if (text === "") {
                    text = "0";
                }
            }
            else if (e.target.innerText === "Reset") {
                text = "0";
            }
            else {
                text += e.target.innerText;
            }
            displaySpan.innerHTML = text;
        }
        else {
            try {
                displaySpan.innerHTML = math.evaluate(text);
                text = displaySpan.innerHTML;
            }
            catch (e) {
                text = "Invalid Operation";
                displaySpan.innerHTML = text;
                text = "";
            }

        }
    }

});

let spans = document.querySelectorAll(".choice span");
let choice = document.querySelector(".choice");
let keys = document.querySelector(".keys");
let body = document.body;
let logo = document.querySelector(".header h3");
let themeText = document.querySelector(".theme p");
let numbers = document.querySelectorAll(".numbers span");
let ks = document.querySelectorAll(".keys .key");


spans.forEach(span => {
    span.onclick = function () {
        spans.forEach(s => {
            s.classList.remove("active");
        })
        span.classList.add("active");
        switch (span.dataset.theme) {
            case 'first':
                body.style.backgroundColor = mainColor1;
                choice.style.backgroundColor = secColor1;
                display.style.backgroundColor = secColor1;
                keys.style.backgroundColor = secColor1;
                displaySpan.style.color = "white";
                logo.style.color = "white";
                themeText.style.color = "white";
                span.style.backgroundColor = "rgb(195,73,60)";
                numbers.forEach(n => {
                    n.style.color = "white";
                });
                choice.style.backgroundColor = customColor2;
                ks.forEach((k, index) => {
                    k.style.backgroundColor = "rgb(229, 228, 225)";
                    k.style.boxShadow = `0 3px rgb(166,157,145)`;
                    if (index !== 3 && index !== 16 && index !== 17) {

                        k.style.color = "black";
                    }
                    else if (index === 17) {
                        k.style.backgroundColor = "rgb(208,63,47)";
                        k.style.boxShadow = `0 3px rgb(147,38,26)`;
                    }
                    else if (index === 16) {
                        k.style.backgroundColor = "rgb(99, 112, 151)";
                        k.style.boxShadow = `0 3px rgb(102,119,169)`;
                    }
                    else {
                        k.style.backgroundColor = "rgb(99, 112, 151)";
                        k.style.boxShadow = `0 3px rgb(102,119,169)`;
                    }
                });
                break;
            case 'second':
                body.style.backgroundColor = mainColor2;
                choice.style.backgroundColor = customColor2;
                display.style.backgroundColor = secColor2;
                keys.style.backgroundColor = customColor2;
                displaySpan.style.color = "black";
                logo.style.color = "black";
                themeText.style.color = "black";
                span.style.backgroundColor = "rgb(202,85,2)";
                numbers.forEach(n => {
                    n.style.color = "black";
                });
                ks.forEach((k, index) => {
                    k.style.backgroundColor = "rgb(229, 228, 225)";
                    k.style.boxShadow = `0 3px rgb(166,157,145)`;
                    if (index !== 3 && index !== 16 && index !== 17) {
                        k.style.color = "black";
                    }
                    else if (index === 17) {
                        k.style.backgroundColor = "rgb(202,85,2)";
                        k.style.boxShadow = `0 3px rgb(137,57,1)`;
                    }
                    else if (index === 16) {
                        k.style.backgroundColor = "rgb(97, 182, 189)";
                        k.style.boxShadow = `0 3px rgb(27,95,101)`;
                    }
                    else {
                        k.style.backgroundColor = "rgb(97, 182, 189)";
                        k.style.boxShadow = `0 3px rgb(27,95,101)`;
                    }
                });
                break;
            case 'third':
                body.style.backgroundColor = mainColor3;
                display.style.backgroundColor = keyBack32;
                keys.style.backgroundColor = keyBack3;
                choice.style.backgroundColor = keyBack3;
                logo.style.color = customColor3;
                themeText.style.color = customColor3;
                span.style.backgroundColor = "rgb(0,224,209)";
                numbers.forEach(n => {
                    n.style.color = customColor3;
                });
                displaySpan.style.color = customColor3;
                ks.forEach((k, index) => {
                    k.style.backgroundColor = keyBack32;
                    k.style.boxShadow = `0 3px ${keyShadow3}`;
                    if (index !== 3 && index !== 16 && index !== 17) {
                        k.style.color = customColor3;
                    }
                    else if (index === 17) {
                        k.style.backgroundColor = toggleBack3;
                        k.style.boxShadow = `0 3px ${toggleShadow3}`;
                    }
                    else if (index === 16) {
                        k.style.backgroundColor = customButton3;
                    }
                    else {
                        k.style.backgroundColor = customButton3;
                    }
                });
                break;

        }
    }
});


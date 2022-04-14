let answer = document.getElementById("answer");
let inputs = document.querySelectorAll(".buttons input")

let screenvalue = "";

inputs.forEach(inp => {
    inp.addEventListener("click", (e) => {
        text = e.target.value;
        // console.log(text)
        if (text == "AC") {
            screenvalue = '';
            answer.value = screenvalue;
        }
        else if (text == "=") {
            answer.value = eval(screenvalue);
        }
        else if (text == "DEL") {
            answer.value = answer.value.substr(0, answer.value.length - 1);
        }
        else {
            screenvalue += text;
            answer.value = screenvalue;
        }
    });
    // inp.addEventListener("mouseover", () => {
    //     console.log("hello")
    // })
});
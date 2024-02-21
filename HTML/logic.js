console.log("jo");

const bgChanger = document.getElementById("changebg");
const gendu = document.getElementsByClassName("box");

function bgChange() {
    console.log("working");
    console.log(gendu)
    bgChanger.addEventListener("click", () => {
            gendu[0].style.backgroundColor = "blue";
        console.log("hihihih");
    });
}

bgChange();

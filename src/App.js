const dragBtns = document.querySelectorAll(".btnDrag");

console.log(dragBtns)

dragBtns.forEach((dragBtn) => {
    const drag = (e) => {
        console.log(e)
        dragBtn.style.top = e.pageY + "px";
        dragBtn.style.left = e.pageX + "px";
    };
    dragBtn.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", drag);
    });

    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", drag);
    });
});

// get reset button
const resetButton = document.getElementById("reset")
resetButton.addEventListener('click', () => {
    console.log('reset me')
    // const buttonBlack = document.getElementById("black")
    // buttonBlack.style.top = "20%";
    // buttonBlack.style.left = "50%";

    dragBtns.forEach((dragBtn) => {
        switch (dragBtn.id) {
            case 'black':
                dragBtn.style.top = "90%";
                dragBtn.style.left = "70%";
                break
            case 'black1':
                dragBtn.style.top = "90%";
                dragBtn.style.left = "62%";
                break
            case 'blue':
                dragBtn.style.top = "90%";
                dragBtn.style.left = "35%";
                break
            case 'green':
                dragBtn.style.top = "90%";
                dragBtn.style.left = "53%";
                break
            case 'red':
                dragBtn.style.top = "90%";
                dragBtn.style.left = "45%";
                break
        }
    });
});
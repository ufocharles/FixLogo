const dragBtns = document.querySelectorAll(".btnDrag");

const dotCoord = {
    blue: {
        x: 358,
        y: 269,
        upperX: 378,
        lowerX: 338,
        uppery: 289,
        lowery: 249
    },
    red: {
        x: 538,
        y: 293,
        upperX: 558,
        lowerX: 518,
        uppery: 313,
        lowery: 273
    },
    green: {
        x: 224,
        y: 554,
        upperX: 244,
        lowerX: 204,
        uppery: 574,
        lowery: 534
    },
    black: {
        x: 129,
        y: 412,
        upperX: 149,
        lowerX: 109,
        uppery: 434,
        lowery: 392
    },
    black1: {
        x: 501,
        y: 509,
        upperX: 521,
        lowerX: 481,
        uppery: 529,
        lowery: 489
    }
}
console.log(dragBtns)

dragBtns.forEach((dragBtn) => {
    const drag = (e) => {
        console.log(e)
        switch (dragBtn.id) {
            case "black":
                if ((e.pageX >= dotCoord.black.lowerX && e.pageX <= dotCoord.black.upperX) && (e.pageY >= dotCoord.black.lowery && e.pageY <= dotCoord.black.uppery)) {
                    console.log('im here 1')
                    dragBtn.style.top = dotCoord.black.y + "px";
                    dragBtn.style.left = dotCoord.black.x + "px";
                } else if ((e.pageX >= dotCoord.black1.lowerX && e.pageX <= dotCoord.black1.upperX) && (e.pageY <= dotCoord.black1.lowery && e.pageY <= dotCoord.black1.uppery)) {
                    console.log('im here 2')
                    dragBtn.style.top = dotCoord.black1.y + "px";
                    dragBtn.style.left = dotCoord.black1.x + "px";
                } else {
                    console.log('im here 3')
                    dragBtn.style.top = "90%";
                    dragBtn.style.left = "90%";
                }
                break;
            case "black1":
                if ((e.pageX >= dotCoord.black.lowerX && e.pageX <= dotCoord.black.upperX) && (e.pageY >= dotCoord.black.lowery && e.pageY <= dotCoord.black.uppery)) {
                    console.log('im here 1')
                    dragBtn.style.top = dotCoord.black.y + "px";
                    dragBtn.style.left = dotCoord.black.x + "px";
                } else if ((e.pageX >= dotCoord.black1.lowerX && e.pageX <= dotCoord.black1.upperX) && (e.pageY <= dotCoord.black1.lowery && e.pageY <= dotCoord.black1.uppery)) {
                    console.log('im here 2')
                    dragBtn.style.top = dotCoord.black1.y + "px";
                    dragBtn.style.left = dotCoord.black1.x + "px";
                } else {
                    console.log('im here 3')
                    dragBtn.style.top = "90%";
                    dragBtn.style.left = "73%";
                }
                break
            default:
                break;
        }
        dragBtn.style.top = e.pageY + "px";
        dragBtn.style.left = e.pageX + "px";
    };

    dragBtn.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", drag);
    });

    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", drag)
    });
});

function mouseRelease(e, dragBtn) {
    console.log(e)
    dragBtn.style.top = e.pageY + "px";
    dragBtn.style.left = e.pageX + "px";
}

// get reset button
const resetButton = document.getElementById("reset")
resetButton.addEventListener('click', () => {
    console.log('reset me')
    location.reload()
    // dragBtns.forEach((dragBtn) => {
    //     switch (dragBtn.id) {
    //         case 'black':
    //             dragBtn.style.top = "90%";
    //             dragBtn.style.left = "90%";
    //             break
    //         case 'black1':
    //             dragBtn.style.top = "90%";
    //             dragBtn.style.left = "73%";
    //             break
    //         case 'blue':
    //             dragBtn.style.top = "90%";
    //             dragBtn.style.left = "15%";
    //             break
    //         case 'green':
    //             dragBtn.style.top = "90%";
    //             dragBtn.style.left = "55%";
    //             break
    //         case 'red':
    //             dragBtn.style.top = "90%";
    //             dragBtn.style.left = "35%";
    //             break
    //         default:
    //             break;
    //     }
    // });
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log({ ev })
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    console.log({ ev })
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    switch (data) {
        case 'black':
            if (ev.target.id === 'blackDiv') {
                ev.target.appendChild(document.getElementById(data));
            } else {
                null
            }
            break
        case 'black1':
            if (ev.target.id === 'black1Div') {
                ev.target.appendChild(document.getElementById(data));
            } else {
                null
            }
            break
        case 'blue':
            if (ev.target.id === 'blueDiv') {
                ev.target.appendChild(document.getElementById(data));
            } else {
                null
            }
            break
        case 'green':
            if (ev.target.id === 'greenDiv') {
                ev.target.appendChild(document.getElementById(data));
            } else {
                null
            }
            break
        case 'red':
            if (ev.target.id === 'redDiv') {
                ev.target.appendChild(document.getElementById(data));
            } else {
                null
            }
            break
        default:
            break;
    }
}
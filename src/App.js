
let dotCoord = []

// get reset button
const resetButton = document.getElementById("reset")
resetButton.addEventListener('click', () => {
    location.reload()
});

function allowDrop(ev) {
    ev.preventDefault();
}

// drag the dot
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// drop the dot in a div and check if its the right div
function drop(ev) {
    console.log({ ev })
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    switch (data) {
        case 'black':
            // check if black exist already in the 2 black divs
            const black1Exist = checkDotExist('black1')
            console.log({ black1Exist })
            if (!black1Exist) {
                if (ev.target.id === 'blackDiv' || ev.target.id === 'black1Div') {
                    ev.target.appendChild(document.getElementById(data));
                    dotCoord.push({
                        dotName: 'black',
                        dotDiv: ev.target.id
                    })
                    completeLogo()
                }
            } else {
                // figure out the other black spot available
                const currentBlack1 = dotCoord.find(dot => { return dot.dotName === 'black1' })
                if (currentBlack1.dotDiv === 'black1Div') {
                    if (ev.target.id === 'blackDiv') {
                        ev.target.appendChild(document.getElementById(data));
                        dotCoord.push({
                            dotName: 'black',
                            dotDiv: ev.target.id
                        })
                        completeLogo()
                    }
                } else {
                    if (ev.target.id === 'black1Div') {
                        ev.target.appendChild(document.getElementById(data));
                        dotCoord.push({
                            dotName: 'black',
                            dotDiv: ev.target.id
                        })
                        completeLogo()
                    }
                }
            }
            break
        case 'black1':
            // check if black exist already in the 2 black divs
            const blackExist = checkDotExist('black')
            if (!blackExist) {
                if (ev.target.id === 'blackDiv' || ev.target.id === 'black1Div') {
                    ev.target.appendChild(document.getElementById(data));
                    dotCoord.push({
                        dotName: 'black1',
                        dotDiv: ev.target.id
                    })
                    completeLogo()
                }
            } else {
                // figure out the other black spot available
                const currentBlack = dotCoord.find(dot => { return dot.dotName === 'black' })
                if (currentBlack.dotDiv === 'black1Div') {
                    if (ev.target.id === 'blackDiv') {
                        ev.target.appendChild(document.getElementById(data));
                        dotCoord.push({
                            dotName: 'black',
                            dotDiv: ev.target.id
                        })
                        completeLogo()
                    }
                } else {
                    if (ev.target.id === 'black1Div') {
                        ev.target.appendChild(document.getElementById(data));
                        dotCoord.push({
                            dotName: 'black',
                            dotDiv: ev.target.id
                        })
                    }
                }
            }
            break
        case 'blue':
            if (ev.target.id === 'blueDiv') {
                ev.target.appendChild(document.getElementById(data));
                dotCoord.push({
                    dotName: 'blue',
                    dotDiv: ev.target.id
                })
                completeLogo()
            }
            break
        case 'green':
            if (ev.target.id === 'greenDiv') {
                ev.target.appendChild(document.getElementById(data));
                dotCoord.push({
                    dotName: 'green',
                    dotDiv: ev.target.id
                })
            }
            break
        case 'red':
            if (ev.target.id === 'redDiv') {
                ev.target.appendChild(document.getElementById(data));
                dotCoord.push({
                    dotName: 'red',
                    dotDiv: ev.target.id
                })
                completeLogo()
            }
            break
        default:
            break;
    }
}


function checkDotExist(color) {
    if (dotCoord.find(dot => { return dot.dotName === color })) {
        return true
    } else {
        return false
    }
}

// check all dots are placed correctly before congrats
function completeLogo() {
    if (dotCoord.length === 5) {
        const congratDiv = document.getElementById('dotComplete')
        congratDiv.style.display = "block"
        confetti.start()

        setTimeout(() => {
            confetti.stop()
        }, 5000)
    }
}
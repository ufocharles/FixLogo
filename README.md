# FixLogo
 fix Inspiring Apps logo

Plan 1
- set the position of each dot absolute
- use the mouse move event to drag the dots anywhere on the screen and record the location it was dropped using the pageX and pageY location of the mouseup event.
- keep a coordinate location for the right location for each dot 
- check for approximate coordinates of dropped dot to verify if it matches the supposed location, if not reject that dot.

Problems
 - the location of the dot changes for every screen size
 - so storing a supposed location is not practical

Plan 2
- add draggable and ondragstart property to the dots
- add divs with absolute position corresponding to each supposed location for each dot.
- add ondrag and ondragover property to the divs
- use the div ids to know what dot is dragged onto it and accept or reject the dot.

Problems
- location is still a problem here also especially when its centered due to use of absolute position for the divs.
- the black dots should be interchangeable
- how to know when all dots were completed

Solution to plan 2
- make the page 600px which is the size of the logo, this helped the absolute positioning of the divs on the logo
- after restricying the black dots to their 2 positions, i still had to keep track of which black has taken what position to allow the other black take the other position.
- used an array to store successful drop and check if i have all 5 dots dropped at every drop.

Resources
 drag and drop using mouse event from https://www.youtube.com/watch?v=AtLFLSG8YXw

 Button style sourced from https://getcssscan.com/css-buttons-examples

 confetti was sourced from https://www.youtube.com/watch?v=quSR_ZrVz6Y
 
 drag and drop examples from https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop
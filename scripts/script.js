console.log("javascript werkt")

let openButton = document.querySelector("ul button");

openButton.onclick = openMenu;

function openMenu() {  
    // zoek de nav op
    let deNav = document.querySelector("nav:nth-of-type(2)");
    // voeg class toe aan nav
    deNav.classList.add("toonMenu");
    console.log("button werkt")
  }
  

  let sluitButton = document.querySelector("nav:nth-of-type(2) button");

  sluitButton.onclick = sluitMenu;

  function sluitMenu() {
    let deNav = document.querySelector("nav:nth-of-type(2)");
    deNav.classList.remove("toonMenu");
  }
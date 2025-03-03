//Select the section with an id of container without using querySelector.
const contain1  = document.getElementById('container');


// Select the section with an id of container using querySelector.
const contain2  = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const seconds   = document.querySelectorAll('.second');


// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdInOL = document.querySelector('ol.third');


// Give the section with an id of container the text “Hello!”.
function setHello(){
    const contain1  = document.getElementById('container');
    contain1.innerText  = "Hello!";
}


// Add the class main to the div with a class of footer.
function addMain(){
    const footer    = document.querySelector('div.footer');
    footer.classList.add('main');
}

// Remove the class main on the div with a class of footer.
function removeMain(){
    const footer    = document.querySelector('div.footer');
    footer.classList.remove('main');
}

function addFour(){
    // Create a new li element.
    const newLi    = document.createElement('li');
    
    // Give the li the text “four”.
    newLi.innerText = "four";
    
    // Append the li to the ul element.
    const ulELement = document.querySelector('ul');
    ulELement.append(newLi);
}

function changeColor(){
    // Loop over all of the lis inside the ol tag and give them a background color of “green”.
    const olELement = document.querySelector('ol');
    const liList    = olELement.querySelectorAll('li');
    liList.forEach((item)=>{
        item.style.backgroundColor  = 'green';
    })
}

// Remove the div with a class of footer
function removeFooter(){
    const footer    = document.querySelector('div.footer');
    footer.remove();
}




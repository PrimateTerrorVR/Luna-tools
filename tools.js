// Create and style the draggable menu
const menu = document.createElement('div');
menu.id = 'lunaToolsMenu';
menu.style.position = 'fixed';
menu.style.top = '10px';
menu.style.left = '10px';
menu.style.backgroundColor = '#333';
menu.style.color = '#fff';
menu.style.padding = '10px';
menu.style.borderRadius = '8px';
menu.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
menu.style.cursor = 'move';
menu.innerHTML = '<h3>Luna Tools</h3><button id="rainbowifyBtn">Rainbowify Buttons</button>';
document.body.appendChild(menu);

// Make the menu draggable
menu.onmousedown = function (event) {
    let shiftX = event.clientX - menu.getBoundingClientRect().left;
    let shiftY = event.clientY - menu.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        menu.style.left = pageX - shiftX + 'px';
        menu.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    menu.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        menu.onmouseup = null;
    };
};

// Prevent default drag behavior
menu.ondragstart = function () {
    return false;
};

// Function to apply rainbow gradient to all buttons
function applyRainbowEffect() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundImage = 'linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)';
        button.style.backgroundSize = '400% 400%';
        button.style.animation = 'rainbow 3s ease infinite';
        button.style.color = '#fff';
    });

    // CSS for the rainbow animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rainbow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
        }
    `;
    document.head.appendChild(style);
}

// Add event listener to the button
document.getElementById('rainbowifyBtn').addEventListener('click', applyRainbowEffect);

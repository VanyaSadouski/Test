let tabButtons = document.querySelectorAll('.nav_item');
let  tabPanels = document.querySelectorAll('.item_tab');

function showPanel(index){
    tabButtons.forEach(function (node) {
       node.style.opacity = 1;
    });
    tabPanels.forEach(function (node) {
        node.style.display = 'none'
    });
    tabPanels[index].style.display = 'block';
    tabButtons[index].style.opacity = 0.5;
}

showPanel(0);
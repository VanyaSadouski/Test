let d = document;
let items = d.querySelector('.items');
let itemCount = d.querySelectorAll('.item').length;
let pos = 0;
let transform = Modernizr.prefixed('transform');

console.log(items);
function setTransform() {
        items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
    pos = Math.max(pos - 1, 0);
    setTransform();
}
function next() {
    pos = Math.min(pos + 1 , itemCount - 1);
    if (pos >= 3)
        pos = 0;

console.log(pos);
    setTransform();
}
window.addEventListener('resize', setTransform);


///////////

let f = document;
let itemss = f.querySelector('.itemz');
let itemCounts = f.querySelectorAll('.iten').length;
let poss = 0;
let transforms = Modernizr.prefixed('transform');

console.log(itemCounts);
function setTransforms() {
    itemss.style[transforms] = 'translate3d(' + (-poss * itemss.offsetWidth) + 'px,0,0)';
}

function prevs() {
    poss = Math.max(poss - 1, 0);
    setTransforms();
}
function nexts() {
    poss = Math.min(poss + 1 , itemCounts - 1);
    if (poss >= 3)
        poss = 0;

    console.log(poss);
    setTransforms();
}
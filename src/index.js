export const paintCards = () => {
    let elements = document.querySelectorAll(".item:nth-child(odd)");
    for (let elem of elements) {
        elem.style.backgroundcolor = "red";
    }
};

export const findElement = () => {
    const elements = document.querySelectorAll('.item');
    let elem = document.querySelectorAll('item:first-child');
    for (let a = 0; a < elements.length; a++) {
        if (elem.matches('.lickedItem')) {
            elem.style.backgroundcolor = 'blue';
        }
        else {
            elem = elem.nextElementSibling;
        }
    }
};

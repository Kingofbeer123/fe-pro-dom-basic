export const paintCards = () => {
    const elements = document.querySelectorAll(".item:nth-child(odd)");
    for (let elem of elements) {
        elem.style.backgroundcolor = "red";
    }
};

export const findElement = () => {
    let items = document.querySelectorAll('.item');
    let elem = document.querySelectorAll('item:first-child');
    for (let a = 0; a < items.length; a++) {
        if (elem.matches('.lickedItem')) {
            elem.style.backgroundcolor = 'blue';
        }
        else {
            elem = elem.nextElementSibling;
        }
    }
};

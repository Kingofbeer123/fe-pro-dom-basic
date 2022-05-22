export const paintCards = () => {
    const lis = document.querySelectorAll('.item:nth-child(odd)');
    for (let li of lis) {
      li.style.backgroundColor = 'red';
    }
};

export const findElement = () => {
    let elements = document.querySelectorAll('.item');
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

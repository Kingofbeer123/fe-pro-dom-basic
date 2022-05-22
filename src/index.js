export const paintCards = () => {
    let elements = document.querySelectorAll('ul > li:nth-child(odd)')
    for (let elem of elements) {
        elem.style.backgroundcolor = 'red'
    }
};

export const findElement = () => {};

export const paintCards = () => {
    const elements = document.querySelectorAll('.item:nth-child(odd)');
    for (let elem of elements) {
        elem.style.backgroundcolor = 'red';
    }
};

export const findElement = () => {};

document.addEventListener('DOMContentLoaded', () => {
    const big = document.getElementById('big');
    const babies = document.querySelectorAll('.baby');

    babies.forEach(baby => {
        baby.addEventListener('click', () => {
            const color = getComputedStyle(baby).backgroundColor;
            big.style.backgroundColor = color;
        });
    });
});

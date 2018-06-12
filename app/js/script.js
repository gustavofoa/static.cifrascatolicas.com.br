function showOptions() {
    const el = document.getElementById('js-showOptions');
    const btn = document.getElementById('js-btnOptions');
    toggleClass(el, 'open');
    toggleClass(btn, 'rotate');
};

function toggleClass(el, classe) {
    if (el.classList) {
        el.classList.toggle(classe);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(classe);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        el.className = classes.join(' ');
    }
}
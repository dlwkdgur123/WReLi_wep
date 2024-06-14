document.getElementById('menu').addEventListener('click', function() {
    const currentSrc = this.src;
    const newSrc = currentSrc.includes('img/memu.png') ? 'img/openmenu.png' : 'img/memu.png'
    this.src = newSrc;
})
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.trigger');
    const hiddenContent = document.querySelector('.hidden-content');

    trigger.addEventListener('click', () => {
        hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
    });
});

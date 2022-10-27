if(window.sessionStorage.getItem('popup_shown') === null) {
    window.sessionStorage.setItem('popup_shown', 'true');

    const backdrop = document.getElementById('backdrop');

    setTimeout(() => {
        backdrop.style.display = 'block';
    }, 2000);
}
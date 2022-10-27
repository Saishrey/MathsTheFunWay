// $(document).ready(() => {
//     if (window.sessionStorage.getItem('popup_shown') == null) {
//         window.sessionStorage.setItem('popup_shown', true);

//         setTimeout(() => {
//             $("#backdrop").css('display', 'block');
//         }, 5000);
    
//         $("#ok-btn").click(() => {
//             window.open("register.html", "_self");
//         });
    
//         $("#cancel-btn").click(() => {
//             $(".backdrop").fadeOut(300);
//         });
//     }
// });

// const backdrop = document.getElementById('backdrop');

// setTimeout(() => {
//     backdrop.style.display = 'block';

// }, 2000);


if(window.sessionStorage.getItem('popup_shown') === null) {
    window.sessionStorage.setItem('popup_shown', 'true');

    const backdrop = document.getElementById('backdrop');

    setTimeout(() => {
        backdrop.style.display = 'block';
    }, 2000);
}
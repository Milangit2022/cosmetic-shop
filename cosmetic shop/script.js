document.addEventListener('DOMContentLoaded', function () {

    //ナビゲーションメニューとハンバーガーメニューの取得
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');

    //ハンバーガーメニューがクリックされた時の処理
    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    //クリックした時にセクションにスクロール

    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            //クリックされたリンクから対象セクションのIDを取得する
            const targetId = this.getAttribute('href').substring(1);


            //お問い合わせセクションの場合はフッターを対象とする
            const targetElement = targetId === 'contact' ? document.querySelector('footer') : document.getElementById(targetId);


            //ターゲットセクションにスクロールする
            scrollToSection(targetElement, navLinks.offsetHeight);

            if (window.innerWidth <= 768) {
                navLinks.classList.remove('show');
            }
        });
    });

    //ターゲットセクションにスクロールするためのジェネリックな関数

    function scrollToSection(target, offset) {
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    }
});

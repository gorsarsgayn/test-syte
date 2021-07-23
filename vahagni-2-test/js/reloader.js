let body = document.querySelector('body');
body.onload = reloadSyte();

    function reloadSyte() {
        setTimeout(() => {
            let body_stop = document.querySelector('body');
        let preloader = document.querySelector('.wrap');
        if (!preloader.classList.contains('wrap_active')) {
            preloader.classList.add('wrap_active');
            body_stop.classList.remove('scroll-stop');
        }
        }, 1000);
    }

        

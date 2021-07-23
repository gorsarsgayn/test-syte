                                        let Sanahin_slider = document.querySelector('.Sanahin-slider'),
                                            Lori_slider = document.querySelector('.Lori-slider'),
                                            Haghpat_slider = document.querySelector('.Haghpat-slider'),
                                            Odzun_slider = document.querySelector('.Odzun-slider'),
                                            Horomayr_slider = document.querySelector('.Horomayr-slider'),
                                            Kobayr_slider = document.querySelector('.Kobayr-slider'),
                                            Hnevank_slider = document.querySelector('.Hnevank-slider'),
                                            Akhtala_slider = document.querySelector('.Akhtala-slider'),
                                            Kurtan_slider = document.querySelector('.Kurtan-slider'),
                                            Hovhanes_slider = document.querySelector('.Hovhanes-slider');

                                            // let Sanahin_info = document.querySelector('.info-Sanahin'),
                                            // Lori_Fortress_info = document.querySelector('.info-Lori-Fortress'),
                                            // Haghpat_info = document.querySelector('.info-Haghpat'),
                                            // Odzun_info = document.querySelector('.info-Odzun'),
                                            // Horomayr_info = document.querySelector('.info-Horomayr'),
                                            // Kobayr_info = document.querySelector('.info-Kobayr'),
                                            // Hnevank_info = document.querySelector('.info-Hnevank'),
                                            // Akhtala_info = document.querySelector('.info-Akhtala'),
                                            // Kurtan_info = document.querySelector('.info-Kurtan'),
                                            // Hovhannes_info = document.querySelector('.info-Hovhannes'),
                                            // about_info = document.querySelector('.about_info');

                                            // let Sanahin = document.querySelector('.Sanahin'),
                                            // Lori_Fortress = document.querySelector('.Lori'),
                                            // Haghpat = document.querySelector('.Haghpat'),
                                            // Odzun = document.querySelector('.Odzun'),
                                            // Horomayr = document.querySelector('.Horomayr'),
                                            // Kobayr = document.querySelector('.Kobayr'),
                                            // Hnevank = document.querySelector('.Hnevank'),
                                            // Akhtala = document.querySelector('.Akhtala'),
                                            // Kurtan = document.querySelector('.Kurtan'),
                                            // Hovhannes = document.querySelector('.Hovhannes');

                                            let next = document.querySelector('.next');
                                            let back = document.querySelector('.back');
                                            let count = 0;
                                            let slider_box = document.querySelectorAll('.slider_box');
                                            let sliderLine = document.querySelector('.slider_init');
                                            let sliderWidth = document.querySelector('.slider').offsetWidth;
                                            let width = sliderWidth / 2;
                                            let width_1200 = sliderWidth * 20 / 100;
                                            let width_two = sliderWidth;
                                            let next_back_one = slider_box.length / 2; 
                                            let next_back_two = slider_box.length / 5 * 4; 
                                            let next_back_three = slider_box.length - 1;

                                                    
                                            function windowSize() {
                                                console.log(window.innerWidth);
                                            }

                                            window.addEventListener('resize', function () {
                                                console.log(window.innerWidth);
                                            })

                                            function init() {
                                            if (window.innerWidth > 992) {
                                                sliderLine.style.width = width_1200 * slider_box.length + 'px';
                                                }

                                            else if (window.innerWidth < 992 && window.innerWidth > 768) {
                                                    slider_box.forEach(element => {
                                                    element.style.width = width + 'px'; 
                                                    });
                                                    sliderLine.style.width = width * slider_box.length + 'px';
                                                }

                                                else if (window.innerWidth <= 768) {
                                                    slider_box.forEach(element => {
                                                    element.style.width = width_two + 'px'; 
                                                    });
                                                    sliderLine.style.width = width_two * slider_box.length + 'px';
                                                }
                                            } 


                                            next.addEventListener('click', function () {
                                                count++;
                                                if (window.innerWidth > 992 && count > next_back_one) {
                                                    count = 0;
                                                }
                                                else if (window.innerWidth <= 992 && window.innerWidth > 768 && count > next_back_two) {
                                                    count = 0;
                                                }

                                                else if (window.innerWidth <= 768 && count > next_back_three) {
                                                    count = 0;
                                                }
                                                ScrollSlidder();
                                            })

                                            back.addEventListener('click', function () {
                                                count--;
                                                if(window.innerWidth > 992 && count < 0) {
                                                    count = next_back_one;
                                                }

                                                else if (window.innerWidth <= 992 && window.innerWidth > 768 && count < 0) {
                                                    count = next_back_two;
                                                }

                                                else if (window.innerWidth <= 768 && count < 0) {
                                                    count = next_back_three;
                                                }
                                                ScrollSlidder();
                                            })

                                            function ScrollSlidder () {
                                                if (window.innerWidth > 992) {
                                                    sliderLine.style.transform = 'translate( -' + count * width_1200 + 'px)';
                                                }
                                                
                                                else if (window.innerWidth <= 992 && window.innerWidth > 768) {
                                                    sliderLine.style.transform = 'translate( -' + count * width + 'px)';
                                                }    
                                                
                                                else if (window.innerWidth <= 768) {
                                                    sliderLine.style.transform = 'translate( -' + count * width_two + 'px)';
                                                }
                                            }

                                            // let loc = [
                                            //     Sanahin, 
                                            //     Lori_Fortress, 
                                            //     Haghpat, 
                                            //     Odzun, 
                                            //     Horomayr, 
                                            //     Kobayr, 
                                            //     Hnevank, 
                                            //     Akhtala, 
                                            //     Kurtan, 
                                            //     Hovhannes
                                            // ];
                                            // let locInfo = [
                                            //     Sanahin_info, 
                                            //     Lori_Fortress_info,
                                            //     Haghpat_info, 
                                            //     Odzun_info, 
                                            //     Horomayr_info, 
                                            //     Kobayr_info, 
                                            //     Hnevank_info, 
                                            //     Akhtala_info, 
                                            //     Kurtan_info, 
                                            //     Hovhannes_info
                                            // ];

                                            let locSlider = [
                                                Sanahin_slider, 
                                                Lori_slider, 
                                                Haghpat_slider, 
                                                Odzun_slider, 
                                                Horomayr_slider, 
                                                Kobayr_slider, 
                                                Hnevank_slider, 
                                                Akhtala_slider, 
                                                Kurtan_slider, 
                                                Hovhanes_slider
                                            ];

                                            let foto_all = document.querySelector('.all_content_for');

                                            function clickSlider(arr) {
                                                arr.forEach(element => {
                                                    element.addEventListener('click', function () {
                                                        foto_all.scrollIntoView({
                                                            behavior: 'smooth',
                                                            block: 'start'
                                                        })
                                                    })
                                                });
                                            }

                                            // function clickSlider(artwo, arthree) {
                                            //     for (let i = 0; i < arthree.length; i++) {
                                            //         arthree[i].addEventListener('click', function (){
                                            //             info_obekt.forEach(element => {
                                            //                 element.classList.remove('info-about-active');
                                            //             });
                                            //             console.log('click on slider element');
                                            //             about_info.classList.add('info-obekt-active');
                                            //             button_back.style.display = "block";
                                            //             artwo[i].classList.add('info-about-active');
                                            //             all_content_for.scrollIntoView ({
                                            //                 behavior: 'smooth',
                                            //                 block: 'start'
                                            //             });
                                                        
                                            //         })
                                            //     }
                                            // }

                                            // let button_back = document.querySelector('.back-info-about');
                                            // let info_obekt = document.querySelectorAll('.info-obekt');

                                            // button_back.addEventListener('click', function () {
                                            //     about_info.classList.remove('info-obekt-active');
                                            //     button_back.style.display = "none";
                                            //     info_obekt.forEach(element => {
                                            //         element.classList.remove('info-about-active');
                                            //     });
                                            // })

                                            let button_down_top = document.querySelector('.down_top');
                                                let all_content_for = document.querySelector('.all_content_for');
                                                button_down_top.addEventListener('click', function() {
                                                    let about_info = document.querySelector('.about_info');
                                                    about_info.classList.toggle('about_info_active');
                                                    if(!about_info.classList.contains('about_info_active')) {
                                                        all_content_for.scrollIntoView ({
                                                            block: 'center'
                                                        })
                                                    }
                                            })

                                            // function clikcLoc(ar, artwo) {
                                            //     for (let i = 0; i < ar.length; i++) {
                                            //         ar[i].addEventListener('click', function () {
                                            //             console.log('clickLoc is started');
                                            //             about_info.classList.add('info-obekt-active');
                                            //             button_back.style.display = "block";
                                            //             artwo[i].classList.add('info-about-active');
                                            //             all_content_for.scrollIntoView ({
                                            //                 behavior: 'smooth',
                                            //                 block: 'start'
                                            //             });
                                            //         });
                                            //     }
                                            // }

                        let aboutActive = document.querySelectorAll('.menu_link_3')
                        let locationActive = document.querySelectorAll('.menu_link_2');
                        let homeActive = document.querySelectorAll('.menu_link_1');
                        let learn_his = document.querySelector('.learn_his');
                        let learn_loc = document.querySelector('.learn_loc');
                        let learn_church = document.querySelector('.learn_church');
                        let learn_monument = document.querySelector('.learn_monument')

                            let LocationSection = document.querySelector('.section_three');
                            locationActive.forEach(e => {
                                e.addEventListener('click', () => {
                                    LocationSection.scrollIntoView({
                                        block: 'start',
                                        behavior: 'smooth'
                                    });
                                });
                            });

                            let  HomeSection = document.querySelector('.section_one');
                            homeActive.forEach(e => {
                                e.addEventListener('click', () => {
                                    HomeSection.scrollIntoView({
                                        block: 'start',
                                        behavior: 'smooth'
                                    });
                                });
                            });
                            let AboutSection = document.querySelector('.all_content_two');
                            aboutActive.forEach(e => {
                                e.addEventListener('click', () => {
                                    AboutSection.scrollIntoView({
                                        block: 'start',
                                        behavior: 'smooth'
                                    });
                                });
                            });

                            let h3_his = document.querySelector('.h3-his');
                            learn_his.addEventListener('click', function () {
                                h3_his.scrollIntoView ({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            })
                            
                            learn_loc.addEventListener('click', function() {
                                AboutSection.scrollIntoView ({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            })

                            let ChurchSection = document.querySelector('.church-h2');
                            learn_church.addEventListener('click', () => {
                                ChurchSection.scrollIntoView ({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            })

                            let MonumentSection = document.querySelector('.monument-h2');
                            learn_monument.addEventListener('click', () => {
                                MonumentSection.scrollIntoView ({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            });
                            
                        // clikcLoc(loc, locInfo);
                        // clickSlider(locInfo, locSlider);
                        clickSlider(locSlider);
                        window.addEventListener('resize', windowSize());
                        init();
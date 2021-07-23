const select = document.querySelector('select');
const select_mob = document.querySelector('.select-mob')
const langs = ['arm', 'en'];

select.addEventListener('change', changeURLLanguage);
select_mob.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    let lang_mob = select_mob.value;
    location.href = window.location.pathname + '#' + lang;
    location.href = window.location.pathname + '#' + lang_mob;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!langs.includes(hash)) {
        location.href = window.location.pathname + '#arm';
        location.reload();
    }
    select.value = hash;
    select_mob.value = hash;
    // document.querySelector('.lng-chip').innerHTML = lang['chip'][hash];
    for (let key in lang) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = lang[key][hash];
        }

    }
}

changeLanguage();
// var bodyEl = document.body;
// var firstButtonEl = document.getElementById('first_theme');
// var secondButtonEl = document.getElementById('second_theme');
// var thirdButtonEl = document.getElementById('third_theme');

// var navbarEl = document.getElementsByClassName('navbar')[0];
// var baslikEl = document.getElementById('baslik');
// var profil = document.getElementById('profil_img');
// var h1 = document.getElementById('h1');
// var email = document.getElementById('email');
// var link1 = document.getElementById('link1');
// var link2 = document.getElementById('link2');
// var link3 = document.getElementById('link3');
// var link4 = document.getElementById('link4');
// var date = document.getElementById('date');
// var dateClass = document.getElementsByClassName('date');


// navbarEl.setAttribute('style', 'background-color: var(--primary);');
// profil.setAttribute('style', 'border: 5px solid var(--secondary);');
// h1.setAttribute('style', 'color: var(--primary');
// email.setAttribute('style', 'color: var(--primary');
// link1.setAttribute('style', 'color: var(--primary');
// link2.setAttribute('style', 'color: var(--primary');
// link3.setAttribute('style', 'color: var(--primary');
// link4.setAttribute('style', 'color: var(--primary');
// date.setAttribute('style', 'color: var(--primary');

// navbarEl.setAttribute('style', 'background-color: var(--primary_second)');
// profil.setAttribute('style', 'border: 5px solid var(--secondary_second);');
// h1.setAttribute('style', 'color: var(--primary_second');
// email.setAttribute('style', 'color: var(--primary_second');
// link1.setAttribute('style', 'color: var(--primary_second');
// link2.setAttribute('style', 'color: var(--primary_second');
// link3.setAttribute('style', 'color: var(--primary_second');
// link4.setAttribute('style', 'color: var(--primary_second');
// date.setAttribute('style', 'color: var(--primary_second');

// navbarEl.setAttribute('style', 'background-color: var(--primary_third);');
// profil.setAttribute('style', 'border: 5px solid var(--headers);');
// h1.setAttribute('style', 'color: var(--secondary_third');
// email.setAttribute('style', 'color: var(--secondary_third');
// link1.setAttribute('style', 'color: var(--secondary_third');
// link2.setAttribute('style', 'color: var(--secondary_third');
// link3.setAttribute('style', 'color: var(--secondary_third');
// link4.setAttribute('style', 'color: var(--secondary_third');
// date.setAttribute('style', 'color: var(--secondary_third');

var color = document.querySelectorAll('.color');
var bg_color = document.querySelectorAll('.bg_color');


function first_style() {

    document.getElementsByClassName('secondary_color')[0].setAttribute('style', 'border: 5px solid var(--secondary);');
    document.getElementsByClassName('secondary_color')[1].setAttribute('style', 'border: 5px solid var(--secondary);');
    for (let i = 0; i < color.length; i++) {
        color[i].setAttribute('style', 'color: var(--primary);');
    }

    for (let i = 0; i < bg_color.length; i++) {
        bg_color[i].setAttribute('style', 'background-color: var(--primary);')
    }

}


function second_style() {

    document.getElementsByClassName('secondary_color')[0].setAttribute('style', 'border: 5px solid var(--secondary_second);');
    document.getElementsByClassName('secondary_color')[1].setAttribute('style', 'border: 5px solid var(--secondary_second);');
    for (let i = 0; i < color.length; i++) {
        color[i].setAttribute('style', 'color: var(--primary_second);');
    }

    for (let i = 0; i < bg_color.length; i++) {
        bg_color[i].setAttribute('style', 'background-color: var(--primary_second);')
    }
}

function third_style() {

    document.getElementsByClassName('secondary_color')[0].setAttribute('style', 'border: 5px solid var(--headers);');
    document.getElementsByClassName('secondary_color')[1].setAttribute('style', 'border: 5px solid var(--headers);');
    for (let i = 0; i < color.length; i++) {
        color[i].setAttribute('style', 'color: var(--primary_third);');
    }

    for (let i = 0; i < bg_color.length; i++) {
        bg_color[i].setAttribute('style', 'background-color: var(--primary_third);')
    }
}



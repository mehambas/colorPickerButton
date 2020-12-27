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



// jQuery

// console.log($)
$(document).ready(function () {
    $('#btn').click(function (e) {
        e.preventDefault()
        let iHtml = ''
        let inp = $('#inp').val();
        if (inp <= 0) {
            iHtml = `<div class="table text-center">Invalid Input</div>`;
        }
        else {
            for (let i = 1; i <= 20; i++) {
                iHtml += `<div class="table text-center">${inp} x ${i} = ${inp * i}</div>`;
            }
        }
        $('#cont').html(iHtml)
    })
})


// JavaScript 
/*
let btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let inp = document.getElementById('inp')
    let cont = document.getElementById('cont')
    let iHtml = '';
    if (inp.value <= 0) {
        iHtml = `<div class="table text-center"><h2>Invalid Input</h2></div>`
    }
    else {
        for (let i = 1; i <= 20; i++) {
            // console.log(i + 1)
            iHtml += `
                    <div class="table text-center">${inp.value} x ${i} = ${inp.value * i}</div>
                `
            // console.log(`${inp.value} x ${i} = ${inp.value * i}`)
        }
    }
    cont.innerHTML = iHtml;
})
*/

// jQuery

// console.log($)
/*
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
*/



// JavaScript 
// 5 3s are 15
let getBtn = document.getElementById('getBtn');
let emp = [];
let playBtn = document.getElementById('playBtn');
// console.log(playBtn)
playBtn.style.display = 'none';

getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let playBtn = document.getElementById('playBtn');
    let inp = document.getElementById('inp');
    let cont = document.getElementById('cont');
    let h1 = document.querySelector('h1');
    let iHtml = '';
    inp.value <= 0 ? h1.innerHTML = 'Multiplication Table' : h1.innerHTML = `Table of ${inp.value}`;
    if (inp.value <= 0) {
        iHtml = `<div class="table text-center"><h2>Invalid Input</h2></div>`
    }
    else {
        for (let i = 1; i <= 12; i++) {
            // console.log(i + 1)
            iHtml += `
                <div class="table text-center">${inp.value} x ${i} = ${inp.value * i}</div>
            `
            // console.log(`${inp.value} x ${i} = ${inp.value * i}`)
            emp.push(` ${inp.value} ${i}s are ${inp.value * i}. `);
        }
        playBtn.style.display = 'block';
    }
    cont.innerHTML = iHtml;
    inp.value = '';
    // console.log(emp);
    
    playBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let speech = new SpeechSynthesisUtterance(emp)
        // console.log(emp)
        window.speechSynthesis.speak(speech)
    })

})


// let playBtn = document.getElementById('playBtn');
// playBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(456)
//     if (emp == []) {
//         alert('Please fill')
//     }
// })


let inpt = document.querySelector('.d-gray')
let str = ''
let game = false

document.querySelector('.btn-1').addEventListener('click',function(){
    inpt.value += '1'
})
document.querySelector('.btn-2').addEventListener('click',function(){
    inpt.value += '2'
})
document.querySelector('.btn-3').addEventListener('click',function(){
    inpt.value += '3'
})
document.querySelector('.btn-4').addEventListener('click',function(){
    inpt.value += '4'
})
document.querySelector('.btn-5').addEventListener('click',function(){
    inpt.value += '5'
})
document.querySelector('.btn-6').addEventListener('click',function(){
    inpt.value += '6'
})
document.querySelector('.btn-7').addEventListener('click',function(){
    inpt.value += '7'
})
document.querySelector('.btn-8').addEventListener('click',function(){
    inpt.value += '8'
})
document.querySelector('.btn-9').addEventListener('click',function(){
    inpt.value += '9'
})
document.querySelector('.btn-0').addEventListener('click',function(){
    inpt.value += '0'
})



document.querySelector('.btn-plus').addEventListener('click',function(){
    inpt.value += '+'
})
document.querySelector('.btn-minus').addEventListener('click',function(){
    inpt.value += '-'
})
document.querySelector('.btn-mult').addEventListener('click',function(){
    inpt.value += '*'
})
document.querySelector('.btn-div').addEventListener('click',function(){
    inpt.value += '/'
})


document.querySelector('.btn-equal').addEventListener('click',function(){
    inp = inpt.value
    if (!inp.includes('0')){
        if (inp.includes('+')){
            inp = inp.split('+')
            inpt.value = +inp[0] + +inp[1]

        }
        if (inp.includes('-')){
            inp = inp.split('-')
            inpt.value = +inp[0] - +inp[1]
        }
        if (inp.includes('*')){
            inp = inp.split('*')
            inpt.value = +inp[0] * +inp[1]
        }
        if (inp.includes('/')){
            inp = inp.split('/')
            inpt.value = +inp[0] / +inp[1]
        }
    }
    else{
        inpt.value = ""
        game = true
        alert('death is upon us all')
        let calc = document.querySelector('.calc');

            function animateScaleOut() {
            calc.animate([
                { transform: 'scale(1) translateY(0px)'},
                { transform: 'scale(0.175) translateY(4200px)'}

    ], {
        duration: 1000,       
        easing: 'ease-out',
        fill: 'forwards'  
    });

    }
    animateScaleOut()
    document.querySelector('.fleet').style.display = 'grid'
    }



        // let calc = document.querySelector('.calc')
        // let crnt = 1
        // function anim() {
        //     calc.style.transform = `scale(${crnt})`
        //     if (crnt <= 0.25){
        //         crnt -= 0.01
        //         setTimeout(anim, 5)
        //     }
        // anim()
        // }


    })
document.querySelector('.btn-del').addEventListener('click',function(){
    inpt.value = ""
})
let fleet = document.querySelector('.fleet');

for (let i = 0; i < 48; i += 1) {
    let ship = document.createElement('div');
    ship.classList.add('ship');
    ship.setAttribute('id', `${i}`);
    fleet.appendChild(ship);
}

let ship = document.querySelectorAll('.ship');

let calc = document.querySelector('.calc')

// document.addEventListener("keypress", function(){
//     if (key === 'ArrowLeft' || key === 'a') {
//         calc.style.left += '20'
//     }

//     if (key === 'ArrowRight' || key === 'd') {

//     }

//     if (key === ' ') {

//     }
// })
// let calc = document.querySelector('.calc');
let step = 20;

let posX = 0;
let posY = 0;

function moveCalc(dx, dy) {
    let newX = posX + dx;
    let newY = posY + dy;
    
    const maxX = window.innerWidth - calc.offsetWidth;
    const maxY = window.innerHeight - calc.offsetHeight;
    
    newX = Math.min(Math.max(newX, 0), maxX);
    newY = Math.min(Math.max(newY, 0), maxY);
    
    if (newX !== posX || newY !== posY) {
        posX = newX;
        posY = newY;
        calc.style.left = posX + 'px';
        calc.style.top = posY + 'px';
        calc.style.transform = 'none';
    }
}

function initPosition() {
    const rect = calc.getBoundingClientRect();
    posX = rect.left;
    posY = rect.top;
    calc.style.position = 'absolute';
    calc.style.left = posX + 'px';
    calc.style.top = posY + 'px';
    calc.style.transform = 'none';
}
window.addEventListener('load', initPosition);
window.addEventListener('resize', () => {
    moveCalc(0, 0);
});
if (game == true){
    document.addEventListener('keydown', function(e) {
        if (document.activeElement === inpt) {
            return;
        }
        
        switch(e.key) {
            case 'ArrowLeft':
                moveCalc(-step, 0);
                e.preventDefault();
                break;
            case 'ArrowRight':
                moveCalc(step, 0);
                e.preventDefault();
                break;
            case 'ArrowUp':
                moveCalc(0, -step);
                e.preventDefault();
                break;
            case 'ArrowDown':
                moveCalc(0, step);
                e.preventDefault();
                break;
        }
    });
}

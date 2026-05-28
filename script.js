let inpt = document.querySelector('.d-gray')
let str = ''


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
    if (!inp.includes('13*666/0')){
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
        alert('death is upon us all')
        let calc = document.querySelector('.l-gray');

            function animateScaleOut() {
            calc.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(0)', opacity: 0.5 }
    ], {
        duration: 1000,       
        easing: 'ease-out',
        fill: 'forwards'  
    });

    }
    document.querySelector('.btn-equal').addEventListener('click', animateScaleOut);    
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



document.querySelector('.btn-del').addEventListener('click',function(){
    inpt.value = ""
})

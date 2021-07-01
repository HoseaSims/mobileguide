const ftb = document.querySelector('#ftb')
const mtb = document.querySelector('.mtb')
const dss = document.querySelector('.delivery-status')
const stepTwoFT = document.querySelector('.step-two-flash')
const stepTwoMT = document.querySelector('.step-two-url')
const stepThree = document.querySelector('.step-three')
const stepFour = document.querySelector('.step-four')
const StepFive = document.querySelector('.step-five')

const main = document.querySelector('main')

main.addEventListener('click', (e) =>{
    

    if(e.target.id === 'ftb'){
       console.log('yes');
       stepTwoFT.classList.toggle('hidden')
       stepTwoMT.classList.add('hidden')
       
    }

    if(e.target.id === 'mtb'){
        console.log('yes');
        stepTwoMT.classList.toggle('hidden')
        stepTwoFT.classList.add('hidden')
     }

     if(e.target.id === 'fulfilled'){
         stepThree.classList.toggle('hidden')
     }

     if(e.target.id === 'exmt'){
         stepFour.classList.toggle('hidden');
     }

     
})
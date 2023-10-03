function dropdown(element,type){
    let x = element.classList.contains('arrow-rotate2')
    if(x)element.classList.remove('arrow-rotate2')
    else element.classList.add('arrow-rotate2')
    
    let paybox = document.getElementsByClassName(`${type}-pay`)[0]
    // let paybox = document.getElementsByClassName(`upi-pay`)[0]
    paybox.classList.toggle('hide')
}

let upi = document.getElementsByClassName('upi')[0]
let card = document.getElementsByClassName('card')[0]
let bank = document.getElementsByClassName('bank')[0]


upi.addEventListener('click',function(){
    const type='upi'
    dropdown(upi,type)
})
card.addEventListener('click',function(){
    const type='card'
    dropdown(card,type)
})
bank.addEventListener('click',function(){
    const type='bank'
    dropdown(bank,type)
})

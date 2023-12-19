let link = document.querySelector('#link')
let qr_code = document.querySelector('.qr_code')

//une fonction pour generer le qr code
function generateur(){
    qr_code.textContent = ''
    qr_code.style.display = 'flex'
    test = new QRCode(qr_code , link.value);
    link.value = ''
}
    
   

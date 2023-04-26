const pass = document.querySelector('#valuePass')
const newResult = document.querySelector("#result")
const wrapper = document.querySelector(".passResult")


function generatePass() {
    newResult.innerHTML = ''
    if(pass.value === '') {
        alert('Digite um numero válido')
        return
    }

    if(pass.value > 15) {
        alert('A senha precisa conter de 3 a 15 numeros')
        return;
    }

    let charset = 'abcdefghijlmnopqrstuvwxyzABCDEFGHIJLÇRSTUVWXYZ0123456789'
    let password = ''


    for(var i = 0, n = charset.length; i < pass.value; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n))
        wrapper.classList.add('active')
    }

    let result = document.createTextNode(password)
    return newResult.appendChild(result)

}
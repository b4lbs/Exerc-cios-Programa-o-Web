//Variáveis
let valor1 = 0 
let valor2 = 0
let valor_resultado = 0
let operacao = 0

//Função pata todos os botões, exceto o "="
function press(num){
    switch(num){
        case 0: 
        document.getElementById("display").innerHTML += "0"
        break

        case 1: 
        document.getElementById("display").innerHTML += "1"
        break

        case 2: 
        document.getElementById("display").innerHTML += "2"
        break

        case 3: 
        document.getElementById("display").innerHTML += "3"
        break

        case 4: 
        document.getElementById("display").innerHTML += "4"
        break

        case 5: 
        document.getElementById("display").innerHTML += "5"
        break

        case 6: 
        document.getElementById("display").innerHTML += "6"
        break

        case 7: 
        document.getElementById("display").innerHTML += "7"
        break

        case 8: 
        document.getElementById("display").innerHTML += "8"
        break

        case 9: 
        document.getElementById("display").innerHTML += "9"
        break

        case 10: 
        document.getElementById("display").innerHTML = ""
        break
        
        case 11: 
        valor1 = document.getElementById("display").innerHTML
        valor1 = Number(valor1)
        document.getElementById("display").innerHTML = ""
        operacao = 1
        break

        case 12: 
        valor1 = document.getElementById("display").innerHTML
        valor1 = Number(valor1)
        document.getElementById("display").innerHTML = ""
        operacao = 2
        break
        
        case 13: 
        valor1 = document.getElementById("display").innerHTML
        valor1 = Number(valor1)
        document.getElementById("display").innerHTML = ""
        operacao = 3
        break

        case 14: 
        valor1 = document.getElementById("display").innerHTML
        valor1 = Number(valor1)
        document.getElementById("display").innerHTML = ""
        operacao = 4
        break

        case 15: 
        document.getElementById("display").innerHTML += "."
        break
        
    }
}

//Função do botão "="
function resultado(){
    switch(operacao){
        case 1:
            valor2 = document.getElementById("display").innerHTML
            valor2 = Number(valor2)
            valor_resultado = valor1 + valor2
            document.getElementById("display").innerHTML = valor_resultado.toFixed(2)
            break
        case 2:
            valor2 = document.getElementById("display").innerHTML
            valor2 = Number(valor2)
            valor_resultado = valor1 - valor2
            document.getElementById("display").innerHTML = valor_resultado.toFixed(2)
            break
        case 3:
            valor2 = document.getElementById("display").innerHTML
            valor2 = Number(valor2)
            valor_resultado = valor1 * valor2
            document.getElementById("display").innerHTML = valor_resultado.toFixed(2)
            break
        case 4:
            valor2 = document.getElementById("display").innerHTML
            valor2 = Number(valor2)
            valor_resultado = valor1 / valor2
            document.getElementById("display").innerHTML = valor_resultado.toFixed(2).replace('.', ',')
            break
    }
}
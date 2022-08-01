

function calculadora(num1,num2,sinal){
    
    
    switch (sinal) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case 'x':
            console.log(num1*num2);
            break;
        case 'X': //Maiu
            console.log(num1*num2);
            break;
        case '/':
            console.log(num1/num2);
            break;
        case '^':
            console.log(num1^num2);
            break;
        default:
            console.log('Sinal aritmético inválido!');
            break;
        }
    }


calculadora (10,20,'+');

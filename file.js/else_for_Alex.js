
/** Напишіть код:
*
*/

function calculateInvoiceForMaria(car, fruit, cloth, vegetable) {
    let invoice = "";
    
    // Перевіряємо, чи Марія купує цибулю
    if (vegetable === "cebola") {
        invoice += "cebola ";
    }

    // Перевіряємо автомобіль і додаємо до рахунку для Марії, якщо вона купує цибулю
    switch (car) {
        case "volvo":
            if (fruit === "orange") {
                invoice += "Mercedes + orange ";
            }
            break;
        case "smart":
            invoice += "smart ";
            break;
        default:
            break;
    }

    return "Invoice for Maria: " + invoice.trim();
}

function calculateInvoiceForJorge(car) {
    let invoice = "";
    
    // Перевіряємо автомобіль і додаємо до рахунку для Жоржа, якщо він купує автомобіль
    if (car === "volvo" || car === "mercedes") {
        invoice += car;
    }

    return "Invoice for Jorge: " + invoice;
}

// Example of using the functions
console.log(calculateInvoiceForMaria("volvo", "orange", "green", "cebola")); // Invoice for Maria: Mercedes + orange + cebola
console.log(calculateInvoiceForJorge("volvo")); // Invoice for Jorge: volvo



// /**
// *Цей код спочатку встановлює ціни на автомобілі, фрукти, одяг та овочі. Потім, на основі вподобань покупок *Марії та Хорхе, він обчислює рахунок для кожного з них.
//  * @param {*} mariaCompraCebola 
//  * @param {*} jorgeCompraCarro 
//  */
// function calcularFatura(mariaCompraCebola, jorgeCompraCarro) {
//     let faturaMaria = "";
//     let faturaJorge = "";

//     // Preços dos carros
//     const priseVolvo = 60000;
//     const priseSmart = 25000;

//     // Preços dos frutos
//     const priseAnanas = 0.99;
//     const priseApple = 1.29;
//     const priseLemon = 1.69;
//     const priseOrange = 1.50;

//     // Preços das roupas
//     const priseTShirtVerde10 = 10;
//     const priseTShirtVerde16 = 16;
//     const priseTShirtPreto = 25;

//     // Se Maria compra cebola
//     if (mariaCompraCebola) {
//         faturaMaria += "cebola, ";
//     }

//     // Se Jorge compra o carro
//     switch (jorgeCompraCarro) {
//         case "volvo":
//             faturaJorge += "volvo";
//             break;
//         case "smart":
//             faturaJorge += "smart";
//             break;
//         default:
//             faturaJorge += "nenhum carro";
//     }

//     // Fatura final para Maria e Jorge
//     console.log("Fatura para Maria: mercedes + orange + " + faturaMaria);
//     console.log("Fatura para Jorge: " + faturaJorge);
// }






// Claro, aqui está um exemplo de código JavaScript que utiliza as construções `if-else` e `switch` para lidar com diferentes casos com base nos argumentos fornecidos:

// ```javascript
// // Função que retorna o preço com base no item fornecido
// function getPrice(item) {
//     switch (item) {
//         case 'ananas':
//             return 0.99;
//         case 'apple':
//             return 1.29;
//         case 'lemon':
//             return 1.69;
//         case 'orange':
//             return 1.50;
//         default:
//             return 'Item não encontrado';
//     }
// }

// // Função que retorna o preço da fruta com base no peso fornecido
// function calculateFruitPrice(fruit, weight) {
//     const pricePerKilo = getPrice(fruit);
//     if (typeof pricePerKilo === 'number') {
//         return pricePerKilo * weight;
//     } else {
//         return pricePerKilo;
//     }
// }

// // Função que retorna o preço da roupa com base na cor fornecida
// function calculateClothingPrice(color) {
//     let price;
//     if (color === 'verde') {
//         price = 10;
//     } else if (color === 'preto') {
//         price = 25;
//     } else {
//         price = 16;
//     }
//     return price;
// }

// // Função que verifica se o carro está disponível com base na marca fornecida
// function checkCarAvailability(car) {
//     if (car === 'volvo') {
//         return 60000;
//     } else if (car === 'smart') {
//         return 25000;
//     } else {
//         return 'Carro não encontrado';
//     }
// }

// // Função que verifica se o item fornecido é um legume
// function checkVegetable(item) {
//     switch (item) {
//         case 'batata':
//         case 'cenoura':
//         case 'cebola':
//         case 'alho':
//         case 'aipo':
//             return true;
//         default:
//             return false;
//     }
// }

// // Exemplos de utilização das funções
// console.log("Preço do carro Volvo:", checkCarAvailability('volvo'));
// console.log("Preço do carro Smart:", checkCarAvailability('smart'));
// console.log("Preço do carro Ford:", checkCarAvailability('ford'));

// console.log("Preço do ananás:", getPrice('ananas'));
// console.log("Preço da maçã:", getPrice('apple'));
// console.log("Preço do melão:", getPrice('melon'));

// console.log("Preço da camiseta verde:", calculateClothingPrice('verde'));
// console.log("Preço da camiseta preta:", calculateClothingPrice('preto'));
// console.log("Preço da camiseta azul:", calculateClothingPrice('azul'));

// console.log("Preço da maçã com 2 quilos:", calculateFruitPrice('apple', 2));
// console.log("Preço do limão com 1 quilo:", calculateFruitPrice('lemon', 1));

// console.log("A batata é um legume?", checkVegetable('batata'));
// console.log("O morango é um legume?", checkVegetable('morango'));
// ```

// Este código demonstra como utilizar as construções `if-else` e `switch` em diferentes cenários, como cálculo de preços de frutas, verificação de disponibilidade de carros, cálculo de preços de roupas com base na cor e verificação se um item é um legume ou não.
// Функція для підрахунку вартості покупок
function calculateInvoice(car, fruit, clothes, vegetables) {
    let totalCost = 0;
}
    // Перевірка автомобіля та додавання вартості
    switch (car) {
        case 'volvo':
            totalCost += 60000;
            break;
        case 'audi':
            totalCost += 40000;
            break;
        case 'mercedes':
            totalCost += 100000;
            break;
        case 'smart':
            totalCost += 25000;
            break;
        default:
            console.log("Недопустимий автомобіль.");
    }

    // Додавання вартості фруктів
    switch (fruit) {
        case 'ananas':
            totalCost += 0.99;
            break;
        case 'apple':
            totalCost += 1.29;
            break;
        case 'lemon':
            totalCost += 1.69;
            break;
        case 'orange':
            totalCost += 1.50;
            break;
        default:
            console.log("Недопустимий фрукт.");
    }

    // Додавання вартості одягу
    switch (clothes) {
        case 't-shirt':
            totalCost += 10;
            break;
        case 'blouse':
            totalCost += 8;
            break;
        case 'dress':
            totalCost += 12;
            break;
        case 'jeans':
            totalCost += 25;
            break;
        default:
            console.log("Недопустимий одяг.");
    }

    // Додавання вартості овочів (якщо є потреба)
    switch (vegetables) {
        case 'potato':
            totalCost += 0.5;
            break;
        case 'carrot':
            totalCost += 0.8;
            break;
        case 'onion':
            totalCost += 0.6;
            break;
        case 'garlic':
            totalCost += 1.0;
            break;
        case 'celery':
            totalCost += 0.7;
            break;
        default:
            console.log("Недопустимі овочі.");
    }

    return totalCost;

// Виклик функції та виведення результату
let invoiceTotal = calculateInvoice('mercedes', 'orange', 't-shirt', 'onion');
console.log("Вартість покупок складає:", invoiceTotal.toFixed(2));


function greet(name){
    console.log(`Hello ${name}`);
}

// greet("Mayank");


// function makeTea(typeofTea){
//     return `Making ${typeofTea}`;
    
// }

// let teaOrder = makeTea("green tea");
// console.log(teaOrder);

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    
    return confirmOrder();
}

let orderConfirmed = orderTea();
// console.log(orderConfirmed);



function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea);
console.log(order);




// Arrow Functions

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(250, 2);
// console.log(totalCost);




const orders = [
    {amount: 2565},
    {amount: 2543},
    {amount: 2515},
    {amount: 5565},
    {amount: 2555},
    {amount: 2265}
]

const calculateSum = orders.reduce((sum, order) => {
   
    return sum + order.amount;
}, 0)

let name = 'Tomi';
const nakki = name.split('').reverse().join('')
console.log(nakki)
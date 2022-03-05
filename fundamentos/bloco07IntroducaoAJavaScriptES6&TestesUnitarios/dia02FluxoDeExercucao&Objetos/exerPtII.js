const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const address = order.address;
  return `Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${order.phoneNumber}, R. ${address.street}, N°: ${address.number}, AP: ${address.apartment}.`;
}
// console.log(customerInfo(order));

customerInfo(order);

const orderModifier = (order) => {
  const customer = order.name = 'Luiz Silva';
  const flavor = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const payment = order.payment = '50,00';
  return `Olá ${customer}, o total do seu pedido de ${flavor[0]}, ${flavor[1]} e ${drink} é R$ ${payment}.`;
}
// console.log(orderModifier(order));
orderModifier(order);
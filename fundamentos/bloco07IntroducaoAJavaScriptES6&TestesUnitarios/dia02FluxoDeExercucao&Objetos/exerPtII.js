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
  const dlvPerson = order.order.delivery.deliveryPerson;
  const cstPerson = order.name;
  const phoneNmb = order.phoneNumber;
  const addressStreetName = order.address.street;
  const addressNumber = order.address.number;
  const addressApt = order.address.apartment;
  return `Olá ${dlvPerson}, entrega para: ${cstPerson}, Telefone: ${phoneNmb}, R. ${addressStreetName}, N°: ${addressNumber}, AP: ${addressApt}.`;
}
// console.log(customerInfo(order));

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
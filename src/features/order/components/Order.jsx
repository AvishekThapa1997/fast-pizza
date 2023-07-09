// Test ID: IIDSAT

import { useParams } from 'react-router-dom';
import { getOrder } from '../../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../../utils/helpers';
import { useQuery } from 'react-query';
import Loader from '../../ui/Loader';
import OrderItem from './OrderItem';

// const order = {
//   id: 'ABCDEF',
//   customer: 'Jonas',
//   phone: '123456789',
//   address: 'Arroios, Lisbon , Portugal',
//   priority: true,
//   estimatedDelivery: '2027-04-25T10:00:00',
//   cart: [
//     {
//       pizzaId: 7,
//       name: 'Napoli',
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: 'Diavola',
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: 'Romana',
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: '-9.000,38.000',
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const { orderId } = useParams();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { isFetching, data: order } = useQuery(
    ['order', orderId],
    () => getOrder(orderId),
    {
      retry: false,
    }
  );
  if (isFetching && !order) {
    return <Loader />;
  }
  const {
    // eslint-disable-next-line no-unused-vars
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // eslint-disable-next-line no-unused-vars
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='space-y-8 px-4 py-6'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <h2 className='text-xl font-semibold'>Order #{id} status</h2>
        <div className='space-x-2'>
          {priority && (
            <span className='rounded-full bg-red-500 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wider text-red-50'>
              Priority
            </span>
          )}
          <span className='rounded-full bg-green-500 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wider text-green-50'>
            {status} order
          </span>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5'>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs font-semibold text-stone-500'>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className='divide-y divide-stone-200 border-b border-t'>
        {cart.map((orderItem) => (
          <OrderItem
            item={orderItem}
            key={orderItem.id}
          />
        ))}
      </ul>

      <div className='space-y-2 bg-stone-200 px-6 py-5'>
        <p className='text-sm font-medium text-stone-600'>
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className='font-bold'>
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;

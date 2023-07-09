import { formatCurrency } from '../../../utils/helpers';
import Button from '../../ui/Button';

function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <div className='py-3 sm:flex sm:items-center sm:justify-between'>
        <p className='mb-2 sm:mb-0'>
          {quantity}&times; {name}
        </p>
        <div className='flex items-center justify-between sm:gap-4'>
          <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
          <Button type='small'> delete</Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

import { formatCurrency } from '../../../utils/helpers';
import Button from '../../ui/Button';

function MenuItem({ pizza }) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='py-4'>
      <div className='flex gap-4'>
        <img
          src={imageUrl}
          alt={name}
          className={`h-24 w-24 rounded${
            soldOut ? ' opacity-70 grayscale' : ''
          }`}
        />

        <div className='flex grow flex-col justify-between pt-0.5'>
          <p className='font-medium'>{name}</p>
          <p className='text-sm capitalize italic text-stone-500'>
            {ingredients.join(', ')}
          </p>
          <div className='mt-auto flex justify-between text-sm font-medium uppercase text-stone-500'>
            {!soldOut ? (
              <p className='self-end'>{formatCurrency(unitPrice)}</p>
            ) : (
              <p>Sold out</p>
            )}
            <Button type='small'>add to cart</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

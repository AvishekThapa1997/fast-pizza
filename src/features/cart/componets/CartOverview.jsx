import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className='flex items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 sm:px-6'>
      <p className='px-4 py-4  text-sm font-semibold uppercase text-slate-300 sm:space-x-6 md:space-x-4 md:text-base'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

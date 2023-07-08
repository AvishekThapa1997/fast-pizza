import { Link } from 'react-router-dom';
import SearchOrder from '../order/components/SearchOrder';
import Username from '../user/componets/Username';

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between border-b border-stone-200 bg-primary px-4 py-3 uppercase sm:px-6'>
        <Link
          to='/'
          className='tracking-widest'
        >
          Fast React Pizza Co.
        </Link>
        <SearchOrder placeholder='Search Order#' />
        <Username name='jonas' />
      </header>
    </>
  );
}

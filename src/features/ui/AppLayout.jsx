import { Outlet } from 'react-router-dom';
import CartOverview from '../cart/componets/CartOverview';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='no-scrollbar overflow-auto'>
        <div className='mx-auto max-w-2xl '>
          <Outlet />
        </div>
      </main>
      <CartOverview />
    </div>
  );
}

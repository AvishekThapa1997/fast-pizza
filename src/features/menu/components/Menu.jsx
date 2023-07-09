import { useQuery } from 'react-query';
import { getMenu } from '../../../services/apiRestaurant';
import MenuItem from './MenuItem';
import Error from '../../ui/Error';
import Loader from '../../ui/Loader';

function Menu() {
  const {
    isFetching,
    data: pizzaMenus,
    isError,
    error,
  } = useQuery('menus', getMenu);
  return (
    <>
      {isFetching && !pizzaMenus ? <Loader /> : null}
      {pizzaMenus && !isError ? (
        <ul className='divide-y divide-stone-200 px-2 py-4'>
          {pizzaMenus.map((pizza) => (
            <MenuItem
              pizza={pizza}
              key={pizza.id}
            />
          ))}
        </ul>
      ) : null}
      {isError ? <Error message={error.message} /> : null}
    </>
  );
}

export default Menu;

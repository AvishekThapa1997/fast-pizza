// eslint-disable-next-line no-unused-vars
import { useMutation } from 'react-query';
import { createOrder } from '../../../services/apiRestaurant';
import { Form, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loader from '../../ui/Loader';

// https://uibakery.io/regex-library/phone-number
// eslint-disable-next-line no-unused-vars
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, reset } = useForm();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(createOrder, {
    mutationKey: 'create-order',
    retry: false,
    onSuccess: (data) => {
      reset();
      navigate(`/order/${data.id}`);
    },
  });
  const cart = fakeCart;
  const submitHandler = (formData) => {
    const newOrder = {
      ...formData,
      cart,
    };
    mutate(newOrder);
  };
  return (
    <div>
      <h2>Ready to order? Let&#39;s go!</h2>

      <Form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>First Name</label>
          <input
            type='text'
            name='customer'
            required
            {...register('customer')}
            disabled={isLoading}
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type='tel'
              name='phone'
              required
              {...register('phone')}
              disabled={isLoading}
            />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type='text'
              name='address'
              required
              {...register('address')}
              disabled={isLoading}
              className='w-full rounded-full border border-stone-200 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400'
            />
          </div>
        </div>

        <div>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            {...register('priority')}
            disabled={isLoading}
            className='h-6 w-6 accent-primary'
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <button
            disabled={isLoading}
            className='inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-[shadow_colors] duration-300 hover:bg-yellow-300 hover:shadow-lg focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'
          >
            Order now
          </button>
        </div>
      </Form>
      {isLoading ? <Loader /> : null}
    </div>
  );
}

export default CreateOrder;

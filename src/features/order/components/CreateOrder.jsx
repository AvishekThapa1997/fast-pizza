// eslint-disable-next-line no-unused-vars
import { useMutation } from 'react-query';
import { createOrder } from '../../../services/apiRestaurant';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loader from '../../ui/Loader';
import Button from '../../ui/Button';
import { useState } from 'react';

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
  // eslint-disable-next-line no-unused-vars
  const [withPriority, setWithPriority] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>
        Ready to order? Let&#39;s go!
      </h2>
      <form
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm:basis-40'>Name</label>
          <div className='grow'>
            <input
              type='text'
              name='customer'
              required
              {...register('customer', {
                required: 'Name is required.',
              })}
              disabled={isLoading}
              className='input '
            />
            {errors.customer ? (
              <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
                *{errors.customer.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm:basis-40'>Phone number</label>
          <div className='grow'>
            <input
              type='tel'
              name='phone'
              required
              {...register('phone', {
                required: 'Phone number is required',
                validate: (value) =>
                  isValidPhone(value) || 'Phone number is invalid.',
              })}
              disabled={isLoading}
              className='input '
            />
            {errors.phone ? (
              <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
                *{errors.phone.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
          <label className='sm:basis-40'>Address</label>
          <div className='grow'>
            <input
              type='text'
              name='address'
              required
              {...register('address', {
                required: 'Address is required.',
              })}
              disabled={isLoading}
              className='input'
            />
            {errors.address ? (
              <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>
                *{errors.address.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className='mt-12 flex items-center gap-4'>
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
          <label
            htmlFor='priority'
            className='font-medium'
          >
            Want to yo give your order priority?
          </label>
        </div>

        <div className='mt-6 text-center'>
          <Button disabled={isLoading}>Order now</Button>
        </div>
      </form>
      {isLoading ? <Loader /> : null}
    </div>
  );
}

export default CreateOrder;

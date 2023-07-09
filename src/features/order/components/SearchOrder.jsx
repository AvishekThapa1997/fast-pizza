import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchOrder({ placeholder }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={query}
        onChange={handleQueryChange}
        placeholder={placeholder}
        className='flex-1 rounded-full bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:w-72 focus:shadow-lg focus:shadow-yellow-400 focus:outline-none focus:ring focus:ring-primary focus:ring-yellow-500 focus:ring-offset-2 sm:w-64 sm:focus:w-72'
      />
    </form>
  );
}

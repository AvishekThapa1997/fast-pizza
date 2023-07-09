import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type = 'primary' }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-[shadow_colors] duration-300 hover:bg-yellow-300 hover:shadow-lg focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-2 sm:px-6 sm:py-2.5',
    small: base + ' px-4 py-2 text-xs md:py-2.5',
    secondary:
      'inline-block text-sm rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-[shadow_colors] duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 sm:px-6 hover:bg-stone-300 hover:shadow-lg hover:text-stone-800 focus:text-stone-800',
  };
  const finalStyles = `${styles[type]}`;
  if (to) {
    return (
      <Link
        to={to}
        className={finalStyles}
        disabled={disabled}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      disabled={disabled}
      className={finalStyles}
    >
      {children}
    </button>
  );
}

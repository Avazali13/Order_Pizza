import { NavLink } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base flex items-center">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <NavLink to="/cart">Open cart &rarr;</NavLink>
    </div>
  );
}

export default CartOverview;

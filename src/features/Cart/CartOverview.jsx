import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartQuantity)
const totalCartPrice=useSelector(getTotalCartPrice)
if(!totalCartQuantity) return null;
  return (
    <div className="bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base flex justify-between items-center">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <NavLink to="/cart">Open cart &rarr;</NavLink>
    </div>
  );
}

export default CartOverview;

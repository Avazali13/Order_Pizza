// Test ID: IIDSAT

import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from '../Cart/UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher=useFetcher('/menu')

  

useEffect(function (){
  if(!fetcher.data && fetcher.state==='idle' )
    fetcher.load('/menu')
  
},[fetcher])

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='py-6 px-4 space-y-8'>
      <div className='flex items-center justify-between flex-wrap gap-2'>
        <h2 className=' text-xl font-semibold '>Order #{id} status</h2>

        <div className='space-x-2'>
          {priority && <span className='text-red-50 bg-red-500 py-1 px-3 text-sm font-semibold uppercase rounded-full tracking-wide'>Priority</span>}
          <span className='text-green-50 bg-green-500 text-sm font-semibold uppercase rounded-full tracking-wide py-1 px-3'>{status} order</span>
        </div>
      </div>

      <div className='flex items-center justify-between flex-wrap bg-stone-200 py-5 px-6 gap-2'>
        <p className='font-medium'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs text-stone-500'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

<ul className='divide-y divide-stone-200 border-b border-t'>
  {cart.map(item=><OrderItem item={item} key={Math.random()*10000} isLoadingIngredients={fetcher.state==='loading'} ingredients={fetcher.data?.find(el=>el.id===item.pizzaId).ingredients ?? []}/>)}
</ul>


      <div className='space-y-2 bg-stone-200 px-6 py-5'>
        <p className='text-sm font-medium'>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className='text-sm font-medium'>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='text-sm font-bold'>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder order={order} />}
      {/* {<UpdateOrder order={order}/>} */}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderID);
  return order;
}

export default Order;

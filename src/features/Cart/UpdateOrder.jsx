import { useFetcher, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();


  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type="primary" >Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({request,params}) {
    console.log(params);
    const data ={priority:true}
    await updateOrder(params.orderID,data)
 
    return null
}

export default UpdateOrder;
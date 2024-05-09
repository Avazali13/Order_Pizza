import { useState } from 'react';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
const navigate=useNavigate()
const dispatch=useDispatch()
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type:updateName,payload:username})
    navigate("/menu")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='text-sm mb-4 md:text-base text-stone-600'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name example(H.G)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 input mb-8'
      />

      {username !== '' && (
        <div>
         <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

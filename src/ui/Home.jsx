import { useSelector } from "react-redux";
import CreateUser from "../features/User/CreateUser";
import Button from "./Button";

function Home() {
  const username=useSelector(state=>state.user.username)
  return (
    <div className="my-10 text-center sm:my-16 ">
      <h1 className="text-center text-xl mb-8  font-semibold md:text-3xl px-4 ">
        The best pizza.
        <br />
        <span className="text-yellow-400">
        Straight out of the oven, straight to you.

        </span>
      </h1>
      {username==='' ? <CreateUser/> :<Button type='primary' to='/menu'>Cointinue ordering, {username}</Button>}
    </div>
  );
}

export default Home;

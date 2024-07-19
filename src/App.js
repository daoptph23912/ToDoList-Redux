import "./App.css";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";
import React, { useEffect, useRef, useState, memo } from "react";
import TodosComponent from "./ReduxToolkit/features/todos/TodosComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotals,
  getCartItems,
} from "./ReduxToolkit2/features/cart/cartSlice";
import Modal from "./ReduxToolkit2/components/modal";
import Navbar from "./ReduxToolkit2/components/navbar";
import CartContainer from "./ReduxToolkit2/components/cartContainer";
function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(count);

  useEffect(() => {
    ref.current = count;
  }, [count]);

  // Redux toolkit 2
  const { cartItems, isLoading } = useSelector((store) => store.cart);

  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div>
      {/* redux CORE */}
      {/* <h1>HI REDUX</h1>
      <AddToDo />
      <ToDoList />
      <input ref={ref} type="text" />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      > + 1</button>
      <h1>{count}</h1> */}

      {/* Redux Toolkit */}
      {/* <TodosComponent /> */}

      {/* Redux Toolkit 2*/}
      <Navbar />
      <CartContainer />
      <main>{isOpen && <Modal />}</main>
    </div>
  );
}

export default memo(App);

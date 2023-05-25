import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import { Loader } from './components/LoandingPage/LoandingPage';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemDetail from './components/ItemDetail/ItemDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/item/:id",
    element: <ItemDetailContainer />,
  },
  {
    path: "/category/:categotyId",
    element: <ItemListContainer />,
  },
  

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    
    <router>
      
    <RouterProvider router={router} />
    </router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

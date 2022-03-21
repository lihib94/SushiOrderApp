import { Route, Navigate, Routes } from 'react-router-dom';
import Home from './components/Home'
import './assets/css/index.css';
import {useDispatch} from 'react-redux'
import fetchProducts from './redux/actions/productsActions'
import { useEffect } from 'react';
import {bindActionCreators} from 'redux'

function App() {

  //dispatch products actions - fetch menu from firebase
    const dispatch = useDispatch()
    const fetchProductsAction = bindActionCreators(fetchProducts, dispatch)

    useEffect(() => {dispatch(fetchProductsAction)}, [fetchProductsAction,dispatch])

  return (
    
    <Routes>
          <Route path='/' element={<Navigate replace to="home" />} />
          <Route path='/home' element={<Navigate replace to="/home/salads" />} />
          <Route path='/home/:dishId' element={<Home />} />
    </Routes>
  );
}

export default App;

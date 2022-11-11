import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Mens from '../pages/Mens';
import Womens from '../pages/Womens';
import Kids from '../pages/Kids';
import Life from '../pages/Life';
import InvalidPage from '../pages/InvalidPage';
import MenProducts from '../pages/MenProducts';
import WomenProducts from '../pages/WomenProducts';
import KidsProducts from '../pages/KidsProducts';
import SingleProduct from '../pages/SingleProduct';
import ShoppingCart from '../pages/ShoppingCart';
import SignInPage from '../pages/SignInPage';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mens' element={<Mens />} />
                <Route path='/womens' element={<Womens />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/life' element={<Life />} />
                <Route path='/menproducts' element={<MenProducts />} />
                <Route path='/womenproducts' element={<WomenProducts />} />
                <Route path='/kidsproducts' element={<KidsProducts />} />
                <Route path='/:id' element={<SingleProduct />} />
                <Route path='/menproducts/:id' element={<SingleProduct />} />
                <Route path='/womenproducts/:id' element={<SingleProduct />} />
                <Route path='/kidsproducts/:id' element={<SingleProduct />} />
                <Route path='/shoppingcart' element={<PrivateRoute><ShoppingCart /></PrivateRoute>} />
                <Route path='/signinpage' element={<SignInPage />} />
                <Route path='*' element={<InvalidPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes;
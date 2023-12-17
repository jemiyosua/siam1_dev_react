import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../pages/Login';
import MainApp from '../../pages/MainApp';
import FAQ from '../../pages/Faq';
import SaleProduct from '../../pages/SaleProdut';
// import MainApp from '../../admin/pages/MainApp';

const Routes = () => {
    return (
		<Router >
			<Switch>
				<Route path='/admin/Login'>
					<Login/>
				</Route>
				<Route path='/admin/dashboard'>
					<MainApp/>
				</Route>
				<Route path='/admin/user'>
					<MainApp/>
				</Route>
				<Route path='/admin/input-admin-access'>
					<MainApp/>
				</Route>
				<Route path='/faq'>
					<FAQ/>
				</Route>
				<Route path='/sale-product'>
					<SaleProduct/>
				</Route>
				{/* <Route path='/:post'>
					<Post/>
				</Route> */}
				<Route path='/'>
					<Login/>
				</Route>
			</Switch>
		</Router>
    )
}

export default Routes;

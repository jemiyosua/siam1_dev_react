import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { FaBars } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { BrowserRouter , Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import { Header } from '../../components'
import LeftMenu from '../../components/molecules/LeftMenu'
import { historyConfig } from '../../utils/functions'
import Dashboard from '../Dashboard'
import User from '../User'
import InputAdminAccess from '../User/AdminAccess/InputAdminAccess'

const MainApp = () => {
    const history = useHistory(historyConfig);

    let match = useRouteMatch();
    const [cookies, setCookie,removeCookie] = useCookies(['user']);

    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    const {form}=useSelector(state=>state.PaketReducer);

    useEffect(()=>{
        // alert("mainapp")
        document.title = "Sistem Informasi Akademik Methodist 1";
        // if(cookies.CookieParamKey==null || cookies.CookieParamKey=="" ||
        // cookies.ckUI==null || cookies.ckUI==""){
        //     alert("Session anda telah habis. Silahkan login kembali.");
        //     history.push('/login');
        //     return false;
        // }
     
    },[])
    
    return (
        <div>
            <div className="main-app-wrapper mainapp" style={{display:'flex', backgroundColor:'#F6FBFF', width:'100%'}}> 

                <LeftMenu />

                <div className="content-wrapper" style={{ backgroundColor:'#F6FBFF', height:'100%', padding:30,  width:'100%' }}> 
                    {/* <Header/> */}
                    <BrowserRouter basename="/admin">
                        <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/user">
                                <User />
                            </Route>
                            <Route exact path="/input-admin-access">
                                <InputAdminAccess />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
}

export default MainApp
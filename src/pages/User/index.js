import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { Header, Footer, Input, Button, Gap } from '../../components';
import './Tab.css'
import { useDispatch } from 'react-redux';
import { AlertMessage, paths } from '../../utils'
import { historyConfig, generateSignature, fetchStatus } from '../../utils/functions';
import { setForm } from '../../redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import AdminAccess from './AdminAccess'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const User = () => {
    const history = useHistory(historyConfig);
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    // const [cookies, setCookie,removeCookie] = useCookies(['user']);
	const [cookies, setCookie,removeCookie] = useCookies(['user']);
	
	const [ShowAlert, setShowAlert] = useState(true)
    const [SessionMessage, setSessionMessage] = useState("")
    const [ErrorMessageAlert, setErrorMessageAlert] = useState("")
    const [ErrorMessageAlertLogout, setErrorMessageAlertLogout] = useState("")

    const [StateTabsAdminAccess, setStateTabsAdminAccess] = useState(true)

    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += scrollOffset;
        }
    };

	useEffect(() => {
        window.scrollTo(0, 0)
    },[])

	const getCookie = (tipe) => {
        var SecretCookie = cookies.varCookie;
        if (SecretCookie !== "" && SecretCookie != null && typeof SecretCookie=="string") {
            var LongSecretCookie = SecretCookie.split("|");
            var UserName = LongSecretCookie[0];
            var ParamKeyArray = LongSecretCookie[1];
            var Nama = LongSecretCookie[2];
            var ParamKey = ParamKeyArray.substring(0, ParamKeyArray.length)
        
            if (tipe === "username") {
                return UserName;            
            } else if (tipe === "paramkey") {
                return ParamKey;
            } else if (tipe === "nama") {
                return Nama;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

	const logout = ()=>{
        removeCookie('varCookie', { path: '/'})
        removeCookie('varMerchantId', { path: '/'})
        removeCookie('varIdVoucher', { path: '/'})
        dispatch(setForm("ParamKey",''))
        dispatch(setForm("Username",''))
        dispatch(setForm("Name",''))
        dispatch(setForm("Role",''))
        if(window){
            sessionStorage.clear();
		}
    }
    
    return (
		<div className="main-page" style={{ backgroundColor:'#F6FBFF' }}>
           
            <div className="content-wrapper-2" style={{ backgroundColor:'#F6FBFF', width:'100%' }} >
                <div className="blog-post">
                    <div style={{ fontWeight:'bold', color:'#004372', fontSize:30 }}><FontAwesomeIcon icon={faPerson}/> User</div>
                    <p style={{ margin:0 }}>Here's for all Admin from SIAM platform.</p>

                    {/* ALERT */}
                    {SessionMessage != "" ?
                    <SweetAlert 
                        warning 
                        show={ShowAlert}
                        onConfirm={() => {
                            logout()
                            setShowAlert(false)
                            window.location.href="admin/login";
                        }}
                        btnSize="sm">
                        {SessionMessage}
                    </SweetAlert>
                    :""}      

                    {ErrorMessageAlert != "" ?
                    <SweetAlert 
                        danger 
                        show={ShowAlert}
                        onConfirm={() => {
                            setShowAlert(false)
                            setErrorMessageAlert("")
                        }}
                        btnSize="sm">
                        {ErrorMessageAlert}
                    </SweetAlert>
                    :""}

                    {ErrorMessageAlertLogout != "" ?
                    <SweetAlert 
                        danger 
                        show={ShowAlert}
                        onConfirm={() => {
                            setShowAlert(false)
                            setErrorMessageAlertLogout("")
                            window.location.href="admin/login";
                        }}
                        btnSize="sm">
                        {ErrorMessageAlertLogout}
                    </SweetAlert>
                    :""}
                    {/* END OF ALERT */}
                    
                    <Gap height={20} />

                    {StateTabsAdminAccess &&
                    <div>
                        <div style={{ display:'flex' }}>
                            <div>
                                <button role="tab" aria-controls="merchant-list">
                                    <div style={{ color:'#004372', fontSize:16 }}>Admin Access</div>
                                </button>
                                <section id="merchant-list"></section>
                            </div>
                        </div>
                    </div>}

                    {StateTabsAdminAccess &&
                        <AdminAccess></AdminAccess>
                    }

                    <Gap height={10} />

                </div>
            </div>

        </div>
    )
}

export default User;
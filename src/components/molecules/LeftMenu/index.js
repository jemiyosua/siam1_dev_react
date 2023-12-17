import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AlertMessage, paths } from '../../../utils'
import { historyConfig, generateSignature, fetchStatus } from '../../../utils/functions';
import { setForm } from '../../../redux';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import './LeftMenu.css';
import { faChalkboardTeacher, faChalkboardUser, faGauge, faPerson, faSchool, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LeftMenu = () => {
	const history = useHistory(historyConfig);
    const dispatch = useDispatch();
    const containerRef = useRef(null);
	const [cookies, setCookie, removeCookie] = useCookies(['user']);
	const [ListMenuSidebar, setListMenuSidebar] = useState([])
	const [Loading, setLoading] = useState(false)
	
	const [ShowAlert, setShowAlert] = useState(true)
    const [SessionMessage, setSessionMessage] = useState("")
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [ErrorMessageAlert, setErrorMessageAlert] = useState("")
    const [ErrorMessageAlertLogout, setErrorMessageAlertLogout] = useState("")

	useEffect(() => {
		window.scrollTo(0, 0)

		getListMenu()

	},[])

	const logout = ()=>{
        removeCookie('varCookie', { path: '/'})
        dispatch(setForm("ParamKey",''))
        dispatch(setForm("Username",''))
        dispatch(setForm("Name",''))
        dispatch(setForm("Role",''))
        if(window){
            sessionStorage.clear();
		}
    }

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

	const getListMenu = () => {

		var CookieParamKey = getCookie("paramkey");
        var CookieUsername = getCookie("username");

		var requestBody = JSON.stringify({
			"UserName": CookieUsername,
			"ParamKey": CookieParamKey,
			"Method": "SELECT",
			"Page": 1,
			"RowPage": 20,
			"OrderBy": "tgl_input",
			"Order": "DESC"
		});

		var url = paths.URL_API_ADMIN + 'MenuSidebar';
		var Signature  = generateSignature(requestBody)

		setLoading(true)

		fetch(url, {
			method: "POST",
			body: requestBody,
			headers: {
				'Content-Type': 'application/json',
				'Signature': Signature
			},
		})
		.then(fetchStatus)
		.then(response => response.json())
		.then((data) => {

			setLoading(false)

			console.log("ok")

			if (data.ErrCode === "0") {
				setListMenuSidebar(data.Result)
				return
			} else {
				if (data.ErrCode === "2") {
					setSessionMessage("Session Anda Telah Habis. Silahkan Login Kembali.");
                    setShowAlert(true);
					return;
				} else {
					setErrorMessageAlert(data.ErrMessage);
					setShowAlert(true);
					return;
				}
			}
		})
		.catch((error) => {
			setLoading(false)
			if (error.message === 401) {
				setErrorMessageAlert("Maaf anda tidak memiliki ijin untuk mengakses halaman ini.");
				setShowAlert(true);
				return false;
			} else if (error.message !== 401) {
				setErrorMessageAlert(AlertMessage.failedConnect);
				setShowAlert(true);
				return false;
			}
		});
    }
    
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>

			{SessionMessage !== "" ?
			<SweetAlert
				warning 
				show={ShowAlert}
				onConfirm={() => {
					setShowAlert(false)
					logout()
					window.location.href="/";
				}}
				btnSize="sm">
				{SessionMessage}
			</SweetAlert>
			:""}

			{SuccessMessage !== "" ?
			<SweetAlert 
				success 
				show={ShowAlert}
				onConfirm={() => {
					setShowAlert(false)
					setSuccessMessage("")
					history.replace("/overview")
				}}
				btnSize="sm">
				{SuccessMessage}
			</SweetAlert>
			:""}          

			{ErrorMessageAlert !== "" ?
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

			{ErrorMessageAlertLogout !== "" ?
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

			<CDBSidebar textColor="#fff" backgroundColor="#333">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
				<a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
					SIAM 1 Palembang
				</a>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>

						{Loading ?
						<div className="loader-container">
							<div className="spinner"></div>
						</div>
						:
						ListMenuSidebar.length > 0 ? ListMenuSidebar.map((item,index) => {
							var Icon = "";
							if (item.Menu === "Dashboard") {
								Icon = <FontAwesomeIcon icon={faGauge}/>
							} else if (item.Menu === "Guru") {
								Icon = <FontAwesomeIcon icon={faChalkboardTeacher}/>
							} else if (item.Menu === "Siswa") {
								Icon = <FontAwesomeIcon icon={faSchool}/>
							} else if (item.Menu === "User") {
								Icon = <FontAwesomeIcon icon={faPerson}/>
							}
							return <CDBSidebarMenuItem>
										<a href={item.Href} style={{ cursor:'pointer', textDecorationColor:'transparent' }}>
											<div>{Icon} {item.Menu}</div>
										</a>
									</CDBSidebarMenuItem>
							})
							:<div></div>}

						{/* {ListMenuSidebar.length > 0 && ListMenuSidebar.map((item,index) => {

							return <NavLink exact to="/admin/dashboard" activeClassName="">
										<CDBSidebarMenuItem icon="columns">
											<div>{item.Menu}</div>
										</CDBSidebarMenuItem>
									</NavLink>
						})} */}

						{/* <NavLink exact to="/admin/" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="table">Siswa</CDBSidebarMenuItem>
						</NavLink>

						<NavLink exact to="/profile" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
						</NavLink>

						<NavLink exact to="/analytics" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
						</NavLink>

						<NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
						</NavLink> */}

					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{ textAlign: 'center' }}>

				<div style={{ padding: '20px 5px', cursor:'pointer' }} onClick={() => logout()}><FontAwesomeIcon icon={faSignOutAlt}/> Log Out</div>

				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
    )
}

export default LeftMenu;

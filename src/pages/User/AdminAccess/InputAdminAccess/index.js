import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { Header, Footer, Input, Button, Gap, Dropdown } from '../../../../components';
import { useDispatch } from 'react-redux';
import { AlertMessage, paths } from '../../../../utils'
import { historyConfig, generateSignature, fetchStatus } from '../../../../utils/functions';
import { setForm } from '../../../../redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Col, Row, Form, ListGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Markup } from 'interweave';

const InputAdminAccess = () => {
    const history = useHistory(historyConfig);
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    // const [cookies, setCookie,removeCookie] = useCookies(['user']);
	const [cookies, setCookie,removeCookie] = useCookies(['user']);
	const [Name, setName] = useState("")
	const [Loading, setLoading] = useState(false)
	const [LoadingStatus, setLoadingStatus] = useState(false)
    const [IdIndex, setIdIndex] = useState("")
    const [isHovering, setIsHovering] = useState(false)
    const [isHoveringNoEdit, setIsHoveringNoEdit] = useState(false)

    const [AccessAdminLogin, setAccessAdminLogin] = useState("")

    const [UserLogin, setUserLogin] = useState("")
    const [Nama, setNama] = useState("")
    const [Password, setPassword] = useState("")
    const [RePassword, setRePassword] = useState("")
	
	const [ShowAlert, setShowAlert] = useState(true)
    const [SessionMessage, setSessionMessage] = useState("")
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [ErrorMessageAlert, setErrorMessageAlert] = useState("")
    const [ErrorMessageAlertLogout, setErrorMessageAlertLogout] = useState("")
    const [ValidationMessage, setValidationMessage] = useState("")


    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += scrollOffset;
        }
    };

	useEffect(() => {
        window.scrollTo(0, 0)

        // getListUser(1, "")

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

    const handleMouseOver = (Id, idx, position) => {
        var IdIndex = idx.IdVoucher

        if (position == "edit") {
            setIdIndex(Id)
            if (Id === IdIndex) {
                setIsHovering(true)
            }
        } else {
            setIdIndex(Id)
            setIsHoveringNoEdit(true)
        }
    };
    
    const handleMouseOut = () => {
        setIdIndex("")
        setIsHovering(false)
        setIsHoveringNoEdit(false)
        // setEditablePrice(false)
    };

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
		<div className="main-page" style={{backgroundColor:'white', marginTop:30, borderRadius:10, marginRight:20}}>
            {/* ALERT */}
            {SessionMessage != "" ?
            <SweetAlert 
                warning 
                show={ShowAlert}
                onConfirm={() => {
                    logout()
                    setShowAlert(false)
                    // setSessionMessage("")
                    window.location.href="admin/login";
                }}
                btnSize="sm">
                {SessionMessage}
            </SweetAlert>
            :""}

            {SuccessMessage != "" ?
            <SweetAlert 
                success 
                show={ShowAlert}
                onConfirm={() => {
                    setShowAlert(false)
                    setSuccessMessage("")
                    history.push("/user")
                }}
                btnSize="sm">
                {SuccessMessage}
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
            {ValidationMessage !== "" ?
            <SweetAlert
                show={ShowAlert}
                onConfirm={() => {
                    setShowAlert(false)
                    setValidationMessage("")
                }}
                onEscapeKey={() => setShowAlert(false)}
                onOutsideClick={() => setShowAlert(false)}
                btnSize="sm"
                >
                {() => (
                    <div>
                        <p style={{fontSize:'20px', textAlign:'left'}}><Markup content={ValidationMessage}/></p>
                    </div>
                )}
            </SweetAlert>
            :""}
            {/* END OF ALERT */}
            <Gap height={20} />
            <div style={{backgroundColor:'white', height:'auto', width:'100%', borderBottomLeftRadius:25, borderBottomRightRadius:25, padding:20, paddingTop:30}}>
                <div style={{display:'flex', justifyContent:'space-between', padding:30}}>
                    <div style={{display:'flex', justifyContent:'flex-start', color:'#61308C', fontWeight:'bold', paddingTop:10, cursor:'pointer'}} onClick={() => history.push('/user')} >
                        <div style={{ fontWeight:'bold' }}><FontAwesomeIcon icon={faArrowLeft} /> Back</div>
                    </div>
                </div>
                <div style={{padding:20}}>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div>
                            <div className='InputLabel'>User Login</div>
                                <div>
                                    <Input
                                        required
                                        value={UserLogin}
                                        onChange={event => setUserLogin(event.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div>
                            <div className='InputLabel'>Nama</div>
                                <div>
                                    <Input
                                        required
                                        value={Nama}
                                        onChange={event => setNama(event.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Gap height={20}></Gap>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div>
                                <div className='InputLabel'>Password</div>
                                <div>
                                    <Input 
                                        type="password"
                                        value={Password} 
                                        onChange={event=>setPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div>
                                <div className='InputLabel'>Re - Password</div>
                                <div>
                                    <Input 
                                        type="password"
                                        value={RePassword} 
                                        onChange={event=>setRePassword(event.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* <div style={{ color:'#61308C', fontWeight:'bold', paddingTop:30, display:'flex', alignItems:'center' }}>
                        Access 
                        &nbsp;
                        {InfoAccess ?
                        <img src={IconMinus} style={{ width:20, height:20, cursor:'pointer' }} onClick={() => setInfoAccess(false)}></img>
                        :
                        <img src={IconInfo} style={{ width:20, height:20, cursor:'pointer' }} onClick={() => setInfoAccess(true)}></img>
                        }
                    </div> */}
                    {/* <div>
                        <div style={{paddingTop:5}}>
                            <input type="radio" value="VIEWER"
                                style={{padding:10}}
                                checked={Access=="VIEWER"}
                                onChange={event => setAccess(event.target.value)}
                            /> Viewer
                            &nbsp;
                            &nbsp;
                            <input type="radio" value="CS"
                                style={{padding:10}}
                                checked={Access=="CS"}
                                onChange={event=>setAccess(event.target.value)}
                            /> CS
                            &nbsp;
                            &nbsp;
                            <input type="radio" value="EDITOR"
                                style={{padding:10}}
                                checked={Access=="EDITOR"}
                                onChange={event=>setAccess(event.target.value)}
                            /> Editor
                            &nbsp;
                            &nbsp;
                            <input type="radio" value="ADMINISTRATOR" 
                                style={{padding:10}}
                                checked={Access=="ADMINISTRATOR"}
                                onChange={event=>setAccess(event.target.value)}
                            /> Administrator
                        </div>
                    </div> */}

                    <Gap height={10}></Gap>

                    <hr/>

                    <Gap height={10}></Gap>

                </div>

                <Gap height={20}></Gap>

                <div style={{display:'flex', justifyContent:'flex-end', padding:20}}>
                    <Button style={{backgroundColor:'#3A379F', width:200, textAlign:'center'}}> Save Changes
                    </Button>
                </div>
            </div>
            <Gap height={10} />
        </div>
    )
}

export default InputAdminAccess;
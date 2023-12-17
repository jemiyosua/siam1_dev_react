import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Gap, Header, Input, Footer, Dropdown } from '../../components';
import './SaleProduct.css'
import { useDispatch } from 'react-redux';
import { Button, Card, CardDeck, Modal } from 'react-bootstrap';
import { setForm } from '../../redux';
import { paths } from '../../utils'
import { fetchStatus, historyConfig, generateSignature, FormatNumberBy3 } from '../../utils/functions';
import { EVoucher, DiscountMerchants, EarnPoints, SearchStarpoin, Playstore, Appstore, Partner01, Partner02, Partner03, Partner04, Partner05, Partner06, Partner07, Partner08, Partner09, Partner10, HomeBackgroundLg, IcSearch, IcLocationBar, HomeBackgroundMd, BannerPopup, IcCopy, StarMallLandingPage, StarMallRocketMallLandingPage, StarMallLihatSemua, StarMallMakananMinuman, StarMallElektronikGadget, StarMallPeralatanKantor, StarMallJasaService, StarMallLeftArrow, StarMallRightArrow, StarMallProduct1, StarMallProduct2, StarMallProduct3, StarMallProduct4, StarMallStarRating, StarMallButtonComingSoon, StarMallButtonViewMore, StarMallEasyUse, StarMallDelivery, StarMallEarnRedeemStarPoin, StarMallButtonSignUp, StarMallMobilMotor, StarMallProduct5, StarMallProduct6, StarMallProduct7, StarMallProduct8, StarMallRightArrowSaleProduct } from '../../assets';
import publicIP from 'react-native-public-ip';
// import { IconCloseGray } from '../../admin/assets';

const SaleProduct = () => {
    const history = useHistory(historyConfig);
    const dispatch = useDispatch();
    const [Search, setSearch] = useState("")
    const [Kota, setKota] = useState("")
    const [ListProduct, setListProduct] = useState([
        {
            "ProductId": "1",
            "ProductImage": <img src={StarMallProduct1} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "Sony",
            "ProductRating": "4.9",
            "ProductPrice": "6899000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "2",
            "ProductImage": <img src={StarMallProduct4} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "Keychron",
            "ProductRating": "4.9",
            "ProductPrice": "1599000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "3",
            "ProductImage": <img src={StarMallProduct5} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "Apple Watch",
            "ProductRating": "4.9",
            "ProductPrice": "4599000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "4",
            "ProductImage": <img src={StarMallProduct2} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "Xiaomi Watch",
            "ProductRating": "4.9",
            "ProductPrice": "3299000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "5",
            "ProductImage": <img src={StarMallProduct6} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "Harman Kardon",
            "ProductRating": "4.9",
            "ProductPrice": "5299000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "6",
            "ProductImage": <img src={StarMallProduct7} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "iPad",
            "ProductRating": "4.9",
            "ProductPrice": "11760000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "7",
            "ProductImage": <img src={StarMallProduct3} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "Bose",
            "ProductRating": "4.9",
            "ProductPrice": "4399000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
        {
            "ProductId": "8",
            "ProductImage": <img src={StarMallProduct8} className="img-fluid" style={{ width:'100%' }} />,
            "ProductName": "AirPods",
            "ProductRating": "4.9",
            "ProductPrice": "2299000",
            "ProductLocation": "Jakarta Pusat",
            "ProductProvide": "StarShop",
        },
       
    ])

	useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div>
            <Header></Header>

            {/* <div style={{ paddingBottom:60 }} /> */}

            <div className="container-fluid">
                <div className="row h-100" style={{ flex:1, display:'flex' }}>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="d-flex flex-column justify-content-space-between align-items-center h-100">
                            <div style={{ paddingBottom:50 }} />
                            <div className="d-flex justify-content-space-between align-items-center">
                                <div style={{ fontWeight:'bold', fontSize:24 }}>{'On Sale Now '}</div>
                                <div style={{ paddingRight:10 }} />
                                <img src={StarMallRightArrowSaleProduct} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        {/* <div className="d-flex flex-column justify-content-center align-items-center"> */}
                            <div className="container">
                                <div className="centered-container">
                                    <div className="row">
                                        {ListProduct.length > 0 && ListProduct.map((item,index) => {
                                            return <div className="col-sm-6 col-md-6 col-lg-4 w-100">
                                                {/* <div className="container"> */}
                                                    <div style={{ paddingBottom:30 }} />
                                                    <div style={{ backgroundColor:'#red', border:'2px solid #D1D0D0', borderWidth:1, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10, padding:15 }}>
                                                        <div>{item.ProductImage}</div>
                                                        <div style={{ paddingBottom:7 }} />
                                                        <div style={{ fontWeight:'bold', fontSize:24 }}>{item.ProductName}</div>
                                                        <div style={{ paddingBottom:7 }} />
                                                        <div style={{ display:'flex' }}>
                                                            <img src={StarMallStarRating}></img>
                                                            <div style={{ paddingRight:7 }} />
                                                            <div style={{ fontSize:14 }}>{item.ProductRating}/5</div>
                                                        </div>
                                                        <div style={{ paddingBottom:7 }} />
                                                        <div style={{ fontSize:24 }}>{'Rp ' + FormatNumberBy3(item.ProductPrice)}</div>
                                                        <div style={{ paddingBottom:7 }} />
                                                        <div style={{ fontSize:14 }}>{item.ProductLocation}</div>
                                                        <div style={{ paddingBottom:10 }} />
                                                        <div style={{ fontSize:14, fontWeight:'bold' }}>{item.ProductProvide}</div>
                                                        <div style={{ paddingBottom:10 }} />
                                                        <img src={StarMallButtonComingSoon} className="img-fluid" style={{ width:'100%', cursor:'pointer' }} onClick={() => history.push('/')} />
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div style={{ paddingBottom:60 }} />

            <Footer></Footer>

        </div>
    )
}

export default SaleProduct;

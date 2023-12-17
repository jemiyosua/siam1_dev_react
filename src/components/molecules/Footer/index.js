import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { LogoKominfo, Playstore, Appstore, IcEmail, IcPhone, IcLocation, Instagram, Twitter, Facebook, Youtube, Tiktok, IcStarmall, LogoStarMall, StarMallFacebook, StarMallInstagram, StarMallTwitter, StarMallYoutube, StarMallLogoStarPoin, StarMallButtonSignUp, StarMallEasyUse, StarMallDelivery, StarMallEarnRedeemStarPoin } from '../../../assets';
import './footer.css';
import { Gap, Header, Input, Dropdown } from '../../../components';

const Footer = ({}) => {
  	return (
    	<MDBFooter className='text-center text-lg-start' style={{ backgroundColor:'#F8F8F8' }}>

			<div style={{ backgroundColor:'#09A387' }}>

                <div style={{ paddingBottom:40 }} />

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div>
                                    <div style={{ fontWeight:'bold', fontSize:32, color:'#FFFFFF' }}>BELANJA DENGAN MUDAH</div>
                                    <div style={{ fontSize:16, color:'#FFFFFF' }}>Mulai buat akun & nikmati kemudahan belanja secara online</div>
                                </div>
                            </div>
                            {/* <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div style={{ border:'1px solid grey', borderRadius:5, display:'flex', flexDirection:'row', backgroundColor:'white' }}>
                                        <Input style={{ border:'none' }} placeholder="Name" />
                                    </div>

                                    <div style={{ paddingRight:15 }} />

                                    <div style={{ border:'1px solid grey', borderRadius:5, display:'flex', flexDirection:'row', backgroundColor:'white' }}>
                                        <Input style={{ border:'none' }} placeholder="Phone Number" />
                                    </div>

                                    <div style={{ paddingRight:15 }} />

                                    <div style={{ border:'1px solid grey', borderRadius:5, display:'flex', flexDirection:'row', backgroundColor:'white' }}>
                                        <Input style={{ border:'none' }} placeholder="Create PIN" />
                                    </div>

                                    <div style={{ paddingRight:15 }} />

                                    <img height='35' src={StarMallButtonSignUp} />
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div style={{ display:'flex' }}>
                        
                </div>

                <div style={{ paddingBottom:40 }} />

            </div>

            <div className="container-fluid h-100" style={{ backgroundColor:'#DEF7F3' }}>
                
                <div style={{ paddingBottom:60 }} />

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card-body">
                                <div style={{ display:'flex' }}>
                                    <div>
                                        <img src={StarMallEasyUse} />
                                    </div>
                                    <div style={{ paddingRight:10 }} />
                                    <div>
                                        <div style={{ fontSize:24, fontWeight:'bold', textAlign:'left' }}>Easy Use</div>
                                        <div style={{ textAlign:'left' }}>Just 3 step register you can start shopping now.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card-body">
                                <div style={{ display:'flex' }}>
									<div>
                                    	<img src={StarMallDelivery} />
                                    </div>
									<div style={{ paddingRight:10 }} />
                                    <div>
                                        <div style={{ fontSize:24, fontWeight:'bold', textAlign:'left' }}>Delivery</div>
                                        <div style={{ textAlign:'left' }}>Choose to have your items delivered to you, anywhere.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card-body">
                                <div style={{ display:'flex' }}>
                                    <div>
                                        <img src={StarMallEarnRedeemStarPoin} />
                                    </div>
                                    <div style={{ paddingRight:10 }} />
                                    <div>
                                        <div style={{ fontSize:24, fontWeight:'bold', textAlign:'left' }}>Earn & Redeem StarPoin</div>
                                        <div style={{ textAlign:'left' }}>Earn and redeem to eVoucher with favourite merchant.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ paddingBottom:60 }} />

            </div>

			<section className=''>
				<MDBContainer>
					<MDBRow style={{ paddingLeft:20, paddingTop:30, textAlign:'left' }}>
						<MDBCol sm="6" md="3" lg="3" xl="3" className='mx-auto mb-4'>
							<h5 className='text-uppercase fw-bold mb-4' style={{color:'black'}}> STARMALL</h5>
							<p>
								<a style={{color:'#626467'}}>About Us</a>
							</p>
							<p>
								<a style={{color:'#626467'}}>Shopping Guide</a>
							</p>
							<p>
								<a style={{color:'#626467'}}>Voucher Redemption</a>
							</p>
							<p>
								<a style={{color:'#626467'}}>Gifting & Engraving Services</a>
							</p>
						</MDBCol>

						<MDBCol sm="6" md="3" lg="3" xl="3" className='mx-auto mb-4'>
						<h6 className='text-uppercase fw-bold mb-4' style={{color:'black'}}>CUSTOMER SERVICE</h6>
						<p>
							<a href='/faq' style={{color:'#626467'}}>FAQ</a>
						</p>
						<p>
							<a style={{color:'#626467'}}>Order Tracking</a>
						</p>
						<p>
							<a style={{color:'#626467'}}>Delivery</a>
						</p>
						</MDBCol>

						<MDBCol sm="6" md="3" lg="3" xl="3" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4' style={{color:'black'}}>REDEMPTION BY STARPOIN</h6>
							<a href="https://starpoin.id/" target="_blank">
                                <img src={StarMallLogoStarPoin} />
                            </a>
						</MDBCol>

						<MDBCol sm="6" md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
						<h6 className='text-uppercase fw-bold mb-4' style={{color:'black'}}>CONTACT US</h6>
						<p>
							<img src={IcEmail} width="22" height="22" alt="Icon Location StarPoin"></img>{' '}
							{/* <a href="mailto:support@StarMall.id" style={{color:'#626467'}}>TBA</a> */}
							<a style={{color:'#626467'}}>TBA</a>
						</p>
						<p style={{color:'#626467'}}>
							<img src={IcPhone} width="22" height="22" alt="Icon Location StarPoin"></img>{' '}
							<a href="tel:+628888010722" style={{color:'#626467'}}>0888-8010-722</a>
						</p>
						<p style={{color:'#626467'}}>
                            <div style={{ display:'flex' }}>
                                <img src={IcLocation} width="22" height="22" alt="Icon Location StarPoin"></img>{' '}
                                Gedung Menara Tekno Jalan Fachrudin Nomor 19, Desa/Kelurahan Kampung Bali, Kec. Tanah Abang, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta, Kode Pos: 10250
                            </div>
						</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div style={{ paddingBottom:60 }} />

			<div style={{ backgroundColor:'#DEF7F3' }}>

				<div style={{ paddingBottom:60 }} />

				<div className="centered-container">
					<div style={{ display:'flex' }}>
						<img width="auto" height="25" src={StarMallFacebook} />
						<div style={{ paddingRight:10 }} />
						<img width="auto" height="25" src={StarMallInstagram} />
						<div style={{ paddingRight:10 }} />
						<img width="auto" height="25" src={StarMallTwitter} />
						<div style={{ paddingRight:10 }} />
						<img width="auto" height="25" src={StarMallYoutube} />
					</div>
				</div>

				<div style={{ paddingBottom:30 }} />

				<div className="centered-container">
					<img width="auto" height="30" src={IcStarmall} />
				</div>

				<div style={{ paddingBottom:30 }} />

				<div style={{ color:'#626467', fontSize:16 }}>Copyright © 2023 PT. Kreasi Retail Nusantara</div>

				<div style={{ paddingBottom:60 }} />

			</div>

        {/* <div style={{ backgroundColor: '#000000', paddingTop:50, paddingLeft:35, paddingRight:50, paddingBottom:50 }}>
            <div className='divFooterLg'>
				<div className='divFooterFollowUs'>Follow us.
                    <div style={{paddingLeft:17}}><a href="https://www.instagram.com/starpoin_id/?hl=en" aria-label="Instagram StarPoin"><img src={Instagram} width="28" height="28" alt="Instagram StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://twitter.com/starpoin_id" aria-label="Twitter StarPoin"><img src={Twitter} width="28" height="28" alt="Twitter StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://www.facebook.com/starpoin_id/" aria-label="Faceook StarPoin"><img src={Facebook} width="28" height="28" alt="Facebook StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://www.youtube.com/watch?v=gZ15UVjnFRI" aria-label="Youtube StarPoin"><img src={Youtube} width="28" height="28" alt="Youtube StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://www.tiktok.com/@starpoin.id?_t=8W6T2zapQEk&_r=1" aria-label="Tiktok StarPoin"><img src={Tiktok} width="28" height="28" alt="Tiktok StarPoin"></img></a></div>
                </div>
                <div className='divCopyRight'>Copyright @ 2023 PT. Star Poin Indonesia. All rights reserved.</div> 
            </div>
			<div className='divFooterXs'>
				<div style={{color:'white'}}>Follow us.</div>
				<div className='divFooterFollowUs'>
                    <div><a href="https://www.instagram.com/starpoin_id/?hl=en" aria-label="Instagram StarPoin"><img src={Instagram} width="28" height="28" alt="Instagram StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://twitter.com/starpoin_id" aria-label="Twitter StarPoin"><img src={Twitter} width="28" height="28" alt="Twitter StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://www.facebook.com/starpoin_id/" aria-label="Facebook StarPoin"><img src={Facebook} width="28" height="28" alt="Facebook StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://www.youtube.com/watch?v=gZ15UVjnFRI" aria-label="Youtube StarPoin"><img src={Youtube} width="28" height="28" alt="Youtube StarPoin"></img></a></div>
                    <div style={{paddingLeft:17}}><a href="https://www.tiktok.com/@starpoin.id?_t=8W6T2zapQEk&_r=1" aria-label="Tiktok StarPoin"><img src={Tiktok} width="28" height="28" alt="Tiktok StarPoin"></img></a></div>
                </div>
                <div className='divCopyRight'>Copyright @ 2023 PT. Star Poin Indonesia. All rights reserved.</div> 
            </div>
        </div> */}
    </MDBFooter>
  );
}

export default Footer
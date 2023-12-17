import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Gap, Header, Input, Footer, Dropdown } from '../../components';
import './Faq.css'
import { useDispatch } from 'react-redux';
// import { Button, Card, CardDeck, Modal } from 'react-bootstrap';
// import { setForm } from '../../redux';
// import { paths } from '../../utils'
import { historyConfig } from '../../utils/functions';
import { StarMallIconPlus } from '../../assets';
// import publicIP from 'react-native-public-ip';
// import { IconCloseGray } from '../../admin/assets';

const FAQ = () => {
    const history = useHistory(historyConfig);
    const dispatch = useDispatch();
    const [Search, setSearch] = useState("")
    const [Kota, setKota] = useState("")
    const [Faq1, setFaq1] = useState(false)
    const [Faq2, setFaq2] = useState(false)
    const [Faq3, setFaq3] = useState(false)
    const [Faq4, setFaq4] = useState(false)
    const [Faq5, setFaq5] = useState(false)
    const [Faq6, setFaq6] = useState(false)
    const [Faq7, setFaq7] = useState(false)
    const [Faq8, setFaq8] = useState(false)
    const [Faq9, setFaq9] = useState(false)
    const [Faq10, setFaq10] = useState(false)
    const [Faq11, setFaq11] = useState(false)


	useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div>
            <Header></Header>

            <div style={{ paddingBottom:60 }} />

            <div className="container d-flex justify-content-center">
                {/* <div className="card"> */}
                    <div className="card-body">
                        <div style={{ fontSize:24, fontWeight:'bold' }}>Petanyaan Umum (FAQ)</div>

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq1(!Faq1)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq1 ? 0 : 10, borderBottomRightRadius:Faq1 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Apa itu StarMall?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq1 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           StarMall adalah sebuah platform e-commerce di mana Anda bisa berbelanja berbagai kebutuhan Anda menggunakan poin dari StarPoin. Temukan produk Kebutuhan Sehari-Hari di StarMall atau telusuri pilihan produk dari berbagai kategori. 
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq2(!Faq2)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq2 ? 0 : 10, borderBottomRightRadius:Faq2 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Mengapa saya tidak bisa mendaftar dengan nomor handphone saya?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq2 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           Nomor handphone Anda mungkin sudah ditautkan ke akun Starmall yang ada. Nomor handphone hanya dapat didaftarkan dalam 1 (satu) akun Starmall (sama untuk alamat email).<br />
                           Ada beberapa kemungkinan alasan mengapa nomor handphone Anda mungkin sudah ditautkan ke akun Starmall yang ada :<br />
                           a. Anda sudah memiliki akun dengan nomor handphone yang sama<br />
                           Anda mungkin sudah mendaftar dan membuat akun Starmall sebelumnya. Cobalah untuk mengingat kata sandi dan masuk kembali ke akun yang ada. Jika Anda lupa kata sandi Anda, pelajari cara mengatur ulang kata sandi Anda.<br />
                           b. Nomor handphone Anda didaur ulang<br/>
                           Karena nomor handphone dapat didaur ulang oleh penyedia layanan operator telepon, ada kemungkinan bahwa sebelumnya, nomor handphone Anda telah dimiliki oleh orang lain dan sudah pernah didaftarkan di Starmall oleh pemilik sebelumnya.<br/>
                           Selama proses pendaftaran, Anda dapat mengklaim kembali nomor handphone. Setelah Anda melakukannya, Kode Verifikasi (OTP) akan dikirim ke nomor handphone Anda dan dapat melanjutkan proses pendaftaran.<br/>
                           c. Nomor handphone digunakan akun lain<br/>
                           Apabila nomor Handphone Anda sudah cukup lama dimiliki, mohon periksa kembali apakah Anda atau kerabat Anda pernah mendaftarkan nomor Handphone tersebut untuk akun Starmall lain.<br/>
                           Jangan khawatir, Anda dapat log in seperti biasa ke akun Anda dengan tetap menggunakan nomor handphone tersebut. Setelah Anda log in, Pengguna yang memiliki nomor handphone sebelumnya tidak akan memiliki akses ke akun Starmall Anda.<br/>
                           Anda dapat mendaftarkan ulang nomor handphone yang sebelumnya terhubung dengan akun lain ke akun yang Anda pakai sekarang. Apabila Anda gagal mendaftarkan ulang nomor handphone tersebut, kemungkinan nomor handphone tersebut terhubung dengan akun yang memenuhi salah satu kriteria berikut:<br/>
                           a. Akun hanya dapat log in menggunakan Kode Verifikasi (OTP).<br/>
                           b. Akun dibekukan/diblokir.<br/>
                           c. Akun dalam proses refund yang sedang berjalan.<br/>
                           d. Akun dalam proses pemesanan yang sedang berjalan.<br/>
                           Catatan :<br/>
                           Demi menjaga keamanan sistem dan Pengguna, Starmall dapat menolak pendaftaran akun baru atau perubahan nomor Handphone pada akun yang telah terdaftar.<br/>
                           Silakan menggunakan nomor handphone lain atau hubungi Customer Service Starmall jika terdapat kendala dalam membuat akun/mengubah nomor handphone  Anda. Baca Informasi lengkap mengenai perubahan nomor handphone.
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq3(!Faq3)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq3 ? 0 : 10, borderBottomRightRadius:Faq3 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana cara menghubungi Layanan Pengaduan Konsumen?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq3 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           Anda dapat menghubungi Layanan Pengaduan Konsumen melalui kontak di bawah ini:<br/>
                           PT Kreasi Retail Nusantara<br/>
                           Kontak : 0888 8010 722<br/>
                           Live Chat pada Pusat Bantuan di website Starmall. <br/>
                           DIREKTORAT JENDERAL PERLINDUNGAN KONSUMEN DAN TERTIB NIAGA KEMENTERIAN PERDAGANGAN RI<br/>
                           WhatsApp: (+62) 85311111010<br/>
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq4(!Faq4)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq4 ? 0 : 10, borderBottomRightRadius:Faq4 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana caranya saya dapat memberikan saran atau masukan ke Starmall?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq4 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           Untuk memberikan saran dan masukan kepada Starmall, Anda dapat menghubungi Customer Service Starmall secara langsung. Anda akan menerima balasan dalam waktu 3-5 hari kerja.<br/>
                           Kami sangat menghargai saran dan masukan apa pun, dan akan sangat membantu jika Anda dapat menjelaskan secara detail kepada Starmall untuk memahami kendala Anda.
                        </div>}

                        <div style={{ paddingBottom:10 }} />
                        
                        <div style={{ cursor:'pointer' }} onClick={() => setFaq5(!Faq5)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq5 ? 0 : 10, borderBottomRightRadius:Faq5 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana cara mengajukan pengembalian barang/dana?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq5 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           a. Berikut solusi yang tersedia (tergantung alasan pengembalian barang/dana yang Anda pilih):<br/>
                           - Solusi Pengembalian Barang dan Dana hanya dapat dipilih untuk pengajuan pembelian dengan alasan produk salah, produk cacat, produk tidak berfungsi dengan baik, produk tidak original, dan - produk berbeda dengan deskripsi/foto.<br/>
                           - Solusi Pengembalian Dana (sebagian/penuh) Tanpa Pengembalian Barang hanya dapat dipilih untuk pengajuan pengembalian dengan alasan semua pesanan tidak sampai, produk sampai namun tidak lengkap/kosong, produk di bawah kategori barang mudah rusak, serta produk dan layanan Digital.<br/>
                           b.Waktu proses pengembalian barang/dana:<br/>
                           Pengembalian barang/dana akan diproses dalam 3-5 hari kerja setelah pesanan yang dikembalikan sampai di Toko Starmall.<br/>
                           Catatan :<br/>
                           a. Jika melakukan pembelian dengan Voucher, Anda akan mendapatkan pengembalian dana sebesar harga produk setelah dikurangi dengan nilai Voucher.<br/>
                           b. Informasi yang perlu Anda isi dalam pengajuan pengembalian barang/dana dapat berbeda-beda, tergantung alasan pengembalian yang dipilih (Contoh: Anda tidak perlu menyertakan bukti untuk pengajuan pengembalian barang/dana dengan alasan semua pesanan tidak sampai).<br/>
                           c. Seluruh langkah pengajuan permintaan pengembalian barang/dana adalah sama dan hanya berbeda dalam hal bukti pendukung.<br/>
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq6(!Faq6)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq6 ? 0 : 10, borderBottomRightRadius:Faq6 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana cara saya melakukan pemesanan?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq6 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           a. Pesan Online<br/>
                           - Kunjungi website kita www. starmall.id<br/>
                           - Login/Daftar (bagi pengunjung baru).<br/>
                           - Pilih jenis jasa yang dibutuhkan.<br/>
                           - Masukan data pemesan dan barang yang mau dipesan.<br/>
                           - Konfirmasi Pemesanan dan Lakukan Pembayaran Online.<br/>
                           b. Pesan Offline datang langsung ke toko Starmall<br/>
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq7(!Faq7)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq7 ? 0 : 10, borderBottomRightRadius:Faq7 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Apakah Bisa Melakukan Perubahan/Pembatalan Pesanan ?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq7 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           Perubahan dan pembatalan pesanan dapat dilakukan oleh apabila belum melakukan pembayaran atau barang yang dipesan tidak tersedia. Apabila ada kesalahan pesanan akibat kelalaian sendiri, maka pesanan tidak bisa dibatalkan.
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq8(!Faq8)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq8 ? 0 : 10, borderBottomRightRadius:Faq8 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana Jika Barang yang dipesan Tidak Tersedia?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq8 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           Pesanan akan dibatalkan dan uang akan dikembalikan 100% (refund)
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq9(!Faq9)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq9 ? 0 : 10, borderBottomRightRadius:Faq9 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana Jika Ingin Melakukan Pemesanan Dalam Jumlah Besar?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq9 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                           Untuk melakukan pemesanan dalam jumlah beasr dapat menghubungi kami di ...
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq10(!Faq10)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq10 ? 0 : 10, borderBottomRightRadius:Faq10 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Apa saja jasa service yang disediakan Starmall?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq10 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                            Kami menyediakan beragam jasa service seperti Clean & Care (Cuci AC, Fogging, service kulkas, dll). Kami juga menyediakan jasa lainnya seperti desain interior eksterior, perpanjang STNK, baliknama kendaraan, dll. 
                        </div>}

                        <div style={{ paddingBottom:10 }} />

                        <div style={{ cursor:'pointer' }} onClick={() => setFaq11(!Faq11)}>
                            <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:Faq11 ? 0 : 10, borderBottomRightRadius:Faq11 ? 0 : 10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <div style={{ fontWeight:'bold', fontSize:16, color:'#09A387' }}>Bagaimana cara saya melakukan pembayaran?</div>
                                    <img src={StarMallIconPlus} />
                                </div>
                            </div>
                        </div>
                        {Faq11 &&
                        <div style={{ border:'2px solid #D1D0D0', padding:10, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                            Kami menyediakan beragam jenis pembayaran yaitu :<br/>
                            a. Scan QRIS<br/>
                            b. Transfer<br/>
                            Nama Bank : Bank Sinarmas<br/>
                            Atas Nama : PT. Kreasi Retail Nusantara<br/>
                            Nomor Rekening : 00 570 380 98<br/>
                            c. Cash (transaksi di Toko).
                        </div>}

                    </div>
                {/* </div> */}
            </div>

            <div style={{ paddingBottom:60 }} />

            <Footer></Footer>

        </div>
    )
}

export default FAQ;

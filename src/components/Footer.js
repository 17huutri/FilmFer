import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>





                <div className="container-fluid bg-light text-dark mt-5 pt-5">
                    <div className="row px-xl-5 pt-5">
                        <div className="col-lg-12 col-md-12 mb-5 pr-3 pr-xl-5">
                            <a href="" className="text-decoration-none">
                                <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">TP</span>Cinema</h1>
                            </a>

                        </div>

                        <div class="container-footer">
                            <div class="row">
                                <div class="col-4 col-md-6 col-sm-12">
                                    <div class="content">
                                        <a href="#" class="logo">
                                            <i class='bx bx-movie-play bx-tada main-color'></i>TP<span class="main-color">- Hot News</span>
                                        </a>

                                        <p>Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất <br></br>
                                            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông thường - đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)<br></br>
                                            Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)<br></br>
                                            Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao<br></br>
                                            Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online<br></br>
                                        </p>

                                        <div class="social-list">
                                            <a href="#" class="social-item">
                                                <i class='bx bxs-envelope' >huutri157@gmail.com</i>
                                            </a><br></br>


                                            <a href="#" class="social-item">
                                                <i class='bx bxs-phone' >0344 462 919</i><br></br>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-8 col-md-6 col-sm-12">
                                    <div class="row">
                                        <div class="col-3 col-md-6 col-sm-6">
                                            <div class="content">
                                                <p><b>TP</b></p>
                                                <ul class="footer-menu">
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">My profile</a></li>
                                                    <li><a href="#">Pricing plans</a></li>
                                                    <li><a href="#">Contacts</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-3 col-md-6 col-sm-6">
                                            <div class="content">
                                                <p><b>Browse</b></p>
                                                <ul class="footer-menu">
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">My profile</a></li>
                                                    <li><a href="#">Pricing plans</a></li>
                                                    <li><a href="#">Contacts</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-3 col-md-6 col-sm-6">
                                            <div class="content">
                                                <p><b>Help</b></p>
                                                <ul class="footer-menu">
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">My profile</a></li>
                                                    <li><a href="#">Pricing plans</a></li>
                                                    <li><a href="#">Contacts</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-sm-12">
                            <div className="row d-flex">

                                <div className="col-md-8 mb-12">
                                    <h5 className="font-weight-bold text-dark mb-3">Newsletter</h5>
                                    <form action="">
                                        <div className="form-group">
                                            <input type="text" className="form-control border-solid py-4" placeholder="Your Name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-solid py-4" placeholder="Your Email" required="required" />
                                        </div>
                                        <div>
                                            <button class="btn btn-primary btn-block border-0 py6" type="submit">SEND</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div >
                </div >
                <div className="row border-top border-light mx-xl-5 py-4">
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-dark">
                            &copy; <a className="text-primary font-weight-semi-bold" href="#">Hoa Giay</a>. All Rights Reserved. Designed by
                            <a className="text-success font-weight-semi-bold" href="https://htmlcodex.com">Tri Pham</a>
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="img/payments.png" alt="" />
                    </div>
                </div>
            </div >

        );
    }
}

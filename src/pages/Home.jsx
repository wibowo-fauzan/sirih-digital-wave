import React from 'react';
import '../assets/css/sirih-digital-wave-design-system.css';
import '../assets/css/sirih-digital-wave-design-system.css.map';
import '../assets/css/sirih-digital-wave-design-system.min.css';
import '../assets/css/sirih-digital-wave-icons.css';
import '../assets/css/sirih-digital-wave-svg.css';
import '../assets/js/soft-design-system';
import '../assets/css/responsive/homeresponsive.css'
import NavBar from '../components/Nav';
import Header from '../components/Header';
import Iconshiping from '../components/SVG/Iconshiping';
import Iconprice from '../components/SVG/Iconprice';
import Iconlayoutresponsive from '../components/SVG/Iconlayoutresponsive';
import FaPager from '../components/SVG/FaPager';
import PiTrolleySuitcaseDuotone from '../components/SVG/Pitroll';
import Compnay from '../components/SVG/Compnay';
import Footer from '../components/Footer';

const Home = () => {
return (
<>
  <NavBar />
  <Header />

  <section>
    <div className="container-fluid mt-lg-4 space0-responsive">
      <div className="row">
        <div className="row justify-content-center text-center my-sm-5">
          <div className="col-lg-6">
            <h2 className="text-dark">Kamu Butuh Website?</h2>
            <p className="lead width0-text-responsive">Dalam Pembuatan Website Pilih Yang Tepat Dan Terpercaya...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="mb-lg-3">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="info-horizontal bg-gradient-primary border-radius-xl p-4">
            <div className="icon">
              <Iconshiping />
            </div>
            <div className="description ps-5">
              <h5 className="text-white">SEO Website</h5>
              <p className="text-white">meningkatkan peringkat dan visibilitas sebuah website di mesin pencari seperti
                Google. Tujuan utama SEO adalah membuat website lebih mudah ditemukan oleh pengguna yang mencari
                informasi, produk, atau layanan yang relevan.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-lg-1 mt-lg-0 mt-4">
          <div className="info-horizontal bg-gradient-primary border-radius-xl p-4">
            <div className="icon">
              <Iconlayoutresponsive />
            </div>
            <div className="description ps-5">
              <h5 className="text-white">Responsive Website</h5>
              <p className="text-white">Desain dan pengembangan situs web memungkinkan tampilan halaman menyesuaikan
                dengan ukuran dan orientasi layar. Website responsif terlihat dan berfungsi optimal di berbagai
                perangkat, seperti desktop, laptop, tablet, dan smartphone. </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-lg-0 mt-4">
          <div className="info-horizontal bg-gradient-primary border-radius-xl p-4">
            <div className="icon">
              <Iconprice />
            </div>
            <div className="description ps-5">
              <h5 className="text-white">Harga Terjangkau</h5>
              <p className="text-white">menawarkan layanan pembuatan website profesional dengan harga terjangkau. Kami
                menyediakan berbagai solusi digital, termasuk desain responsif, optimasi SEO, dan pengelolaan konten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid space1-responsive">
      <div className="page-header min-vh-50 my-sm-3 mb-3 border-radius-xl"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/flower.jpg')" }}>
        <span className="mask bg-gradient-dark"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-lg-5 pding0-responsive">
              <h4 className="text-white mb-0">Built by developers</h4>
              <h1 className="text-white">SIRIH DIGITAL WAVE</h1>
              <p className="lead text-white opacity-8 padding0-responsive text0-responsive">menawarkan layanan pembuatan website profesional dan berbagai
                solusi digital lainnya. Dapatkan website yang menarik dan fungsional yang dirancang khusus untuk
                kebutuhan Anda. Kunjungi kami untuk mengubah ide Anda menjadi kenyataan digital.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-lg-7 py-5 mb-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Layanan</h2>
          <p>Menyediakan Layanan Lainya.</p>
        </div>
        <div className="col-lg-6 text-end d-flex flex-column justify-content-center">
          <button type="button" className="btn bg-gradient-info mb-0 ms-lg-auto me-lg-0 me-auto mt-lg-0 mt-2">Contact
            Us</button>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-sm-6 col-lg-4 mt-lg-0 mt-4">
          <FaPager />
          {/* <img className="width-48-px mb-3 mx-auto text-center justify-center align-items-center" src={FaPager}
            alt="atlassian" /> */}
          <h5>LANDING PAGE</h5>
          <p className="text-sm">Optimalkan konversi dan pengalaman pengguna dengan desain landing page yang menarik dan
            responsif.</p>
        </div>
        <div className="col-sm-6 col-lg-4 mt-lg-0 mt-4">
          <PiTrolleySuitcaseDuotone />
          {/* <img className="width-48-px mb-3 mx-auto text-center justify-center align-items-center" src={imglynan2}
            alt="asana" /> */}
          <h5>E - COMMERCE</h5>
          <p className="text-sm">Meningkatkan penjualan dan pengalaman pelanggan dengan solusi e-commerce yang terbukti.
          </p>
        </div>
        <div className="col-sm-6 col-lg-4 mt-lg-0 mt-4">
          <Compnay />
          {/* <img className="width-48-px mb-3 mx-auto text-center justify-center align-items-center" src={imglynan1}
            alt="shopify" /> */}
          <h5>COMPANY PROFILE </h5>
          <p className="text-sm">Kembangkan budaya perusahaan yang lebih baik dengan panduan dan latihan terbukti.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="py-3 mb-5 mt-5">
    <div className="bg-gradient-primary position-relative m-3 border-radius-xl top0-responsve">
      <div className="container pb-lg-9 pb-10 pt-7 position-relative z-index-2">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h3 className="text-white">Lihat harga kami</h3>
            <p className="text-white">Harga terjangkau,Dan berkualitas</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-n8">
      <div className="container">
        <div className="tab-content tab-space">
          <div className="tab-pane active" id="monthly">
            <div className="row top-card0-responsve">

              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card shadow-lg">
                  <div className="text-center pt-4 pb-3">
                    <span className="badge rounded-pill bg-light text-dark">Basic Plan</span>
                    <h1 className="font-weight-bold mt-2">
                      <small>1.5xx.xxx</small>
                    </h1>
                  </div>
                  <div className="card-body text-lg-start text-center pt-0">

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">ONE MONTH BUILD WEBSITE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST ONE PAGE LANDING PAGE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">RESPONSIVE WEBSITE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">SOCIAL MEDIA LINK</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">DOMAIN WEBISTE / YEAR</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">HOSTING WEBSITE / MONTH</span>
                      </div>
                    </div>

                    <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0">
                      Buy
                      <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card shadow-lg">
                  <div className="text-center pt-4 pb-3">
                    <span className="badge rounded-pill bg-light text-dark">PREMIUM</span>
                    <h1 className="font-weight-bold mt-2">
                      <small>2.xxx.xxx</small>
                    </h1>
                  </div>
                  <div className="card-body text-lg-start text-center pt-0">

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">ONE MONTH BUILD WEBSITE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST PAGE LANDING PAGE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">RESPONSIVE WEBSITE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">SOCIAL MEDIA LINK</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">DOMAIN WEBISTE / YEAR</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">HOSTING WEBSITE / MONTH</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST PAGE BLOGGER</span>
                      </div>
                    </div>

                    <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0">
                      Buy
                      <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card shadow-lg">
                  <div className="text-center pt-4 pb-3">
                    <span className="badge rounded-pill bg-light text-dark">HOT OFFER</span>
                    <h1 className="font-weight-bold mt-2">
                      <small>4.xxx.xxx</small>
                    </h1>
                  </div>
                  <div className="card-body text-lg-start text-center pt-0">

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">ONE MONTH BUILD WEBSITE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST PAGE LANDING PAGE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">RESPONSIVE WEBSITE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">SOCIAL MEDIA LINK</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">DOMAIN WEBISTE / YEAR</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">HOSTING WEBSITE / MONTH</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST PAGE BLOGGER / E - COMMERCE</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST ROLE ACCOUNT</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">REQUEST API</span>
                      </div>
                    </div>

                    <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0">
                      Buy
                      <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="tab-pane" id="annual">
            <div className="row">
              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-header text-center pt-4 pb-3">
                    <span className="badge rounded-pill bg-light text-dark">Starter</span>
                    <h1 className="font-weight-bold mt-2">
                      <small>RP.</small>2.xxx.xxx
                    </h1>
                  </div>
                  <div className="card-body text-lg-start text-center pt-0">

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">2 team members</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">2 team members</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">20GB Cloud storage</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                        <i className="fas fa-minus"></i>
                      </div>
                      <div>
                        <span className="ps-3">Integration help</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                        <i className="fas fa-minus"></i>
                      </div>
                      <div>
                        <span className="ps-3">Sketch Files</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                        <i className="fas fa-minus"></i>
                      </div>
                      <div>
                        <span className="ps-3">API Access</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                        <i className="fas fa-minus"></i>
                      </div>
                      <div>
                        <span className="ps-3">Complete documentation</span>
                      </div>
                    </div>

                    <a href="javascript:;" className="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                      Join
                      <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-header text-center pt-4 pb-3">
                    <span className="badge rounded-pill bg-light text-dark">Premium</span>
                    <h1 className="font-weight-bold mt-2">
                      <small>$</small>159
                    </h1>
                  </div>
                  <div className="card-body text-lg-start text-center pt-0">
                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">10 team members</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">40GB Cloud storage</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">Integration help</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">Sketch Files</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                        <i className="fas fa-minus"></i>
                      </div>
                      <div>
                        <span className="ps-3">API Access</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                        <i className="fas fa-minus"></i>
                      </div>
                      <div>
                        <span className="ps-3">Complete documentation</span>
                      </div>
                    </div>

                    <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0">
                      Try Premium
                      <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-header text-center pt-4 pb-3">
                    <span className="badge rounded-pill bg-light text-dark">Enterprise</span>
                    <h1 className="font-weight-bold mt-2">
                      <small>$</small>399
                    </h1>
                  </div>
                  <div className="card-body text-lg-start text-center pt-0">
                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">Unlimited team members</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">100GB Cloud storage</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">Integration help</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">Sketch Files</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">API Access</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                      <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                        <i className="fas fa-check opacity-10"></i>
                      </div>
                      <div>
                        <span className="ps-3">Complete documentation</span>
                      </div>
                    </div>

                    <a href="javascript:;" className="btn btn-icon bg-gradient-success d-lg-block mt-3 mb-0">
                      Join
                      <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</>
);
};

export default Home;

<template>
    <div>
      <!--====== SEARCH BOX PART START ======-->

      <div class="search-overlay">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="search-overlay-layer"></div>
            <div class="search-overlay-layer"></div>
            <div class="search-overlay-layer"></div>

            <div class="search-overlay-close">
              <span class="search-overlay-close-line"></span>
              <span class="search-overlay-close-line"></span>
            </div>

            <div class="search-overlay-form">
              <form>
                <input type="text" class="input-search" placeholder="Search here...">
                <button type="submit"><i class='far fa-search'></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!--====== SEARCH BOX PART ENDS ======-->

      <!--====== Sidebar Modal PART START ======-->

      <div class="sidebar-modal">
        <div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i class="far fa-times"></i>
                            </span>
                </button>
                <h2 class="modal-title" id="myModalLabel2">
                  <a href="index.html">
                    <img src="/static/images/logo-2.png" alt="Logo">
                  </a>
                </h2>
              </div>
              <div class="modal-body">
                <div class="sidebar-modal-widget">
                  <h3 class="title">About Us</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores doloribus eum laboriosam praesentium delectus unde magni aut perspiciatis cumque deserunt dolore voluptate, autem pariatur? Dicta pariatur.</p>
                </div>
                <div class="sidebar-modal-widget">
                  <h3 class="title">Additional Links</h3>
                  <ul>
                    <li>
                      <a href="log-in.html">Log In</a>
                    </li>
                    <li>
                      <a href="sign-up.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
                <div class="sidebar-modal-widget">
                  <h3 class="title">Contact Info</h3>
                  <ul class="contact-info">
                    <li>
                      <i class="far fa-map-marker-alt"></i>
                      Address
                      <span>205 Fida Walinton, Tongo Street Front The USA</span>
                    </li>
                    <li>
                      <i class="far fa-envelope"></i>
                      Email
                      <span>hello@ecorik.com</span>
                    </li>
                    <li>
                      <i class="far fa-phone"></i>
                      Phone
                      <span>+882-569-756, +265-497-466</span>
                    </li>
                  </ul>
                </div>
                <div class="sidebar-modal-widget">
                  <h3 class="title">Connect With Us</h3>
                  <ul class="social-list">
                    <li>
                      <a href="#">
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class='fab fa-google-plus-g'></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--====== PAGE TITLE PART START ======-->

      <section class="page-title-area bg_cover d-flex align-items-center" style="background-image: url(/static/images/page-bg.jpg)">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-title-content">
                <h3 class="title">Our Project</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Our Project</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--====== PAGE TITLE PART ENDS ======-->

      <!--====== ABOUT US PART START ======-->

      <section class="about-us-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-thumb">
                <img src="/static/images/about-thumb.jpg" alt="about">
                <img class="text" src="/static/images/about-text.png" alt="">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content ml-70">
                <span>About Us</span>
                <h3 class="title">We Are Best Award Winning Farms</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate santiu doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explibo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odiaut fugit, sed quia consequuntur magni dolores eos qui ratione luptatem sequi nesciunt. Neque porro quisquam est, qui dolorem </p>
                <ul>
                  <li>
                    <span><span class="counter">85</span>%</span>
                    <p>Satisfied Customers</p>
                  </li>
                  <li>
                    <span><span class="counter">92</span>%</span>
                    <p>Vegetables Natural Food</p>
                  </li>
                  <li>
                    <span><span class="counter">79</span>%</span>
                    <p>Panning And Growth</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--====== ABOUT US PART ENDS ======-->

      <!--====== GALLERY PART START ======-->

      <section class="gallery-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
              <div class="section-title text-center">
                <span>Our Gallery</span>
                <h3 class="title">Our Latest Product To Build Health</h3>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="gallery-item mt-30">
                <div class="gallery-thumb">
                  <img src="/static/images/gallery-1.jpg" alt="gallery">
                </div>
                <div class="gallery-content">
                  <h5 class="title">Cow & Meat</h5>
                  <span>Fresh Meat</span>
                  <a href="#"><i class="far fa-angle-double-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="gallery-item mt-90">
                <div class="gallery-thumb">
                  <img src="/static/images/gallery-2.jpg" alt="gallery">
                </div>
                <div class="gallery-content">
                  <h5 class="title">Natural Vegetable</h5>
                  <span>Vegetables Organic</span>
                  <a href="#"><i class="far fa-angle-double-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="gallery-item mt-150">
                <div class="gallery-thumb">
                  <img src="/static/images/gallery-3.jpg" alt="gallery">
                </div>
                <div class="gallery-content">
                  <h5 class="title">Fresh Rice</h5>
                  <span>Fresh Meat</span>
                  <a href="#"><i class="far fa-angle-double-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="gallery-btn text-center mt-80">
                <a class="main-btn" href="#">see more gallery <i class="far fa-plus"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="shape-1">
          <img src="/static/images/shape/shape-1.png" alt="">
        </div>
        <div class="shape-2">
          <img src="/static/images/shape/shape-2.png" alt="">
        </div>
      </section>

      <!--====== GALLERY PART ENDS ======-->

      <!--====== FARMS PART START ======-->

      <section class="farms-area d-flex align-items-center bg_cover" style="background-image: url(/static/images/farms.jpg)">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="farms-content">
                <span>Looking Organic Food ?</span>
                <h3 class="title">Want To  Fresh & Organic Food</h3>
                <a class="main-btn" href="#">visit our farms <i class="far fa-plus"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--====== FARMS PART ENDS ======-->

      <!--====== GALLERY PART START ======-->

      <section class="gallery-area gallery-3-area">
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-lg-6 col-md-8 col-sm-9">
              <div class="section-title text-left">
                <span>Our Gallery</span>
                <h3 class="title">Our Latest Product To Build Health</h3>
              </div>
            </div>
          </div>
          <div class="row gallery-active">
            <div class="col-lg-4">
              <div class="gallery-box mt-30">
                <img src="/static/images/gallery-4.jpg" alt="gallery">
                <div class="gallery-overlay d-flex justify-content-center align-items-end">
                  <div class="item text-center">
                    <h5 class="title">Natural Vegetable</h5>
                    <span>Vegetables Organic</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-box mt-30">
                <img src="/static/images/gallery-5.jpg" alt="gallery">
                <div class="gallery-overlay d-flex justify-content-center align-items-end">
                  <div class="item text-center">
                    <h5 class="title">Food Health Check</h5>
                    <span>Food Medical</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-box mt-30">
                <img src="/static/images/gallery-6.jpg" alt="gallery">
                <div class="gallery-overlay d-flex justify-content-center align-items-end">
                  <div class="item text-center">
                    <h5 class="title">Organic Fresh Food</h5>
                    <span>Vegetables Organic</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-box mt-30">
                <img src="/static/images/gallery-5.jpg" alt="gallery">
                <div class="gallery-overlay d-flex justify-content-center align-items-end">
                  <div class="item text-center">
                    <h5 class="title">Food Health Check</h5>
                    <span>Food Medical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--====== GALLERY PART ENDS ======-->

      <!--====== BRAND PART START ======-->

      <div class="brand-area pb-130">
        <div class="container">
          <div class="row brand-active">
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-1.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-2.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-3.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-4.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-5.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-6.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-2.png" alt="brand">
              </div>
            </div>
            <div class="col-lg-2">
              <div class="brand-item text-center">
                <img src="/static/images/brand-3.png" alt="brand">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--====== BRAND PART ENDS ======-->

      <!--====== QUESTIONS PART START ======-->

      <div class="questions-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="questions-box">
                <div class="row justify-content-end">
                  <div class="col-lg-8">
                    <div class="questions-box-item">
                      <div class="item">
                        <h3 class="title"><span>Have Any Questions ?</span> Call Us +012 (345) 678 99</h3>
                        <p>Web Development Reading List Tor 7, Designing Depth,</p>
                        <i class="far fa-phone"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {}
  }
}
</script>

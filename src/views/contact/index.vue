<template>
    <div>
      <!--====== PRELOADER PART START ======-->

      <!--<div id="loading">-->
        <!--<div id="loading-center">-->
          <!--<div id="loading-center-absolute">-->
            <!--<div class="object" id="object_one"></div>-->
            <!--<div class="object" id="object_two"></div>-->
            <!--<div class="object" id="object_three"></div>-->
            <!--<div class="object" id="object_four"></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--====== PRELOADER PART ENDS ======-->

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
                <h3 class="title">Contact Us</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--====== PAGE TITLE PART ENDS ======-->

      <!--====== CONTACT MASSAGE PART START ======-->

      <section class="contact-massage-area pt-130 pb-130">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-massage">
                <div class="row justify-content-end">
                  <div class="col-lg-8">
                    <div class="contact-massage-item ml-35">
                      <form id="contact-form" action="/static/contact.php" method="post">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="massage-title">
                              <h3 class="title">Leave A Message</h3>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="input-box item-1 mt-20">
                              <input type="text" placeholder="Your Full Name">
                              <i class="far fa-user"></i>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="input-box item-2 mt-20">
                              <input type="email" placeholder="Your Email">
                              <i class="far fa-envelope"></i>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-box mt-20">
                              <input type="text" placeholder="Your Subject">
                              <i class="far fa-edit"></i>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-box mt-20">
                              <textarea name="#" id="#" cols="30" rows="10" placeholder="Write Message"></textarea>
                              <i class="far fa-pen"></i>
                              <button type="submit" class="main-btn" href="#">send message <i class="far fa-plus"></i></button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <p class="form-message"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--====== CONTACT MASSAGE PART ENDS ======-->

      <!--====== CONTACT INFO PART START ======-->

      <div class="contact-info-area">
        <div class="container" style="height: 400px">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-info">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="contact-info-item text-center">
                      <i class="fal fa-map-marked-alt"></i>
                      <ul>
                        <li>27 Division St, New York,</li>
                        <li>NY 10002,USA</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="contact-info-item text-center">
                      <i class="fal fa-envelope"></i>
                      <ul>
                        <li>support@gmail.com</li>
                        <li>www.organic.net</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="contact-info-item text-center">
                      <i class="fal fa-phone"></i>
                      <ul>
                        <li>+08 (964) 712365</li>
                        <li>897654100</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--<div class="map">-->
          <!--<iframe src="https://ditu.google.cn/maps/embed?pb=!1m14!1m12!1m3!1d65591.5120359833!2d90.37279590551098!3d23.73981299163866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1583607237227!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen=""></iframe>-->
        <!--</div>-->
      </div>

      <!--====== CONTACT INFO PART ENDS ======-->
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

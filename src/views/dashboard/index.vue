<template>
  <div>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores doloribus
                  eum laboriosam praesentium delectus unde magni aut perspiciatis cumque deserunt dolore
                  voluptate, autem pariatur? Dicta pariatur.</p>
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

    <!--====== BANNER PART START ======-->

    <section class="banner-area">
      <div class="banner-item bg_cover" style="background-image: url(/static/images/banner-bg.jpg)">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="banner-content">
                <span data-animation="fadeInLeft" data-delay="0.2s">扎根一方 深耕一域 服务一片</span>
                <h1 data-animation="fadeInLeft" data-delay="0.5s" class="title">中国船舶重工集团<br>环境工程有限公司</h1>
                <p data-animation="fadeInLeft" data-delay="0.8s">中国船舶擎帆聚力 环保航母硬核起航</p>
                <ul data-animation="fadeInUp" data-delay="1.2s">
                  <li>
                    <router-link to="/cooperate" class="main-btn">对外合作<i class="far fa-plus"></i></router-link>
                  <li>
                    <router-link to="/contact" class="main-btn main-btn-2">联系我们<i class="far fa-plus"></i></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-item bg_cover" style="background-image: url(/static/images/banner-bg-2.jpg)">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="banner-content">
                <span data-animation="fadeInLeft" data-delay="0.2s">扎根一方 深耕一域 服务一片</span>
                <h1 data-animation="fadeInLeft" data-delay="0.5s" class="title">中国船舶重工集团<br>环境工程有限公司</h1>
                <p data-animation="fadeInLeft" data-delay="0.8s">中国船舶擎帆聚力 环保航母硬核起航</p>
                <ul data-animation="fadeInUp" data-delay="1.2s">
                  <li>
                    <router-link to="/cooperate" class="main-btn">对外合作<i class="far fa-plus"></i></router-link>
                  <li>
                    <router-link to="/contact" class="main-btn main-btn-2">联系我们<i class="far fa-plus"></i></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== BANNER PART ENDS ======-->

    <!--====== FEATURES PART START ======-->

    <section class="features-area pt-130 pb-130">
      <div class="features-dot">
        <img src="/static/images/features-dot.png" alt="">
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="features-thumb" style="position: relative;">
              <img src="/static/images/features-thumb.jpg" alt="features">
              <div class="txtStyle">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                中船环境目前是中国船舶集团旗下“专注于生态修复和环境保护产业的龙头企业”，集产业投资、设计、建设、运营、技术服务与资本运作为一体，综合性、全产业链、领先的专业化大型生态修复和环境保护产业平台和实体产业集团。
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="features-content">
              <span>关于我们</span>
              <h3 class="title">致力于引领中国船舶集团各优质环保业务蓬勃发展</h3>
              <div class="row features-active">
                <div class="col-lg-6">
                  <div class="features-box text-center mt-30">
                    <!--<i class="flaticon-pumpkin"></i>-->
                    <img src="/static/images/zizhi1.jpg"/>
                    <h5 class="title">团体资质证书</h5>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="features-box text-center mt-30">
                    <!--<i class="flaticon-pumpkin"></i>-->
                    <img src="/static/images/zizhi2.jpg"/>
                    <h5 class="title">卫生协会证书</h5>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="features-box text-center mt-30">
                    <!--<i class="flaticon-pumpkin"></i>-->
                    <img src="/static/images/zizhi3.jpg"/>
                    <h5 class="title">污染治理证书</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--<div class="features-counter-area">-->
          <!--<div class="row">-->
            <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
              <!--<div class="features-counter mt-30 text-center text-sm-left">-->
                <!--<span>Team Member</span>-->
                <!--<h3 class="title counter">3698</h3>-->
                <!--<i class="far fa-users"></i>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
              <!--<div class="features-counter item-2 mt-30 text-center text-sm-left">-->
                <!--<span>Our Farms</span>-->
                <!--<h3 class="title counter">8965</h3>-->
                <!--<i class="far fa-leaf"></i>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
              <!--<div class="features-counter item-3 mt-30 text-center text-sm-left">-->
                <!--<span>Win Awards</span>-->
                <!--<h3 class="title counter">6579</h3>-->
                <!--<i class="far fa-trophy-alt"></i>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
              <!--<div class="features-counter item-4 mt-30 text-center text-sm-left">-->
                <!--<span>Gold Partners</span>-->
                <!--<h3 class="title counter">59632</h3>-->
                <!--<i class="far fa-coffee"></i>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </section>

    <!--====== FEATURES PART ENDS ======-->

    <!--====== SERVICES PART START ======-->

    <section class="services-area pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <span>主营业务</span>
              <h3 class="title">打造山 水 林 田 湖 草<br>生命共同体</h3>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-services mt-30">
              <img src="/static/images/services-1.png" alt="services">
              <h4 class="title">水环境综合治理</h4>
              <p>奋力助推碧水保卫战</p>
              <router-link to="/services">查看更多</router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-services mt-30">
              <img src="/static/images/services-2.png" alt="services">
              <h4 class="title">固废资源化处理</h4>
              <p>扎实助力净土保卫战</p>
              <router-link to="/services">查看更多</router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-services mt-30">
              <img src="/static/images/services-3.png" alt="services">
              <h4 class="title">城乡综合治理</h4>
              <p>面向生态环境保护的城市建设和农村振兴</p>
              <router-link to="/services">查看更多</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="services-icon1">
        <i class="flaticon-lemonade"></i>
      </div>
      <div class="services-icon2">
        <i class="flaticon-vegetable"></i>
      </div>
    </section>

    <!--====== SERVICES PART ENDS ======-->

    <!--====== STORE PART START ======-->

    <section class="store-area pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-7">
            <div class="store-content">
              <span>党的建设</span>
              <h3 class="title">不忘初心<br>牢记使命</h3>
              <p>中国船舶重工集团环境工程有限公司党支部</p>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row store-active">
              <div class="col-lg-6">
                <img src="/static/images/store-item-1.1.png" alt="store">
              </div>
              <div class="col-lg-6">
                <img src="/static/images/store-item-2.1.png" alt="store">
              </div>
              <div class="col-lg-6">
                <img src="/static/images/store-item-3.1.png" alt="store">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== STORE PART ENDS ======-->

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

    <!--====== FEEDBACK PART START ======-->

    <section class="feedback-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-9">
            <div class="section-title text-center">
              <span>Our Feedback</span>
              <h3 class="title">What Our Client’s Say About Product</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="feedback-active">
              <div class="feedback-content">
                <div class="row">
                  <div class="col-lg-2 col-md-2">
                    <div class="feedback-user">
                      <img src="/static/images/shape/feedback-user.png" alt="feedback">
                      <i class="fal fa-quote-right"></i>
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-10">
                    <p>Sedut perspiciatis unde omns iste natus error sit voluptatem accusantium
                      doloremque totam rem aperiam eaque ipsa quae ab illo inventore verittise et
                      quasi architecto beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptate
                      quia voluptas</p>
                  </div>
                </div>
              </div>
              <div class="feedback-content">
                <div class="row">
                  <div class="col-lg-2 col-md-2">
                    <div class="feedback-user">
                      <img src="/static/images/shape/feedback-user.png" alt="feedback">
                      <i class="fal fa-quote-right"></i>
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-10">
                    <p>Sedut perspiciatis unde omns iste natus error sit voluptatem accusantium
                      doloremque totam rem aperiam eaque ipsa quae ab illo inventore verittise et
                      quasi architecto beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptate
                      quia voluptas</p>
                  </div>
                </div>
              </div>
              <div class="feedback-content">
                <div class="row">
                  <div class="col-lg-2 col-md-2">
                    <div class="feedback-user">
                      <img src="/static/images/shape/feedback-user.png" alt="feedback">
                      <i class="fal fa-quote-right"></i>
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-10">
                    <p>Sedut perspiciatis unde omns iste natus error sit voluptatem accusantium
                      doloremque totam rem aperiam eaque ipsa quae ab illo inventore verittise et
                      quasi architecto beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptate
                      quia voluptas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== FEEDBACK PART ENDS ======-->

    <!--====== FAQ PART START ======-->

    <section class="faq-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 col-md-7">
            <div class="faq-content">
              <span>FAQ</span>
              <h3 class="title">Frequently Ask Questions</h3>
              <p>But must explain you how all this mistaken idea noun pleasure and praising pain was born and
                will give apete account of the system and expound the actual teachings the great explorer of
                the truth the master</p>
              <a class="main-btn" href="#">get a quote</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="accordion-item">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse"
                              data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Summer Adventures Wallpapers Edition ?
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Pleasure and praising pain was born and willccount of system and expound the
                        actual teachin egshe great explorer of ttruth the master builder human ness
                        rejects dislikes avoids</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                              data-target="#collapseTwo" aria-expanded="false"
                              aria-controls="collapseTwo">
                        Relationship Between Gamification And Modern ?
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Pleasure and praising pain was born and willccount of system and expound the
                        actual teachin egshe great explorer of ttruth the master builder human ness
                        rejects dislikes avoids</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                              data-target="#collapseThree" aria-expanded="false"
                              aria-controls="collapseThree">
                        Progressive Enhancing CSS Layout Floa Mex?
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Pleasure and praising pain was born and willccount of system and expound the
                        actual teachin egshe great explorer of ttruth the master builder human ness
                        rejects dislikes avoids</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading4">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                              data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Web Development Reading Images in Web Notif ?
                      </button>
                    </h2>
                  </div>
                  <div id="collapse4" class="collapse" aria-labelledby="heading4"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Pleasure and praising pain was born and willccount of system and expound the
                        actual teachin egshe great explorer of ttruth the master builder human ness
                        rejects dislikes avoids</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading5">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                              data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Taming Advanced Color Palettes In Photoshop ?
                      </button>
                    </h2>
                  </div>
                  <div id="collapse5" class="collapse" aria-labelledby="heading5"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Pleasure and praising pain was born and willccount of system and expound the
                        actual teachin egshe great explorer of ttruth the master builder human ness
                        rejects dislikes avoids</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading6">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                              data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Building Pattern Libraries With Shadow DOM ?
                      </button>
                    </h2>
                  </div>
                  <div id="collapse6" class="collapse" aria-labelledby="heading6"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Pleasure and praising pain was born and willccount of system and expound the
                        actual teachin egshe great explorer of ttruth the master builder human ness
                        rejects dislikes avoids</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== FAQ PART ENDS ======-->

    <!--====== BLOG PART START ======-->

    <section class="blog-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-9">
            <div class="section-title text-center">
              <span>News & Blog</span>
              <h3 class="title">Something Know About Health Articles</h3>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="blog-item active mt-40">
              <span><i class="far fa-calendar-alt"></i> 20 Feb 2020</span>
              <h4 class="title">Things To Keep In See Mind When Sign Transportation Map Weather Ways</h4>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="blog-item mt-70">
              <span><i class="far fa-calendar-alt"></i> 20 Feb 2020</span>
              <h4 class="title">Web Development Reading Real World Accessibilit Flexbox Madnes Dhings</h4>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="blog-item mt-30">
              <span><i class="far fa-calendar-alt"></i> 20 Feb 2020</span>
              <h4 class="title">As Far As The Eye Can See Colorfules Sceneries, Posters And Covers Assis</h4>
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="shape-1">
        <img src="/static/images/shape/shape-3.png" alt="">
      </div>
      <div class="shape-2">
        <img src="/static/images/shape/shape-4.png" alt="">
      </div>
    </section>

    <!--====== BLOG PART ENDS ======-->

    <!--====== FARMS PART START ======-->

    <section class="farms-area d-flex align-items-center bg_cover"
             style="background-image: url(/static/images/farms.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="farms-content">
              <span>Looking Organic Food ?</span>
              <h3 class="title">Want To Fresh & Organic Food</h3>
              <a class="main-btn" href="#">visit our farms <i class="far fa-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== FARMS PART ENDS ======-->

    <!--====== SPONSOR PART START ======-->

    <section class="sponsor-area pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="sponsor-box">
              <span>Best Sponsor</span>
              <h3 class="title">Our World Wide Partnership</h3>
              <ul class="d-flex justify-content-between">
                <li><img src="/static/images/brand-1.png" alt="brand"></li>
                <li><img src="/static/images/brand-2.png" alt="brand"></li>
                <li><img src="/static/images/brand-3.png" alt="brand"></li>
              </ul>
              <ul class="d-flex justify-content-between">
                <li><img src="/static/images/brand-4.png" alt="brand"></li>
                <li><img src="/static/images/brand-5.png" alt="brand"></li>
                <li><img src="/static/images/brand-6.png" alt="brand"></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="newsletters-box">
              <span>Newsletters</span>
              <h3 class="title">Subscribe Our Newsletters</h3>
              <form action="#">
                <div class="input-box mb-20">
                  <input type="email" placeholder="Enter Email Address ">
                  <i class="far fa-envelope-open"></i>
                </div>
                <button class="main-btn">subscribe now <i class="far fa-plus"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== SPONSOR PART ENDS ======-->

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
                      <h3 class="title"><span>Have Any Questions ?</span> Call Us +012 (345) 678 99
                      </h3>
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
    <!--====== QUESTIONS PART ENDS ======-->
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
  }
}
</script>
<style>
  .txtStyle{
    color: white;
    font-size: 30px;
    position: absolute;
    top: 0;
    left: 0;
    /*margin: 40px 30px;*/
    padding: 40px 30px;
    background:rgba(0,100,0,.4);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:justify;
    text-overflow : ellipsis
  }
  @media (max-width: 767px) {
    .txtStyle {
      font-size: 24px; } }
</style>

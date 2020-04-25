<template>
  <header class="header-area">
    <div class="header-menu">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="navigation ">
              <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarFive" aria-controls="navbarFive" aria-expanded="false"
                        aria-label="Toggle navigation">
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button> <!-- navbar toggler -->
                <div class="collapse navbar-collapse sub-menu-bar" id="navbarFive">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <router-link to="/" class="page-scroll">公司简介</router-link>
                    </li>
                    <!--<li class="nav-item">-->
                      <!--<a class="page-scroll" href="about-us.html">资质荣誉</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                      <!--<a class="page-scroll" href="#">技术产品</a>-->
                    <!--</li>-->
                    <li class="nav-item">
                      <router-link to="/services" class="page-scroll">主营业务</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/cooperate" class="page-scroll">对外合作</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/contact" class="page-scroll">联系我们</router-link>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#">对外连接</a>
                      <ul class="sub-menu">
                        <li><a href="https://oa.cssceg.com">协同办公</a></li>
                        <li><a href="http://file.cssceg.com">文件共享</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav> <!-- navbar -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {}
  }
}
</script>

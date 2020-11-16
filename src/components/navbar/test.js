<main id="main-container" class="main__container">
<aside class="nav__mobile__aside">
  <div class="nav__header__container">
    <p class="nav__header"><a href="/" style="text-decoration: none">Harrison Favour</a></p>
    <button id="open-nav" class="nav__toggle" aria-label="Open navigation" onclick="openMobileNav()">
      <span class="breadcrumb"></span>
    </button>
  </div>
  <nav id="nav-content" class="sidenav__mobile">
    <button id="close-nav" aria-label="Close navigation" class="nav__toggle__collapse" onclick="closeMobileNav()">
      <span class="cancel"></span>
    </button>
    <ul class="nav__collapse">
      <li onclick="closeMobileNav()"><a href="/#about" class="active">About</a></li>
      <li onclick="closeMobileNav()"><a href="/#experience">Experience</a></li>
      <li onclick="closeMobileNav()"><a href="/#skills">Skills</a></li>
      <li onclick="closeMobileNav()"><a href="/#portfolio">Portfolio</a></li>
      <li onclick="closeMobileNav()"><a href="https://medium.com/@hyper_debugger">Blog</a></li>
    </ul>
  </nav>
</aside>
</main>
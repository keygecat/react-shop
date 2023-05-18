function Header() {

    return <nav className='deep-purple'>
    <div className="nav-wrapper">
    <div className="container">
      <a href="#" className="brand-logo center">LOGO</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Menu</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Settings</a></li>
      </ul>
    </div>
    </div>
  </nav>
}

export { Header };
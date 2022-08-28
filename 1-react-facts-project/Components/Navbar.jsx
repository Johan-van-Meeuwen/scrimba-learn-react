import logo from "/images/reactjs-icon.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>ReactFacts</h3>
      </div>
      <div className="course-module">
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  )
}

export default Navbar

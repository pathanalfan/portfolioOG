import logo from "../images/LOGO.png"

export default function Header(){
  return(
    <div className="Header">
      <img className="logo" src={logo} />
      <div className="menu">
         
        <div className="menu--home"> 
          HOME
        </div>
        <div className="menu--portfolio"> 
          PORTFOLIO
        </div>
        <div className="menu--about"> 
          ABOUT ME
        </div>
      </div>
      <button className="contact">
        <div className="button-name">
        LET'S TALK
        </div>
      </button>
    </div>


  )
}
import pp from "../images/img_me.png"

export default function Main(){
  return(
    <div className="main">
      <img className="pp" src={pp} />
      <div className="intro">
        <div className="text-intro">
        Hey, I’m Alfan, A Creative Web Developer and UI/UX Designer.
        </div>
        <div className="home-button"></div>
        <button className="home-portfolio"> View Portfolio</button>
        <button className="home-contact">LET'S TALK</button>
      </div>
      
    </div>


  )
}
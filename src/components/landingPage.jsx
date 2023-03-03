// Can also be included with a regular script tag
import React from "react";
import pdf from "../assests/Myresume.pdf"
export function LandingPage() {
    var lst = ["A Web Developer", "A Tech Enthusiast", "Yuvaraj Singh",];
    const [count,setCount]=React.useState(0)
    const [txt,setTxt]=React.useState("Yuvaraj Singh")
    React.useEffect(() => {
      // const ele=document.getElementsByTagName('h1');
      // console.log(ele[0])
      // ele[0].addEventListener('animationiteration', function(){
      //   setTxt(lst[count])
      // },false)
      var inter2=setInterval(()=>{
        setCount(pre => (pre+1) %3)
      },3000);
    
      return () => {
        clearInterval(inter2)
      }
    }, [count])
    
    React.useEffect(()=>{
      setTxt(lst[count])
    },[count])

    const openPdf = () => {
      window.open(pdf);
    };

  return (
    <div className="landingpage">
      <div className="g-left">
        <div className="typed-out">
          <h2>I am </h2>
          <h1>{txt}</h1>
        </div>
        <div>
          <span>
            <button onClick={openPdf} data-aos="blue_btn_flicker">My Portfolio</button>
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Ratecon = () =>{
    let tabs = document.querySelectorAll(".rate-con label");

    for (let tab of tabs) {
      tab.addEventListener("click", () => {
        let val = tab.getAttribute("for");
        for (let i = 0; i < 5; i++) {
          tabs[i].style.color = "#808080";
        }
        for (let i = 0; i < val; i++) {
          tabs[i].style.color = "gold";
        }
      });
    }
    return (
        <div className='rate-con'>
        평점 
        <input type='radio' name='rate' id='1' value='1'></input>
        <label htmlFor="1"><i className="fa-solid fa-star"></i></label> 
        <input type='radio' name='rate' id='2' value='2'></input>
        <label htmlFor="2"><i className="fa-solid fa-star"></i></label> 
        <input type='radio' name='rate' id='3' value='3'></input>
        <label htmlFor="3"><i className="fa-solid fa-star"></i></label> 
        <input type='radio' name='rate' id='4' value='4'></input>
        <label htmlFor="4"><i className="fa-solid fa-star"></i></label> 
        <input type='radio' name='rate' id='5' value='5'></input>
        <label htmlFor="5"><i className="fa-solid fa-star"></i></label> 
    </div>
    )
}

export default Ratecon;
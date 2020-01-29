import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className='heading'>
      <h1 className="title">{props.children}</h1>
      <h3 className='rules'>
        The Rules of the clicky game are simple!
    </h3>
      <ol>
        <li>Click a card</li>
        <li>On Each click the deck will shuffle and you must not click the same card</li>
        <li>After each successful attempt your score counter goes up if you lose the score counter will reset</li>
      </ol>
    </div>
  )
}

export default Header;
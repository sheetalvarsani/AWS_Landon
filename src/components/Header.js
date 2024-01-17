import React, { useState, useEffect } from "react";
// import menuLinksData from './data/menu_links.json' - Commented out so we're not using the mock json data

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async() => {
    // Query the API Gateway
    const resp = await fetch('https://3yys1qu4o9.execute-api.eu-north-1.amazonaws.com/Production/menu_links') // resp for response
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setMenuLinksData(jsonData);
  }

  useEffect(() => {
    // Load the menu link data from the API gGteway
    loadMenuLinksData();
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {
              menuLinksData.map((link) =>
              <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
              )
            };
          
            {/* The following nav links were changed to be more dynamic by doing a menu_links.json file and adding the above code:
            <li><a className="icon info" href="#hotelinfo"><span>info</span></a></li>
            <li><a className="icon rooms" href="#rooms"><span>rooms</span></a></li>
            <li><a className="icon dining" href="#dining"><span>dining</span></a></li>
            <li><a className="icon events" href="#events"><span>events</span></a></li>
            <li><a className="icon attractions" href="#attractions"><span>attractions</span></a></li>     */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

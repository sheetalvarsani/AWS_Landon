import React, { useState, useEffect } from "react";
// import galleryImagesData from './data/gallery_images.json'

const Welcome = () => {
  const [galleryImagesData, setGalleryImagesData] = useState([]);

  const loadGalleryImagesData = async() => {
    // Query the API Gateway
    const resp = await fetch('https://3yys1qu4o9.execute-api.eu-north-1.amazonaws.com/Production/gallery_images') // resp for response
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setGalleryImagesData(jsonData);
  }

  useEffect(() => {
    // Load the gallery images data from the API Gateway
    loadGalleryImagesData();
  }, []);
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {
            galleryImagesData.map((image) =>
            <img className={image.className} src={image.src} alt={image.alt}/>
            )
          }
          {/* The following images were changed to be more dynamic by doing a gallery_images.json file and adding the above code:
          <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures"/>
          <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures"/>
          <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures"/>
          <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures"/>
          <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures"/>  */}
        </div>

        <h1>Welcome to Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;

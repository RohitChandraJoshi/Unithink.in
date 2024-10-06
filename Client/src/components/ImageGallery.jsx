// App.js
import React from 'react';
import Slider from 'react-slick';
import './ImageGallery.css'; // Include your custom styling here
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function ImageGallery() {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan1.jpg?alt=media&token=023b2007-b7c4-47b3-8d7d-81c796c50a33",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan10.jpg?alt=media&token=9cf208d6-0949-4c4b-ad48-d54374304dbe",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan11.jpg?alt=media&token=21a558df-33c0-4a6c-b827-a214ef306bb4",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan12.jpg?alt=media&token=d718242a-0f74-44b9-981d-3026b19f7fce",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan2.jpg?alt=media&token=2cdc5bdb-b789-4bf1-9d07-9bb500cad108",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan4.jpg?alt=media&token=e6722c2a-ca06-4aa0-92da-49a81eb9ec7e",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan5.jpg?alt=media&token=c09e2c01-108a-4a03-895b-be1f3fa3b7fe",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan6.jpg?alt=media&token=f221a0a8-cf46-4cba-bed4-42f87d71f829",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan7.jpg?alt=media&token=d822f7b8-f726-40ee-b218-c3557e0e82ee",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan8.jpg?alt=media&token=4ccc2eee-f241-4283-a474-b50463b31940",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan9.jpg?alt=media&token=8172aec5-d8e6-4c08-b5d4-1c3ab7834fa0",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra13.jpg?alt=media&token=17934b8a-583a-4474-86ad-776c2e50000a",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra14.jpg?alt=media&token=b7b316c1-4a1c-4b00-9224-f9c0bf7032ac",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra15.jpg?alt=media&token=cb446983-bd93-461a-b4a6-4f5cd31f60f8",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra19.jpg?alt=media&token=b1b795bd-5106-4baf-b034-439f0b45d29f",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2FDSC01413.JPG?alt=media&token=15754e1f-c463-4417-a569-facde107f902",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2FDSC02015.JPG?alt=media&token=acc1ee4f-cf5b-4e18-ba2b-332e5ec9f161",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2FDSC08721.JPG?alt=media&token=9db30bef-2fde-4d6c-b247-2a6610d5b27a",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2FDSC09073.JPG?alt=media&token=0b462b1b-8985-46db-9b5e-d9e990de6d30",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra16.jpg?alt=media&token=aba6dee3-f476-4e1e-b3ce-092302d7452c",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra17.jpg?alt=media&token=b14aeaa5-4072-41b1-957f-f08b898cadfe",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelan3.jpg?alt=media&token=a4236458-b437-45b7-9a83-24a891479e44",
    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/gallery%20images%2Fsheelanmisra18.jpg?alt=media&token=ea9cf687-79f5-4495-a292-b7cc58b2f4f6"

];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div  className="App">
      {/* <header className="text-center mb-10 text-5xl font-semibold sm:text-lg md:text-3xl mt-10">
        <h1>Welcome to the Image Gallery</h1>
      </header>
       */}
      <div className="gallery-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageGallery;

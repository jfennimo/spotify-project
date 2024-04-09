import React, { useState } from "react";
import { Carousel, Radio } from "antd";

const carouselStyle = {
  margin: "0 auto 40px auto",
};

const imageStyle = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "4px",
};

export default function App() {
  const [dotPosition, setDotPosition] = useState("top");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>
      <header>
        <h1>Spotify Demo</h1>
      </header>
      <main>
        <p>Hello React!</p>
        <Carousel style={carouselStyle} autoplay={true}>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=9"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=10"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=11"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=12"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=13"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=14"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=15"
              alt="Alt text"
            />
          </div>
          <div>
            <img
              style={imageStyle}
              src="https://picsum.photos/1200/300?id=16"
              alt="Alt text"
            />
          </div>
        </Carousel>
      </main>
    </>
  );
}

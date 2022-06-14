import "./App.css";
// import image1 from "./media/mountains.jpeg";
// import image2 from "./media/flashlight.jpg";
// import image3 from "./media/trail.jpeg";
// import image4 from "./media/fox.jpeg";
// import image5 from "./media/clouds.jpeg";
import Header from "./header";

function App() {
  return (
    <>
      <div className="main">
        <Header />

        <div className="block1">
          <h1 className="text">HEY</h1>
          {/* <img src={image1} className="image" alt="mountains" /> */}
        </div>
        <div className="block2">
          <h1 className="text">LET'S</h1>
          {/* <img src={image2} className="image" alt="mountains" /> */}
        </div>
        <div className="block3">
          <h1 className="text">GIVE</h1>
          {/* <img src={image3} className="image" alt="mountains" /> */}
        </div>
        <div className="block4">
          <h1 className="text">ALL</h1>
          {/* <img src={image4} className="image" alt="mountains" /> */}
        </div>
        <div className="block5">
          <h1 className="text">YOU CAN</h1>
          {/* <img src={image5} className="image" alt="mountains" /> */}
        </div>
      </div>
    </>
  );
}

export default App;

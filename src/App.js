import './App.css';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian className="accordian" /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating className="star-rating" /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} />
    </div>
  );
}

export default App;

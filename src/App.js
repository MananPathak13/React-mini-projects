import './App.css';
import LoadMoreProducts from './components/load-more-products';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian className="accordian" /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating className="star-rating" /> */}
      {/*Image Slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} /> */}

      {/* Load More Compoenet */}
      <LoadMoreProducts getUrl={"https://dummyjson.com/products"} />
    </div>
  );
}

export default App;

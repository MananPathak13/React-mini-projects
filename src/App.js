import './App.css';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import ImageSlider from './components/image-slider';
import TreeView from './components/tree-view';
import menu from './components/tree-view/data'

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
      {/* <LoadMoreProducts getUrl={"https://dummyjson.com/products"} /> */}

      {/* Tree View Container */}
      <TreeView menu={menu} />

    </div>
  );
}

export default App;

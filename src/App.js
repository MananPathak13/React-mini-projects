import './App.css';
// import LightDarkMode from './components/light-dark-mode';
// import ScrollIndicator from './components/scrool-indicator';
// import QrCodeGenerator from './components/qr-code-generator';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import ImageSlider from './components/image-slider';
// import TreeView from './components/tree-view';
// import menu from './components/tree-view/data';
import LoadMoreProducts from './components/load-more-products'

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

      {/* Tree View Container */}
      {/* <TreeView menu={menu} /> */}

      {/* QR code Generator component */}
      {/* <QrCodeGenerator /> */}

      {/* Light Dark Mode Component */}
      {/* <LightDarkMode /> */}


      {/* Scroll Indicator Compoenet */}
      {/* <ScrollIndicator getUrl='https://dummyjson.com/products' /> */}

    </div>
  );
}

export default App;

import './App.css';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
// import FeatureFlag from './components/feature-flag';
// import FeatureFlagGlobalState from './components/feature-flag/context';
import UseOnclickOutsideTest from './components/use-outside-click/Test';
import UseWindowResizeTest from './use-window-resize/test';
// import TestUseFetch from './components/useFetch/test';
// import ModelTest from './components/custom-model-popup/model-test';
// import TabTest from './components/custom-tabs/tab-test';
// import GithubProfile from './components/github-profile';
// import TicTacToe from './components/tictactoe';
// import Search from './search-automate';
// import LightDarkMode from './components/light-dark-mode';
// import ScrollIndicator from './components/scroll-indicator';
// import QrCodeGenerator from './components/qr-code-generator';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import ImageSlider from './components/image-slider';
// import TreeView from './components/tree-view';
// import menu from './components/tree-view/data';
// import LoadMoreProducts from './components/load-more-products'

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
      {/* <TreeView /> */}

      {/* QR code Generator component */}
      {/* <QrCodeGenerator /> */}

      {/* Light Dark Mode Component */}
      {/* <LightDarkMode /> */}


      {/* Scroll Indicator Compoenet */}
      {/* <ScrollIndicator getUrl='https://dummyjson.com/products' /> */}

      {/* <TabTest /> */}

      {/* <ModelTest /> */}

      {/* <GithubProfile /> */}


      {/* <Search /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* <TestUseFetch /> */}

      {/* <UseOnclickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}

      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
    </div>
  );
}

export default App;

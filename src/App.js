import HeroSection from './sections/HeroSection';
import PhoneModel from './sections/PhoneModel';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quote />
      <HeroSection />
      {/* <PhoneModel /> */}
    </div>
  );
}

export default App;
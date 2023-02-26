import './App.css';
import Header from './components/header/Header';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import Brands from './components/brands/Brands';
import page3 from './images/page3.PNG'
import page4 from './images/page4.PNG'
import page5 from './images/page5.PNG'
import Page6 from './components/page6/Page6';
import Rating from './components/rating/Rating';
import Page7 from './components/page7/Page7';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 back={page3} h11="feel special" h12="more often." p="exclusive rewards for paying your bills" btn="Explore rewards"/>
      <Brands />
      <Page3 back={page4} h11="we take you money" h12="matters seriously" p="so that you don’t have to." btn="Experience the upgrade"/>
      <Brands />
      <Page3 back={page5} h11="security first" h12="and second." p="what’s yours remains only yours." btn="Become a member"/>
      <Page6></Page6>
      <Rating />
      <Page7 />
      <Footer />
    </div>
  );
}

export default App;

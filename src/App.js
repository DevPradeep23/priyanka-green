import './App.css';
import AboutUs from './dashboardlayout/aboutus/AboutUs';
import Banner from './dashboardlayout/banner/Banner';
import Blog from './dashboardlayout/blog/Blog';
import ContactFooter from './dashboardlayout/contactfooter/ContactFooter';
import CopyRight from './dashboardlayout/copyright/CopyRight';
import EasyToUse from './dashboardlayout/easytouse/EasyToUse';
import Footer from './dashboardlayout/footer/Footer';
import Navbar from './dashboardlayout/navbar/Navbar';
import Services from './dashboardlayout/services/Services';
import Testimonial from './dashboardlayout/testimonial/Testimonial';
import WhyChoose from './dashboardlayout/whychoose/WhyChoose';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Services/>
      <WhyChoose/>
      <EasyToUse/>
      <Testimonial/>
      <Blog/>
      <Footer/>
      <ContactFooter/>
      <CopyRight/>
    </div>
  );
}

export default App;

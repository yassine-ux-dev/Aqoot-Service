import Hero from './components/Hero/Hero';
import './App.css';
import { AuroraBackgroundDemo } from './components/ui/aurora';
import Slide from './components/Swipper/Slide';
import Equipe from './components/equipe/equipe';
import VideoCarousel from './components/VideoCarousel/VideoCarousel';
import ScrollDown from './components/Scroll/ScrollDown';
import { FlipWordsDemo } from './components/flip-words/flip';
import Component from './components/Question/whyus';
import Logo from "./assets/logo.png";


// Add this in the head section of your HTML file, not inside JSX
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>

function App() {
  return (
    <AuroraBackgroundDemo>
      {/* Hero Section */}
      <div className="flex flex-col mt-20 items-center justify-center space-y-10">
        <Hero />
      </div>
      <ScrollDown />
      
      {/* Spacing between sections */}
      <div className="my-80" />
      
      <Slide />
      
      <div className="flex items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-gray-800">Feature Products</h1>
      </div>
  
      <div className="my-70" />
      <div className="color backdrop-blur-xl bg-white/60 flex">
        <div className="w-1/2 flex items-center justify-start">
          <FlipWordsDemo />
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <VideoCarousel />
        </div>
      </div>
      
      <div className="my-40" />
      <div className="equipe flex items-center justify-between gap-[400px]">
        {/* Content Section */}
        <div className="space-y-[100px]">
          <div className="inline-block rounded-lg bg-muted px-[300px] py-1 text-sm"></div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            L'équipe experte pour votre projet
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Avec notre expertise approfondie et notre engagement envers la réussite de nos clients, nous sommes
            l'équipe idéale pour mener votre projet au succès.
          </p>
        </div>
      
        <div className="w-[400px] h-64">
          <Equipe />
        </div>
      </div>
      
      <div className="w-[400px] h-64" />
      
      <footer className="section-p1">
      <div className="col">
      <img className="Logo" src={Logo} alt="Logo" />
  <h4>Contact</h4>

  {/* Flex container for the Address, Phone, and Hours */}
  <div className="flex space-x-8">
    <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
    <p><strong>Phone:</strong> +01 2222 365 / (+91)01 2345 6789</p>
    <p><strong>Hours:</strong> 10:00-18:00, Mon-Sat</p>
  </div>

  <div className="follow">
    <h4>Follow us</h4>
    <div className="icon flex space-x-2">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-pinterest-p"></i>
      <i className="fab fa-youtube"></i>
    </div>
  </div>

  <div className ="copyright">
            <p> 2021Tech2 etc - HTML CSS Ecommerce Template </p>
        </div>


        </div>
      </footer>
    </AuroraBackgroundDemo>
  );
}

export default App;

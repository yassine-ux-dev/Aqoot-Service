import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import './equipe.css';
import Serveur1 from "../../assets/Serveur1.jpg"; // Import the image correctly
import Serveur2 from "../../assets/Serveur2.jpg"; // Import the image correctly
import Serveur3 from "../../assets/Serveur3.png"; // Import the image correctly


// Import EffectCards module from the correct path
import { EffectCards } from "swiper/modules";
export default function Equipe() {
  return (
    <>
      <section>
        <div className="container sliders">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]} // Use EffectCards module correctly
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img1">
                  <img src={Serveur1} alt="Serveur1" /> {/* Use imported variable */}
                  <h4 className="px-9">Yassine</h4>
                  <h6>4 ans d'expérience</h6>
                </div>
          
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img2">
                  <img src={Serveur2} alt="Serveur1" /> {/* Use imported variable */}
                  <h4 className="px-9">Yassine</h4>
                  <h6>4 ans d'expérience</h6>
                </div>
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img3">
                  <img src={Serveur3} alt="Serveur1" /> {/* Use imported variable */}
                  <h4 className="px-9">Yassine</h4>
                  <h6>4 ans d'expérience</h6>
                </div>
              
              
              </div>
            </SwiperSlide>
          

            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>
      </section>
      

    </>
  );
}

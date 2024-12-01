import "./Hero.css"; // Keep this for any additional styles if needed
import Header from "../Header/Header";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import hero_image from "../../assets/hero_image.png";
import fb from "../../assets/f.png";
import ins from "../../assets/i.png";
import tiktok from "../../assets/tik.png";

import { MovingBorderDemo } from "../ui/button";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between p-8 gap-[110px]"> {/* Adjusted gap */}
        <div className="flex flex-col w-full max-w-2xl space-y-4"> {/* Corrected spacing */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold space-y-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-300">
              Notre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                service{" "}
              </span>
              juste pour ton bonheur
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-600"
          >
            Nous sommes une équipe de serveurs dédiés, transformant chaque
            événement en une expérience unique et inoubliable.
            <br />
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1)}
            initial="hidden"
            animate="visible"
            className="py-2 px-4 transition"
          >
            <div className="social-icons mb-4 flex space-x-4"> {/* Ensures spacing between icons */}
              <a href="./">
                <img src={fb} alt="Facebook Logo" className="w-6 h-6" />

              </a>
              <img src={ins} alt="Instagram Logo" className="w-6 h-6" />
              <img src={tiktok} alt="Tiktok Logo" className="w-6 h-6" />
            </div>
            <MovingBorderDemo />
          </motion.div>
        </div>

        <div className="hidden md:block flex-shrink-0">
          <img src={hero_image} alt="Hero" className="w-full max-w-lg h-auto rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Hero;

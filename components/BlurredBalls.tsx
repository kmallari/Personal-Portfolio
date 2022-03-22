import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import useWindowDimensions from "../hooks/useWindowDimensions";

const ORIG_SPEED_X = 15;
const ORIG_SPEED_Y = 15;
export const BlurredBalls = () => {
  const SVG_WIDTH = 1000;

  const [x, setX] = useState(0);
  const [speedX, setSpeedX] = useState(ORIG_SPEED_X);
  const [y, setY] = useState(0);
  const [speedY, setSpeedY] = useState(ORIG_SPEED_Y);

  // I think this needs optimizing

  return (
    <div className='p-0 w-full h-screen fixed overflow-hidden'>
      <div className='absolute right-0 opacity-20'>
        <motion.div
          animate={{ x: x, y: y }}
          transition={{
            ease: "linear",
            // duration: 0.1,
            // repeat: Infinity
          }}
          onAnimationComplete={() => {
            // console.log(y, window.innerHeight);
            setX(x + speedX);
            setY(y + speedY);

            if (window.innerWidth <= 800) {
              // right
              if (x >= window.innerWidth * 3 - SVG_WIDTH) {
                setSpeedX(-ORIG_SPEED_X);
                // console.log("test");
              }

              // left
              if (x <= -window.innerWidth * 2 + SVG_WIDTH) {
                // console.log("test2");
                setSpeedX(ORIG_SPEED_X);
              }

              // down
              if (y >= window.innerHeight / 2) {
                setSpeedY(-ORIG_SPEED_Y);
              }

              // top
              if (y <= -window.innerHeight / 3) {
                console.log("");
                setSpeedY(ORIG_SPEED_Y);
              }
            } else {
              // right
              if (x >= window.innerWidth - SVG_WIDTH) {
                setSpeedX(-ORIG_SPEED_X);
                // console.log("test");
              }

              // left
              if (x <= -window.innerWidth * 1.15 + SVG_WIDTH) {
                // console.log("test2");
                setSpeedX(ORIG_SPEED_X);
              }

              // down
              if (y >= window.innerHeight / 2) {
                setSpeedY(-ORIG_SPEED_Y);
              }

              // top
              if (y <= -window.innerHeight / 3) {
                console.log("");
                setSpeedY(ORIG_SPEED_Y);
              }
            }
          }}
        >
          <Image alt='' src='/ball-1.png' width={1000} height={1000} />
        </motion.div>
      </div>
    </div>
  );
};

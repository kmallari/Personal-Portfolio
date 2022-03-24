import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface BlurredBallsProps {
  theme: string;
}

const ORIG_SPEED_X = 15;
const ORIG_SPEED_Y = 15;
export const BlurredBalls: React.FC<BlurredBallsProps> = ({ theme }) => {
  const { height, width } = useWindowDimensions();

  // generate 10 random x and y positions within the viewport with a maximum
  // difference of 100px between each position and make the last
  // position out of the viewport
  const generatePos = (position: null | number, size: number) => {
    if (position != null) {
      const positions: number[] = [];
      for (let i = 0; i < 5; i++) {
        {
          const pos = Math.floor(Math.random() * (position - 100)) + 100;
          positions.push(pos);
        }
      }
      positions.push(position);
      positions.unshift(-size);
      return positions;
    }
    return [-1];
  };

  // generate numbers 0 to 360 within 10 steps
  const generateRotations = () => {
    const rotations: number[] = [];
    for (let i = 0; i < 10; i++) {
      rotations.push(Math.floor(Math.random() * 360));
    }
    return rotations;
  };

  const [xPositions1, setXPositions1] = useState(generatePos(width, 500));
  const [yPositions1, setYPositions1] = useState(generatePos(height, 500));
  const [rotations1, setRotations1] = useState(generateRotations());
  const [xPositions2, setXPositions2] = useState(generatePos(width, 300));
  const [yPositions2, setYPositions2] = useState(generatePos(height, 300));
  const [rotations2, setRotations2] = useState(generateRotations());
  const [xPositions3, setXPositions3] = useState(generatePos(width, 400));
  const [yPositions3, setYPositions3] = useState(generatePos(height, 400));
  const [rotations3, setRotations3] = useState(generateRotations());

  const generateNewPositions = () => {
    setXPositions1(generatePos(width, 400));
    setYPositions1(generatePos(height, 400));
    setRotations1(generateRotations());
    setXPositions2(generatePos(width, 400));
    setYPositions2(generatePos(height, 400));
    setRotations2(generateRotations());
    setXPositions3(generatePos(width, 400));
    setYPositions3(generatePos(height, 400));
    setRotations3(generateRotations());
  };

  useEffect(() => {
    generateNewPositions();
  }, [width, height]);

  return (
    <div className='p-0 w-full h-screen fixed overflow-hidden'>
      <div className='absolute top-0 left-0 opacity-60 dark:opacity-40'>
        <motion.div
          animate={{ x: xPositions1, y: yPositions1, rotate: rotations1 }}
          transition={{
            ease: "easeInOut",
            duration: 30,
            // repeat: Infinity,
          }}
          onAnimationComplete={() => {
            generateNewPositions();
          }}
        >
          <Image alt='' src='/ball-4.png' width={500} height={500} />
        </motion.div>
      </div>
      <div className='absolute top-0 left-0 opacity-40 dark:opacity-20'>
        <motion.div
          animate={{ x: xPositions2, y: yPositions2, rotate: rotations2 }}
          transition={{
            ease: "easeInOut",
            duration: 30,
            // repeat: Infinity,
          }}
          onAnimationComplete={() => {
            generateNewPositions();
          }}
        >
          <Image alt='' src='/ball-5.png' width={300} height={300} />
        </motion.div>
      </div>
      <div className='absolute top-0 left-0 opacity-60 dark:opacity-20'>
        <motion.div
          animate={{ x: xPositions3, y: yPositions3, rotate: rotations3 }}
          transition={{
            ease: "easeInOut",
            duration: 30,
            // repeat: Infinity,
          }}
          onAnimationComplete={() => {
            generateNewPositions();
          }}
        >
          <Image
            alt=''
            src={theme === "light" ? "/ball-3.png" : "/ball-1.png"}
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
};

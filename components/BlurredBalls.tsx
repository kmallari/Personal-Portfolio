// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import useWindowDimensions from "../hooks/useWindowDimensions";

// interface BlurredBallsProps {}

// export const BlurredBalls: React.FC<BlurredBallsProps> = ({}) => {
//   const [x1, setX1] = useState<number>(0);
//   const [x2, setX2] = useState<number>(0);
//   const [x3, setX3] = useState<number>(0);
//   const [y1, setY1] = useState<number>(0);
//   const [y2, setY2] = useState<number>(0);
//   const [y3, setY3] = useState<number>(0);
//   const { height, width } = useWindowDimensions();
//   return (
//     <div className='absolute h-full w-full left-0 top-0 overflow-hidden'>
//       <motion.div
//         animate={{ x: [0, 1920, 0], y: [0, 1080, 0] }}
//         transition={{
//           repeat: Infinity,
//           ease: "easeInOut",
//           duration: 3,
//         }}
//         className='absolute left-0 top-0 h-96 w-96 bg-primary-1 blur-fourXL rounded-full bg-opacity-40'
//       ></motion.div>
//       <div className='absolute right-40 top-32 h-64 w-64 bg-primary-2 blur-fourXL rounded-full bg-opacity-60'></div>
//       <div className='absolute right-0 bottom-0 h-64 w-64 bg-primary-light blur-fourXL rounded-full bg-opacity-60'></div>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const SVG_WIDTH = 800;

// export const BlurredBalls = () => {
//   const [x1, setX1] = useState(Math.random() * 400);
//   const [y1, setY1] = useState(Math.random() * 400);
//   const [x2, setX2] = useState(Math.random() * 400);
//   const [y2, setY2] = useState(Math.random() * 400);
//   const [x3, setX3] = useState(0);
//   const [y3, setY3] = useState(0);
//   return (
//     <div className='p-0 absolute h-screen w-full overflow-hidden'>
//       <div className='absolute left-0 top-0 opacity-50'>
//         <motion.div
//           animate={{ x: x1, y: y1 }}
//           transition={{
//             ease: "linear",
//             duration: 1,
//             // repeat: Infinity
//           }}
//           onAnimationComplete={() => {
//             // console.log("x", x1);
//             // console.log("y", y1);
//             setX1(Math.random() * 400);
//             setY1(Math.random() * 400);
//           }}
//         >
//           <svg
//             width='750'
//             height='750'
//             viewBox='0 0 750 750'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <g filter='url(#filter0_f)'>
//               <circle
//                 cx='375'
//                 cy='375'
//                 r='175'
//                 fill='url(#paint0_linear)'
//                 fillOpacity='0.75'
//               />
//             </g>
//             <defs>
//               <filter
//                 id='filter0_f'
//                 x='0'
//                 y='0'
//                 width='750'
//                 height='750'
//                 filterUnits='userSpaceOnUse'
//                 colorInterpolationFilters='sRGB'
//               >
//                 <feFlood floodOpacity='0' result='BackgroundImageFix' />
//                 <feBlend
//                   mode='normal'
//                   in='SourceGraphic'
//                   in2='BackgroundImageFix'
//                   result='shape'
//                 />
//                 <feGaussianBlur
//                   stdDeviation='100'
//                   result='effect1_foregroundBlur'
//                 />
//               </filter>
//               <linearGradient
//                 id='paint0_linear'
//                 x1='375'
//                 y1='200'
//                 x2='375'
//                 y2='550'
//                 gradientUnits='userSpaceOnUse'
//               >
//                 <stop stopColor='#3CBBB1' />
//                 <stop offset='0.41849' stopColor='#3CBBB1' />
//                 <stop offset='0.503309' stopColor='#174a9c' />
//                 <stop offset='0.747164' stopColor='#EE4266' />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>
//       </div>

//       <div className='absolute left-0 opacity-70'>
//         <motion.div
//           animate={{ x: x2, y: y2 }}
//           transition={{
//             ease: "linear",
//             duration: 5,
//             // repeat: Infinity
//           }}
//           onAnimationComplete={() => {
//             console.log("x", x2);
//             console.log("y", y2);
//             setX2(Math.random() * 400);
//             setY2(Math.random() * 400);
//           }}
//         >
//           <svg
//             width='400'
//             height='750'
//             viewBox='0 0 750 750'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <g filter='url(#filter1_f)'>
//               <circle
//                 cx='375'
//                 cy='375'
//                 r='175'
//                 fill='url(#paint0_linear)'
//                 fillOpacity='0.75'
//               />
//             </g>
//             <defs>
//               <filter
//                 id='filter1_f'
//                 x='0'
//                 y='0'
//                 width='750'
//                 height='750'
//                 filterUnits='userSpaceOnUse'
//                 colorInterpolationFilters='sRGB'
//               >
//                 <feFlood floodOpacity='0' result='BackgroundImageFix' />
//                 <feBlend
//                   mode='normal'
//                   in='SourceGraphic'
//                   in2='BackgroundImageFix'
//                   result='shape'
//                 />
//                 <feGaussianBlur
//                   stdDeviation='100'
//                   result='effect1_foregroundBlur'
//                 />
//               </filter>
//               <linearGradient
//                 id='paint1_linear'
//                 x1='375'
//                 y1='200'
//                 x2='375'
//                 y2='550'
//                 gradientUnits='userSpaceOnUse'
//               >
//                 <stop stopColor='#2bc6cb' />
//                 <stop offset='0.41849' stopColor='#3CBBB1' />
//                 <stop offset='0.503309' stopColor='#3CBBB1' />
//                 <stop offset='0.747164' stopColor='#3CBBB1' />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { motion } from "framer-motion";
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
      <div className='absolute right-0 opacity-100'>
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
          <svg
            width={SVG_WIDTH.toString()}
            height='1000'
            viewBox='0 0 1000 1000'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_f)'>
              <circle
                cx='375'
                cy='375'
                r='175'
                fill='url(#paint0_linear)'
                fillOpacity='0.75'
              />
            </g>
            <defs>
              <filter
                id='filter0_f'
                x='0'
                y='0'
                width='1000'
                height='1000'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='100'
                  result='effect1_foregroundBlur'
                />
              </filter>
              <linearGradient
                id='paint0_linear'
                x1='375'
                y1='200'
                x2='375'
                y2='550'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#a1cff5' />
                <stop offset='0.41849' stopColor='#3CBBB1' />
                <stop offset='0.503309' stopColor='#3c3ebb' />
                <stop offset='0.747164' stopColor='#EE4266' />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

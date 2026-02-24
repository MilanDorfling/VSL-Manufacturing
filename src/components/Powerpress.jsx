import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PressVideo from '../assets/videos/VSL Footage - Press Pack1.mp4';
import img1 from '../assets/pictures/SWD13733.JPG';
import img2 from '../assets/pictures/SWD13765.JPG';
import img3 from '../assets/pictures/SWD13722.JPG';
import img4 from '../assets/pictures/SWD13618.JPG';
import img5 from '../assets/pictures/Aerial 2.JPG'
import img6 from '../assets/pictures/038.jpg'
import img7 from '../assets/pictures/040.jpg'
import img8 from '../assets/pictures/041.jpg'

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
  );

const imageSections = [
  {
    img: img1,
    alt: "Press Line - Main",
    title: "Press Line Overview",
    plate: "Gqeberha (Port Elizabeth)",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Press Line Overview</h3>
        <div className="flex flex-col items-center">
          <p className="text-center mb-2">The VSL press line consists of 4 presses:</p>
          <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
            <li><span className="font-bold">Lead Press</span>: YS4L-2000 (2000 ton, 20000 kN, Air Cushion 500-3000 kN)</li>
            <li>YS4-1000 (1000 ton, 10000 kN)</li>
            <li>YS4-1000 (1000 ton, 10000 kN)</li>
            <li>YS4-1000 (1000 ton, 10000 kN)</li>
          </ul>
          <p className="text-center mt-2">These presses enable high-precision, high-capacity stamping for a wide range of medium-to-large components.</p>
        </div>
      </div>
    )
  },
  {
    img: img2,
    alt: "YS4L-2000 Press",
    title: "YS4L-2000 Specs",
    plate: "Gqeberha (Port Elizabeth)",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">YS4L-2000 (2000 ton) Specs</h3>
        <ul className="list-disc pl-8 text-left w-fit mx-auto">
          <li>Nominal Pressure: 20000 kN</li>
          <li>Nominal Pressure Stroke: 13 mm</li>
          <li>Stroke of Slide: 1200 mm</li>
          <li>Strokes per Minute: 10–20 SPM</li>
          <li>Max. Die Set Height: 1530 mm</li>
          <li>Size of Table: 5000 × 2500 mm</li>
          <li>Air Cushion Force: 500–3000 kN</li>
          <li>Air Cushion Stroke: 39–300 mm</li>
        </ul>
      </div>
    )
  },
  {
    img: img3,
    alt: "YS4-1000 Press",
    title: "YS4-1000 Specs",
    plate: "Gqeberha (Port Elizabeth)",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">YS4-1000 (1000 ton) Specs</h3>
        <ul className="list-disc pl-8 text-left w-fit mx-auto">
          <li>Nominal Pressure: 10000 kN</li>
          <li>Nominal Pressure Stroke: 13 mm</li>
          <li>Stroke of Slide: 1000 mm</li>
          <li>Strokes per Minute: 10–20 SPM</li>
          <li>Max. Die Set Height: 1400 mm</li>
          <li>Size of Table: 4500 × 2500 mm</li>
        </ul>
      </div>
    )
  },
  // Team section
  {
    img: img4, // Reuse an existing image or replace with a team photo if available
    alt: "VSL Powerpress Team",
    title: "Meet the Team",
    plate: "Gqeberha (Port Elizabeth)",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Our Expert Team</h3>
        <div className="flex flex-col items-center">
          <p className="text-center mb-2">
            Behind every successful press operation is a team of highly skilled professionals. Our VSL Powerpress team brings years of experience, technical expertise, and a passion for precision engineering to every project.
          </p>
          <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
            <li>Certified press operators with extensive training</li>
            <li>Commitment to safety, quality, and efficiency</li>
            <li>Proven track record in handling complex stamping projects</li>
            <li>Collaborative approach to problem-solving and innovation</li>
          </ul>
          <p className="text-center mt-2">
            Trust our knowledgeable team to deliver outstanding results and maintain the highest standards in every aspect of press line operation.
          </p>
        </div>
      </div>
    )
  },
  // Komani Site Overview
  {
    img: img5, // Replace with Komani overview image
    alt: "Komani Plant Overview",
    title: "Press Line Overview",
    plate: "Komani (Queenstown)",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Komani Plant Overview</h3>
        <p className="text-center mb-2">The Komani site consists of two main press lines (A and B), featuring a total of 12 presses. The A Line includes models A1–A8 (DANLY, CLEARING, WILKENS & MITCHEL), while the B Line includes BA, B1, B2, and B3 (LIE CHIEH, BLISS, WILKENS & MITCHEL). These presses cover a range of mechanical and hydraulic operations, supporting a variety of stamping and forming needs.</p>
      </div>
    )
  },
  // Komani A Line: A1 & A8, A7
  {
    img: img6, // Replace with Komani A Line image
    alt: "Komani Plant A Line",
    title: "A Line Presses (A1, A7, A8)",
    plate: "Komani (Queenstown)",
    info: (
      <div className="text-white flex flex-col md:flex-row md:justify-center md:gap-12">
        <div>
          <h4 className="text-lg font-bold mb-2 text-center">A1 & A8 (DANLY)</h4>
          <ul className="list-disc pl-8 text-left mx-auto mb-4">
            <li><span className="font-bold">Mechanical</span></li>
            <li><span className="font-bold">Strokes/hour:</span> 240</li>
            <li><span className="font-bold">Capacity (Tons):</span> 800 (Inner), 600 (Outer)</li>
            <li><span className="font-bold">Bed Area (mm):</span> 2743.2 × 1676.4</li>
            <li><span className="font-bold">Shut Heights (mm):</span> Inner 1372–1880, Outer 1270–1778</li>
            <li><span className="font-bold">Cushions:</span> Ram 56 ton, Bolster 120 ton</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 text-center">A7 (WILKENS & MITCHEL)</h4>
          <ul className="list-disc pl-8 text-left mx-auto mb-4">
            <li><span className="font-bold">Mechanical</span></li>
            <li><span className="font-bold">Strokes/hour:</span> 240</li>
            <li><span className="font-bold">Capacity (Tons):</span> 400 (Inner & Outer)</li>
            <li><span className="font-bold">Bed Area (mm):</span> 2743.2 × 1828.8</li>
            <li><span className="font-bold">Shut Heights (mm):</span> Inner 450, Outer 1035</li>
            <li><span className="font-bold">Cushions:</span> Ram 56 ton, Bolster 56 ton</li>
          </ul>
        </div>
      </div>
    )
  },
  // Komani A Line: A2–A6
  {
    img: img7, // Replace with Komani A Line image
    alt: "Komani Plant A Line",
    title: "A Line Presses (A2–A6)",
    plate: "Komani (Queenstown)",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">A Line Presses (A2–A6)</h3>
        <ul className="list-disc pl-8 text-left w-fit mx-auto">
          <li><span className="font-bold">Mechanical</span></li>
          <li><span className="font-bold">Strokes/hour:</span> 240</li>
          <li><span className="font-bold">Capacity (Tons):</span> 400 (Inner & Outer)</li>
          <li><span className="font-bold">Bed Area (mm):</span> 2743.2 × 1828.8</li>
          <li><span className="font-bold">Shut Heights (mm):</span> Inner 711, Outer 1067</li>
          <li><span className="font-bold">Cushions:</span> Ram 56 ton, Bolster 56 ton</li>
        </ul>
      </div>
    )
  },
  // Komani B Line: BA, B1, B2, B3
  {
    img: img8, // Replace with Komani B Line image
    alt: "Komani Plant B Line",
    title: "B Line Presses (BA, B1, B2, B3)",
    plate: "Komani (Queenstown)",
    info: (
      <div className="text-white flex flex-col md:flex-row md:justify-center md:gap-12">
        <div>
          <h4 className="text-lg font-bold mb-4 text-center">BA (LIE CHIEH)</h4>
          <ul className="list-disc pl-8 text-left mx-auto mb-4">
            <li><span className="font-bold">Hydraulic</span></li>
            <li><span className="font-bold">Strokes/hour:</span> 120 (BA)</li>
            <li><span className="font-bold">Capacity (Tons):</span> 1000 (BA)</li>
            <li><span className="font-bold">Bed Area (mm):</span> 4500 × 2500 (BA)</li>
            <li><span className="font-bold">Shut Heights (mm):</span> 700–2200 (BA)</li>
            <li><span className="font-bold">Cushions:</span> Ram 100 ton, Bolster 300 ton (BA)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-center">B1 - B3 (WILKENS & MITCHEL)</h4>
          <ul className="list-disc pl-8 text-left mx-auto mb-4">
            <li><span className="font-bold">Mechanical</span></li>
            <li><span className="font-bold">Strokes/hour:</span> 180</li>
            <li><span className="font-bold">Capacity (Tons):</span> 800 (B1 & B2), 400 (B3)</li>
            <li><span className="font-bold">Bed Area (mm):</span> 3352.8 × 2133.6 (B1 & B2), 3962.4 × 2133.6 (B3)</li>
            <li><span className="font-bold">Shut Heights (mm):</span> 314–908 (B1 & B2), 405–915 (B3)</li>
            <li><span className="font-bold">Cushions:</span> Ram 100 ton (B1 & B2), 120 ton (B3)</li>
          </ul>
        </div>
      </div>
    )
  }
];

const PowerPress = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10">
      {/* Restore h1 and video layout */}
      <div className="w-full max-w-6xl mx-auto py-5 sm:pt-12 md:pt-20 pb-30 px-4 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-center bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent drop-shadow-lg dark:from-white/80 dark:to-white/30 mb-15 leading-normal">
          Press Line & Equipment
        </h1>
        <div className="w-full flex justify-center mb-8">
          <video
            src={PressVideo}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={img1}
            className="rounded-2xl shadow-lg w-full max-w-6xl object-cover bg-black"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
        <p className="text-xl text-center text-white/80 font-medium mb-2 mt-15 max-w-4xl mx-auto">
        Discover the capabilities of our advanced press line below. Learn more about the unique features, technical specifications, and advantages of every press in our facility. Dive in to see how our equipment delivers precision and performance for every project.
      </p>
      </div>
      <div className="flex flex-col w-full gap-8 px-0">
        {/* Only show the PE and Queenstown section titles once at the start of each group */}
        {(() => {
          let lastPlate = null;
          return imageSections.map((section, idx) => {
            const showPlateTitle = section.plate !== lastPlate;
            lastPlate = section.plate;
            return (
              <React.Fragment key={idx}>
                {showPlateTitle && (
                  <div className="w-full max-w-6xl flex flex-col items-start mb-2 px-4 mt-15">
                    <motion.h2
                      className="text-3xl font-extrabold text-white px-6 py-2 mb-4 ml-4 bg-black border-4 border-black rounded drop-shadow-lg tracking-tight uppercase"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      whileHover={{ y: '-30%' }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.plate}
                    </motion.h2>
                  </div>
                )}
                <div className="flex flex-col items-center w-full">
                  <motion.div
                    className={`relative w-full rounded-none overflow-hidden shadow-lg border-0 cursor-pointer group ${openIdx === idx ? 'ring-4 ring-blue-400' : ''}`}
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    initial={false}
                    animate={{
                      scale: openIdx === idx ? 1.03 : 1,
                      height: openIdx === idx ? '30rem' : '15rem',
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                    style={{ height: openIdx === idx ? '22rem' : '11rem' }}
                  >
                    {/* Solid bg overlay to prevent SVG bleed-through */}
                    <div
                      className={`absolute inset-0 z-0 transition-all duration-500 pointer-events-none ${openIdx === idx || document?.body?.classList?.contains('group-hover') ? 'bg-transparent' : 'bg-zinc-950'}`}
                      style={{ backgroundColor: openIdx === idx ? 'transparent' : 'rgba(24,24,27,1)' }}
                    />
                    <img
                      src={section.img}
                      alt={section.alt}
                      className={
                        `object-cover w-full h-full transition-all duration-500 relative z-10 ` +
                        (openIdx === idx ? 'opacity-100 scale-105' : 'opacity-60') +
                        ' group-hover:grayscale-0 grayscale group-hover:opacity-100'
                      }
                      style={{ width: '100vw', maxWidth: '100vw' }}
                    />
                    {/* Title overlay bottom left, hide when open */}
                    <AnimatePresence>
                      {openIdx !== idx && (
                        <motion.div
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 40, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 flex items-end z-10"
                          style={{ width: 'auto', minWidth: '0' }}
                        >
                          <motion.h2
                            className="text-3xl font-extrabold text-white px-6 py-2 mb-4 ml-4 bg-black border-4 border-black rounded drop-shadow-lg tracking-tight"
                            initial={false}
                            animate={{ y: '0%' }}
                            whileHover={{ y: '-30%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          >
                            {section.title}
                          </motion.h2>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Info overlay inside image */}
                    <AnimatePresence>
                      {openIdx === idx && (
                        <motion.div
                          key="info"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 30 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 text-white z-20"
                          style={{ pointerEvents: 'none' }}
                        >
                          <div className="max-w-xl mx-auto text-center pointer-events-auto">{section.info}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </React.Fragment>
            );
          });
        })()}
      </div>
      {/* Contact button at the bottom */}
      <div className="w-full flex justify-center mt-12">
        <a
          href="/contact"
          className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
          aria-label="Contact us for more information"
        >
          Get More Information
          <BottomGradient />
        </a>
      </div>
    </div>
  );
};

export default PowerPress;

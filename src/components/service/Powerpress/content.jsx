import React from 'react';
import PressVideo from '../../../assets/videos/VSL Footage - Press Pack1.mp4';
import img1 from '../../../assets/pictures/SWD13733.JPG';
import img2 from '../../../assets/pictures/SWD13765.JPG';
import img3 from '../../../assets/pictures/SWD13722.JPG';
import img4 from '../../../assets/pictures/SWD13618.JPG';
import img5 from '../../../assets/pictures/Aerial 2.JPG';
import img6 from '../../../assets/pictures/038.jpg';
import img8 from '../../../assets/pictures/041.jpg';

export const powerpressHero = {
  title: 'Press Line & Equipment',
  description:
    'Discover the capabilities of our advanced press line below. Learn more about the unique features, technical specifications, and advantages of every press in our facility. Dive in to see how our equipment delivers precision and performance for every project.',
  videoSrc: PressVideo,
  videoPoster: img1,
  videoTitle: 'Press line footage',
};

export const powerpressImageSections = [
  {
    img: img1,
    alt: 'Press Line - Main',
    title: 'Press Line Overview',
    plate: 'Gqeberha (Port Elizabeth)',
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
    ),
  },
  {
    img: img2,
    alt: 'YS4L-2000 Press',
    title: 'YS4L-2000 Specs',
    plate: 'Gqeberha (Port Elizabeth)',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">YS4L-2000 (2000 ton) Specs</h3>
        <ul className="list-disc pl-8 text-left w-fit mx-auto">
          <li>Nominal Pressure: 20000 kN</li>
          <li>Nominal Pressure Stroke: 13 mm</li>
          <li>Stroke of Slide: 1200 mm</li>
          <li>Strokes per Minute: 10-20 SPM</li>
          <li>Max. Die Set Height: 1530 mm</li>
          <li>Size of Table: 5000 x 2500 mm</li>
          <li>Air Cushion Force: 500-3000 kN</li>
          <li>Air Cushion Stroke: 39-300 mm</li>
        </ul>
      </div>
    ),
  },
  {
    img: img3,
    alt: 'YS4-1000 Press',
    title: 'YS4-1000 Specs',
    plate: 'Gqeberha (Port Elizabeth)',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">YS4-1000 (1000 ton) Specs</h3>
        <ul className="list-disc pl-8 text-left w-fit mx-auto">
          <li>Nominal Pressure: 10000 kN</li>
          <li>Nominal Pressure Stroke: 13 mm</li>
          <li>Stroke of Slide: 1000 mm</li>
          <li>Strokes per Minute: 10-20 SPM</li>
          <li>Max. Die Set Height: 1400 mm</li>
          <li>Size of Table: 4500 x 2500 mm</li>
        </ul>
      </div>
    ),
  },
  {
    img: img4,
    alt: 'VSL Powerpress Team',
    title: 'Meet the Team',
    plate: 'Gqeberha (Port Elizabeth)',
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
    ),
  },
  {
    img: img5,
    alt: 'Komani Plant Overview',
    title: 'Press Line Overview',
    plate: 'Queenstown',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Komani Plant Overview</h3>
        <p className="text-center mb-2">The Komani site consists of two main press lines (A and B), featuring a total of 12 presses. The A Line includes models A1-A8 (DANLY, CLEARING, WILKENS & MITCHEL), while the B Line includes BA, B1, B2, and B3 (LIE CHIEH, BLISS, WILKENS & MITCHEL). These presses cover a range of mechanical and hydraulic operations, supporting a variety of stamping and forming needs.</p>
      </div>
    ),
  },
  {
    img: img6,
    alt: 'Komani Plant A Line',
    title: 'A Line Presses',
    plate: 'Queenstown',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-5 text-center">A Line Presses</h3>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-12 gap-8 lg:gap-24 w-full max-w-full md:max-w-7xl mx-auto">
          <div className="flex-1 min-w-[220px] md:min-w-[250px] lg:min-w-[280px] px-2 md:px-4">
            <h4 className="text-lg font-bold mb-2 text-center">A1 & A8</h4>
            <ul className="list-disc pl-8 text-left mx-auto mb-4">
              <li><span className="font-bold">Mechanical</span></li>
              <li><span className="font-bold">Strokes/hour:</span> 240</li>
              <li><span className="font-bold">Capacity (Tons):</span> 800 (Inner), 600 (Outer)</li>
              <li><span className="font-bold">Bed Area (mm):</span> 2743.2 x 1676.4</li>
              <li><span className="font-bold">Shut Heights (mm):</span> Inner 1372-1880, Outer 1270-1778</li>
              <li><span className="font-bold">Cushions:</span> Ram 56 ton, Bolster 120 ton</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px] md:min-w-[250px] lg:min-w-[280px] px-2 md:px-4">
            <h4 className="text-lg font-bold mb-2 text-center">A7</h4>
            <ul className="list-disc pl-8 text-left mx-auto mb-4">
              <li><span className="font-bold">Mechanical</span></li>
              <li><span className="font-bold">Strokes/hour:</span> 240</li>
              <li><span className="font-bold">Capacity (Tons):</span> 400 (Inner & Outer)</li>
              <li><span className="font-bold">Bed Area (mm):</span> 2743.2 x 1828.8</li>
              <li><span className="font-bold">Shut Heights (mm):</span> Inner 450, Outer 1035</li>
              <li><span className="font-bold">Cushions:</span> Ram 56 ton, Bolster 56 ton</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px] md:min-w-[250px] lg:min-w-[280px] px-2 md:px-4">
            <h4 className="text-lg font-bold mb-2 text-center">A2-A6</h4>
            <ul className="list-disc pl-8 text-left mx-auto mb-4">
              <li><span className="font-bold">Mechanical</span></li>
              <li><span className="font-bold">Strokes/hour:</span> 240</li>
              <li><span className="font-bold">Capacity (Tons):</span> 400 (Inner & Outer)</li>
              <li><span className="font-bold">Bed Area (mm):</span> 2743.2 x 1828.8</li>
              <li><span className="font-bold">Shut Heights (mm):</span> Inner 711, Outer 1067</li>
              <li><span className="font-bold">Cushions:</span> Ram 56 ton, Bolster 56 ton</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    img: img8,
    alt: 'Komani Plant B Line',
    title: 'B Line Presses',
    plate: 'Queenstown',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-5 text-center">B Line Presses</h3>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-12 gap-8 lg:gap-24 w-full max-w-full md:max-w-7xl mx-auto">
          <div className="flex-1 min-w-[220px] md:min-w-[250px] lg:min-w-[280px] px-2 md:px-4">
            <h4 className="text-lg font-bold mb-4 text-center">BA (LIE CHIEH)</h4>
            <ul className="list-disc pl-8 text-left mx-auto mb-4">
              <li><span className="font-bold">Hydraulic</span></li>
              <li><span className="font-bold">Strokes/hour:</span> 120 (BA)</li>
              <li><span className="font-bold">Capacity (Tons):</span> 1000 (BA)</li>
              <li><span className="font-bold">Bed Area (mm):</span> 4500 x 2500 (BA)</li>
              <li><span className="font-bold">Shut Heights (mm):</span> 700-2200 (BA)</li>
              <li><span className="font-bold">Cushions:</span> Ram 100 ton, Bolster 300 ton (BA)</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px] md:min-w-[250px] lg:min-w-[280px] px-2 md:px-4">
            <h4 className="text-lg font-bold mb-4 text-center">B1 - B3 (WILKENS & MITCHEL)</h4>
            <ul className="list-disc pl-8 text-left mx-auto mb-4">
              <li><span className="font-bold">Mechanical</span></li>
              <li><span className="font-bold">Strokes/hour:</span> 180</li>
              <li><span className="font-bold">Capacity (Tons):</span> 800 (B1 & B2), 400 (B3)</li>
              <li><span className="font-bold">Bed Area (mm):</span> 3352.8 x 2133.6 (B1 & B2), 3962.4 x 2133.6 (B3)</li>
              <li><span className="font-bold">Shut Heights (mm):</span> 314-908 (B1 & B2), 405-915 (B3)</li>
              <li><span className="font-bold">Cushions:</span> Ram 100 ton (B1 & B2), 120 ton (B3)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

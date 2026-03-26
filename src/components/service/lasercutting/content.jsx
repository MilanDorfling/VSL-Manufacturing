import React from 'react';
import videoTour from '../../../assets/videos/laser_cut.mp4';
import laser1 from '../../../assets/pictures/LASER1.jpg';
import laser2 from '../../../assets/pictures/Laser2.png';
import laser3 from '../../../assets/pictures/Laser4.png';
import img3 from '../../../assets/pictures/Train.jpeg';

export const laserHero = {
  title: 'Laser Cutting Operations',
  machineTitle: 'TruLaser Cell 5030',
  introCopy: (
    <span className="text-neutral-900 dark:text-white font-semibold">
      Our Port Elizabeth facility features the newly commissioned Trumpf TruLaser Cell 5030, a
      state-of-the-art system for both 2D and 3D laser cutting. This machine delivers outstanding
      precision, flexibility, and efficiency for a wide range of applications.
      <br />
      <br />
      <br />
      Our in-house design office provides expert design and programming support, ensuring seamless
      project execution from concept to final cut.
    </span>
  ),
  videoSrc: videoTour,
  videoPoster: laser1,
};

export const laserImageSections = [
  {
    img: laser1,
    alt: 'TruLaser Cell 5030',
    title: 'Features',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">TruLaser Cell 5030 Features</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li><span className="font-semibold">2D & 3D Laser Cutting:</span> Flexible processing for flat and formed parts.</li>
          <li><span className="font-semibold">Large Working Area:</span> X: 3,000 mm, Y: 1,500 mm, Z: 400 mm.</li>
          <li><span className="font-semibold">Laser Power:</span> 2 kW - 5 kW (fiber or CO2 options).</li>
          <li><span className="font-semibold">Fast Setup & Changeover:</span> Ideal for prototypes and small/medium series.</li>
          <li><span className="font-semibold">User-Friendly Control:</span> Intuitive interface for efficient operation.</li>
        </ul>
      </div>
    ),
  },
  {
    img: laser2,
    alt: 'Laser Benefits',
    title: 'Benefits',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Why Choose TruLaser Cell 5030?</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li>Outstanding precision and repeatability</li>
          <li>Handles a wide range of materials and thicknesses</li>
          <li>Rapid turnaround for prototypes and production</li>
          <li>Expert design and programming support in-house</li>
        </ul>
      </div>
    ),
  },
  {
    img: laser3,
    alt: 'Laser Specs',
    title: 'Technical Specs',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Technical Specifications</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li><span className="font-semibold">Working Area (X/Y/Z):</span> 3,000 mm x 1,500 mm x 400 mm</li>
          <li><span className="font-semibold">Laser Power:</span> 2 kW - 5 kW (fiber or CO2)</li>
          <li><span className="font-semibold">Material Range:</span> Steel, stainless, aluminum, and more</li>
          <li><span className="font-semibold">Cutting, Welding, Drilling:</span> Versatile multi-process capability</li>
          <li><span className="font-semibold">Control:</span> Intuitive, user-friendly interface</li>
        </ul>
      </div>
    ),
  },
  {
    img: img3,
    alt: 'Laser Applications',
    title: 'Applications',
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Applications</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li>Flat and formed part cutting</li>
          <li>Prototyping and small/medium series</li>
          <li>Automotive and industrial components</li>
          <li>Custom fabrication and engineering</li>
          <li>Welding and drilling operations</li>
        </ul>
      </div>
    ),
  },
];

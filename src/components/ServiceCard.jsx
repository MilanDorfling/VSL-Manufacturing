import React from 'react';
// Import BottomGradient from Header or define locally if not exported
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

/**
 * ServiceCard Component
 * Props:
 * - title: string
 * - description: string
 * - icon: ReactNode (icon or image)
 * - onClick: function (optional)
 */
const ServiceCard = ({ title, description, onClick }) => {
  return (
    <div
      className="flex flex-col items-center bg-zinc-800/60 rounded-2xl shadow-lg p-8 w-full max-w-xs h-90 transition-transform hover:-translate-y-2 hover:shadow-2xl "
    >
      
      <h3 className="text-2xl font-bold text-white mb-2 text-center">{title}</h3>
      <p className="text-zinc-300 text-center mb-4">{description}</p>
      <button
        className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626] transition-colors hover:bg-zinc-900 hover:text-cyan-400 focus:outline-none focus:ring-0 focus:ring-offset-0 mt-auto cursor-pointer"
        onClick={onClick}
      >
        More
        <BottomGradient />
      </button>
    </div>
  );
};

export default ServiceCard;

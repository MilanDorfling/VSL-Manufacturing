import React from 'react';

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const ServiceContactButton = ({
  href = '/contact',
  label = 'Get More Information',
  className = '',
}) => {
  return (
    <div className={`w-full flex justify-center ${className}`.trim()}>
      <a
        href={href}
        className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
        aria-label="Contact us for more information"
      >
        {label}
        <BottomGradient />
      </a>
    </div>
  );
};

export default ServiceContactButton;

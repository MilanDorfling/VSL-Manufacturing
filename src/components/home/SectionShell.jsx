import React from 'react';

const SectionShell = ({
  as: Tag = 'section',
  className = '',
  containerClassName = '',
  children,
  ...rest
}) => {
  return (
    <Tag className={`w-full px-4 sm:px-6 md:px-10 lg:px-16 ${className}`.trim()} {...rest}>
      <div className={`mx-auto w-full max-w-7xl ${containerClassName}`.trim()}>{children}</div>
    </Tag>
  );
};

export default SectionShell;

import React from 'react';

const TextBlock = ({ paragraphs = [], className = '' }) => {
  return (
    <div className={`space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base ${className}`.trim()}>
      {paragraphs.map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 30)}-${index}`}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TextBlock;

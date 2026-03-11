import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const HoverCard = ({
  children,
  className,
  overlayClassName,
  contentClassName,
  onClick,
  hoverScale = 1.02,
  enableHover = true,
  transition = { duration: 0.2 },
  showOverlay = true,
}) => {
  const isClickable = typeof onClick === 'function';

  const handleKeyDown = (event) => {
    if (!isClickable) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <motion.article
      className={cn('group relative overflow-hidden', isClickable && 'cursor-pointer', className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      whileHover={enableHover ? { scale: hoverScale } : {}}
      transition={transition}
    >
      {showOverlay ? (
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
            overlayClassName
          )}
          style={{ pointerEvents: 'none' }}
        />
      ) : null}

      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </motion.article>
  );
};

export default HoverCard;

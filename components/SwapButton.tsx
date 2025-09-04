
import React from 'react';

interface SwapButtonProps {
  onClick: () => void;
}

const SwapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);

const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center my-2">
      <button
        onClick={onClick}
        className="p-3 rounded-full bg-gray-700 hover:bg-indigo-600 text-gray-300 hover:text-white transition-all duration-200 transform hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
        aria-label="Swap units"
      >
        <SwapIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SwapButton;

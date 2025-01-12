import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className="bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg fixed bottom-5 right-5 "
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;

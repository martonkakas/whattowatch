const Icon = ({ name, diameter = 16 }: { name: string; diameter?: number }) => {
  switch (name) {
    case 'close':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      );
    case 'help':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} viewBox="0 0 24 24" fill="none">
          <path fill="currentColor" d="M12 2C6.478 2 2 6.48 2 12c0 5.524 4.478 10 10 10 5.523 0 10-4.476 10-10 0-5.52-4.477-10-10-10Zm0 18.064A8.06 8.06 0 0 1 3.935 12 8.062 8.062 0 0 1 12 3.935 8.062 8.062 0 0 1 20.064 12 8.06 8.06 0 0 1 12 20.064Zm4.324-10.29c0 2.704-2.92 2.746-2.92 3.745v.255a.484.484 0 0 1-.484.484h-1.84a.484.484 0 0 1-.484-.484v-.349c0-1.441 1.092-2.018 1.918-2.48.708-.397 1.142-.667 1.142-1.193 0-.696-.887-1.157-1.604-1.157-.935 0-1.367.442-1.973 1.208a.484.484 0 0 1-.672.086l-1.122-.85a.485.485 0 0 1-.107-.66c.953-1.4 2.166-2.185 4.056-2.185 1.978 0 4.09 1.544 4.09 3.58Zm-2.63 6.742c0 .934-.76 1.694-1.694 1.694-.934 0-1.694-.76-1.694-1.694 0-.934.76-1.693 1.694-1.693.934 0 1.694.76 1.694 1.693Z"/>
        </svg>
      );
    case 'plus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      );
    case 'minus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      );
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      );
    default:
      return (<span></span>);
  }
};

export default Icon;

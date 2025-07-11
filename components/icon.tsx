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
        <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9.75a3 3 0 0 1 5.82 1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 0 1-.75-.75c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v1.5a.75.75 0 0 1-.75.75H6a3 3 0 0 1 3-3z"></path>
          <line x1="12" y1="17" x2="12" y2="17"></line>
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

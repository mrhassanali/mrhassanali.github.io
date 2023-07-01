import React from 'react';

const InnerHTML = ({ string }) => {
  return <div dangerouslySetInnerHTML={{ __html: string }} />;
};

export default InnerHTML;

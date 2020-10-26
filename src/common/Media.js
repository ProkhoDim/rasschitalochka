import React from 'react';
import MediaQuery from 'react-responsive';

const Media = ({ device, children }) => {
  return (
    <>
      {device === 'mobile' && (
        <MediaQuery maxDeviceWidth={767}>{children}</MediaQuery>
      )}
      {device === 'tablet' && (
        <MediaQuery minDeviceWidth={768} maxDeviceWidth={1339}>
          {children}
        </MediaQuery>
      )}
      {device === 'desktop' && (
        <MediaQuery minDeviceWidth={1440}>{children}</MediaQuery>
      )}
    </>
  );
};

export default Media;

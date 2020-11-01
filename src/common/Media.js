import React from 'react';
import MediaQuery from 'react-responsive';

const Media = ({ device, children }) => {
  return (
    <>
      {device === 'mobile' && (
        <MediaQuery maxDeviceWidth={767}>{children}</MediaQuery>
      )}
      {device === 'onlyTablet' && (
        <MediaQuery minDeviceWidth={768} maxDeviceWidth={1279}>
          {children}
        </MediaQuery>
      )}
      {device === 'fromTablet' && (
        <MediaQuery minDeviceWidth={768}>{children}</MediaQuery>
      )}
      {device === 'desktop' && (
        <MediaQuery minDeviceWidth={1280}>{children}</MediaQuery>
      )}
    </>
  );
};

export default Media;

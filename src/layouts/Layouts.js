import React from 'react';
import DesktopLayout from './desktop';
import MobileLayout from './mobile';
import TabletLayout from './tablet';

const Layouts = () => {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
      <TabletLayout />
    </>
  );
};

export default Layouts;

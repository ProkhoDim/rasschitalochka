import React from 'react';
import { TotalBalance } from '..';
import { Media } from '../../common';
import NavBar from './NavBar';

const NavBarView = ({ children }) => {
  return (
    <>
      <Media device="onlyTablet">
        <NavBar children={<TotalBalance />} />
      </Media>
    </>
  );
};

export default NavBarView;

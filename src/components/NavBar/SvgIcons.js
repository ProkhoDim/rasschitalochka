import React from 'react';
import svg from './navigation.svg';
import s from './NavBar.module.css';

const SvgIcons = ({ id }) => {
  return (
    <>
      <svg className={s.icon}>
        <use href={`${svg}#${id}`}></use>
      </svg>
    </>
  );
};

export default SvgIcons;

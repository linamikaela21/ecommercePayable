import React from 'react';
import { useSelector } from 'react-redux';
import './directory.styles.scss';
import { MenuItem } from '../Menu-Item/Menu-item';

export const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);
  return (
    <div className="directory-menu">
      {sections?.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

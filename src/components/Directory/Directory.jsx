import React from 'react';
import './directory.styles.scss';
import { sections as data } from './data';
import { MenuItem } from '../Menu-Item/Menu-item';

//const [sections, setSections] = useState(data);

export const Directory = () => {
  return (
    <div className="directory-menu">
      {data.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

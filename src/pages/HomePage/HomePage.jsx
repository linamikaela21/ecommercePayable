import React from 'react';
import { Directory } from '../../components/Directory/Directory';
import './Homepage.styles.scss';

export const HomePage = () => {
  return (
    <div className="homePage" data-testid="test-id-homePage">
      <Directory />
    </div>
  );
};

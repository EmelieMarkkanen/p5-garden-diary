import React from 'react';
import NoResults from '../assets/no-results.png';
import styles from '../styles/NotFound.module.css';
import Asset from './Asset';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className={styles.Margin}>
        <Link to="/">
          <Asset src={NoResults} message={`Sorry, the page you're looking for doesn't exist. Click the cactus to go back home!`} />
        </Link>
      </div>
    );
  };

export default NotFound
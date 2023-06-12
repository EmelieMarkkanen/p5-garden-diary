import React from "react";
import styles from "../styles/Avatar.module.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span className={styles.AvatarContainer}>
      <LazyLoadImage
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
        effect="blur"
      />
      <span className={styles.AvatarText}>{text}</span>
    </span>
  );
};

export default Avatar;
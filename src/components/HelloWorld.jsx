import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
// import style from './hello-world.css';
// import image from './image.png';
// import SvgImage from './rocket.svg';

const HelloWorld = ({ title }) => (
  <>
    <div>
      <p className={styles.App}>
        {title}
        <span className={styles.child}>text</span>
      </p>
    </div>
  </>
);
HelloWorld.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};
export default HelloWorld;

import React, { useEffect } from 'react';
import {
  bounce,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
} from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  bounce: {
    animation: 'x .5s',
    animationName: Radium.keyframes(bounce, 'bounce'),
  },
};

const animations = [
  {
    name: 'bounceIn',
    animation: bounceIn,
  },
  {
    name: 'bounceInDown',
    animation: bounceInDown,
  },
  {
    name: 'bounceInLeft',
    animation: bounceInLeft,
  },
  {
    name: 'bounceInRight',
    animation: bounceInRight,
  },
  {
    name: 'bounceInUp',
    animation: bounceInUp,
  },
];

const Fact = ({ fact }) => {
  useEffect(() => {
    const random = Math.floor(Math.random() * animations.length);
    console.log(animations[random].name, animations[random].animation);
    styles.bounce.animationName = Radium.keyframes(
      animations[random].animation,
      animations[random].name
    );
  }, [fact]);

  return (
    <StyleRoot>
      <div className='test' style={styles.bounce}>
        {fact.text}
      </div>
      <div style={{ fontSize: 15 }}>
        Source:{' '}
        <a href={fact.source_url} target='_blank' rel='noreferrer'>
          {fact.source}
        </a>
      </div>
    </StyleRoot>
  );
};

export default Fact;

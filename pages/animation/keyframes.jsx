import { motion } from 'framer-motion';

import Playground from '../../components/Playground/Playground';

import styles from '../../styles/Keyframes.module.scss';

const Keyframes = () => {
  return (
    <Playground>
      <div className={styles.squareBackground}></div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          backgroundColor: [
            '#fe0000',
            '#c0ff00',
            '#00ff01',
            '#01ffff',
            '#ffff01',
          ],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
        className={styles.square}
      />
    </Playground>
  );
};

export default Keyframes;

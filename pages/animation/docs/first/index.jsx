import { motion } from 'framer-motion';

import Playground from '../../../../components/Playground/Playground';

import styles from './First.module.scss';

const yPath = [null, -200, 200, 200, -200, 0];
const xPath = [null, -200, -200, 200, 200, 0];
const rotatePath = [null, -360, 0, 360, 720, 360];
const borderRadiusPath = ['50%', '25%', '10%', '10%', '25%', '50%'];
const bgPath = [
  '#80ff00',
  '#fe0000',
  '#ffff01',
  '#00ff01',
  '#01ffff',
  '#ff0080',
];

const First = () => {
  return (
    <Playground>
      <motion.div
        animate={{
          rotate: rotatePath,
          x: xPath,
          y: yPath,
          backgroundColor: bgPath,
          borderRadius: borderRadiusPath,
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          loop: Infinity,
        }}
        className={styles.square}
      />
    </Playground>
  );
};

export default First;

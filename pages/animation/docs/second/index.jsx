import { useState } from 'react';
import { motion } from 'framer-motion';

import Playground from '../../../../components/Playground/Playground';

import styles from './Second.module.scss';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Second = () => {
  return (
    <Playground>
      <motion.ul className={styles.itemWrapper}>
        {data.map((item) => (
          <Item key={item} />
        ))}
      </motion.ul>
    </Playground>
  );
};

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.8,
  },
};

const Item = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <motion.li
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      className={isSelected ? styles.active : styles.inactive}
      onClick={() => setIsSelected(!isSelected)}
    />
  );
};

export default Second;

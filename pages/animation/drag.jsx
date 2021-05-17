import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useMousePosition from '../../utils/useMousePosition';

import Playground from '../../components/Playground/Playground';

import styles from '../../styles/Drag.module.scss';

const Drag = () => {
  const constraintsRef = useRef(null);

  const { x, y } = useMousePosition();

  return (
    <Playground>
      <motion.div className={styles.dragArea} ref={constraintsRef} />
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={styles.square}
      />
    </Playground>
  );
};

export default Drag;

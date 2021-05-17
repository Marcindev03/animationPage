import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

import Playground from '../../components/Playground/Playground';

import styles from '../../styles/Variants.module.scss';

const variants = {
  open: {
    opacity: 1,
    scale: 1.5,
  },
  closed: {
    opacity: 0,
  },
};

const Variants = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Playground>
      <motion.div
        animate={isModalOpen ? 'open' : 'closed'}
        variants={variants}
        className={styles.modal}
      />
      <div
        onClick={() => setIsModalOpen(!isModalOpen)}
        className={styles.iconWrapper}
      >
        {isModalOpen ? (
          <GrClose className={styles.close} />
        ) : (
          <FaBars className={styles.bars} />
        )}
      </div>
    </Playground>
  );
};

export default Variants;

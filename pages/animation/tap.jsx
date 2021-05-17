import { useState } from 'react';
import { motion } from 'framer-motion';

import Playground from '../../components/Playground/Playground';

import styles from '../../styles/Tap.module.scss';

const Tap = () => {
  const [clicks, setClicks] = useState(0);
  const click = () => setClicks(clicks + 1);

  return (
    <>
      <Playground column>
        <motion.div
          whileHover={{
            scale: 1.5,
            backgroundColor: '#000',
          }}
          whileTap={{
            scale: 0.8,
            backgroundColor: '#888',
          }}
          className={styles.square}
          onClick={click}
        />
        <span className={styles.clicksWrapper}>{clicks} clicks</span>
      </Playground>
    </>
  );
};

export default Tap;

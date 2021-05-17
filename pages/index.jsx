import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
        }}
        className={styles.heading}
      >
        Potężne animacje
      </motion.h1>
      <BulletPlayground />
      <motion.ul className={styles.listWrapper}>
        <motion.h3
          initial={{
            x: -300,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          Autorskie Animacje
        </motion.h3>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <Link href="/animation/docs/first">
            <a>Animacja 1</a>
          </Link>
        </motion.li>
      </motion.ul>
    </>
  );
};

const colors = ['#ff0055', '#0099ff', '#22cc88', '#ffaa00'];
const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

const BulletPlayground = () => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <AnimateSharedLayout>
      <ul className={styles.bulletPlayground}>
        {colors.map((color) => (
          <Item
            key={color}
            color={color}
            isSelected={selected === color}
            onClick={() => setSelected(color)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  );
};

const Item = ({ color, isSelected, onClick }) => (
  <li
    className={styles.bulletItem}
    onClick={onClick}
    style={{ backgroundColor: color }}
  >
    {isSelected && (
      <motion.div
        layoutId={styles.bulletItemOutline}
        className={styles.bulletItemOutline}
        initial={false}
        animate={{ borderColor: color }}
        transition={spring}
      />
    )}
  </li>
);

export default Home;

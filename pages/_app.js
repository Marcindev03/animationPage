import { motion, AnimatePresence } from 'framer-motion';

import Layout from '../components/Layout/Layout';

import '../styles/globals.scss';

const variants = {
  pageInitial: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={variants}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;

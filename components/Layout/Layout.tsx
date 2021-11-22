import { motion } from "framer-motion";
import { FC } from "react";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

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

export type LayoutProps = {
  key: string;
};

const Layout: FC<LayoutProps> = ({ children, key }) => (
  <>
    <Navbar />
    <motion.div
      key={key}
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
    >
      <main>{children}</main>
    </motion.div>

    <Footer />
  </>
);

export default Layout;

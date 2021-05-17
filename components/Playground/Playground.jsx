import styles from './Playground.module.scss';

const Playground = ({ column, children, ...props }) => {
  return (
    <section
      className={column ? styles.wrapperColumn : styles.wrapper}
      {...props}
    >
      {children}
    </section>
  );
};

export default Playground;

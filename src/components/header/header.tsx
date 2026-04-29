import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={ styles.header }>
      <div className={ styles.header__line } />
      <h1 className={ styles.header__title }>
        Historical
        { " " }
        <br />
        { " " }
        dates
      </h1>
    </div>
  );
};

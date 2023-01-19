import styles from '../styles/cafe.module.css'

export default function Home () {
  return (
    <div className={styles.box}>
      <h1 className={styles.h1}>Smartphone Menu</h1>
      <ul className={styles.menu}>
        <li>
          <label for='m1'></label>
          <input type='checkbox' id='m1' /> AAAAA
          <ul className={styles.submenu}>
            <li>
              <p>DDDDD</p>
            </li>
            <li>
              <p>EEEEE</p>
            </li>
          </ul>
        </li>
        <li>
          <label for='m2'></label>
          <input type='checkbox' id='m2' /> BBBBB
          <ul className={styles.submenu}>
            <li>
              <p>FFFFF</p>
            </li>
            <li>
              <p>GGGGG</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

import styles from '../styles/cafe.module.css'

export default function Home () {
  return (
    <div className={styles.box}>
      <div class='box-head'>
        <h1>Cafe Prep</h1>
      </div>
      <nav className={styles.box}>
        <h2>Drink</h2>
        <ul>
          <li>Coffee</li>
          <li>Latte</li>
          <li>Espresso</li>
        </ul>
      </nav>
    </div>
  )
}

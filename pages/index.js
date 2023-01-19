import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <h1>Home Page</h1>
      <li>
        <Link href='hoge'>HTML CSSで作る新聞の1ページ</Link>
      </li>
      <li>
        <Link href='coming'>HTML CSSで作る斜め型ボックスレイアウト</Link>
      </li>
      <li>
        <Link href='layout'>HTML CSSで作るグリッドレイアウト</Link>
      </li>
      <li>
        <Link href='menu'>HTML CSSで作るナビゲーションバー</Link>
      </li>
      <li>
        <Link href='popmenu'>HTML CSSで作るポップなメニュー</Link>
      </li>
    </div>
  )
}

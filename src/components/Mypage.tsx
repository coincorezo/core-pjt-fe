import Image from 'next/image'

export default function Mypage() {
  return (
    <article id="home" className="panel intro">
      <header>
        <h1>Jane Doe</h1>
        <p>Senior Astral Projectionist</p>
      </header>
      <a href="#work" className="jumplink pic">
        <span className="arrow icon solid fa-chevron-right">
          <span>See my work</span>
        </span>
        <Image src="/images/me.jpg" alt="" width={100} height={100} />
      </a>
    </article>
  )
}

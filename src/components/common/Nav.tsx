import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFolder, faHeart, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav id="nav">
      <Link href="/" className="icon solid fa-home">
        <FontAwesomeIcon icon={faHome as IconProp} style={{ width: '50px' }} />
      </Link>
      <Link href="/emoticon" className="icon solid fa-folder">
        <FontAwesomeIcon icon={faFolder as IconProp} style={{ width: '50px' }} />
      </Link>
      <Link href="/board" className="icon solid fa-envelope">
        <FontAwesomeIcon icon={faEnvelope as IconProp} style={{ width: '50px' }} />
      </Link>
      <Link href="/mypage" className="icon brands fa-twitter">
        <FontAwesomeIcon icon={faHeart as IconProp} style={{ width: '50px' }} />
      </Link>
    </nav>
  )
}

import Footer from '@/components/common/Footer'
import Nav from '@/components/common/Nav'
import Mypage from '@/components/Mypage'
import Emoticon from '@/components/common/Emoticon'
import BoardEdit from '@/components/BoardEdit'

export default function Home() {
  return (
    <div id="wrapper">
      <Nav />
      <div id="main">
        <Mypage />
        <Emoticon />
        <BoardEdit />
      </div>
      <Footer />
    </div>
  )
}

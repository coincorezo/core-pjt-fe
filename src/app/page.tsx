import Footer from '@/components/common/Footer'
import Nav from '@/components/common/Nav'
import Mypage from '@/components/Mypage'
import Emoticon from '@/components/common/Emoticon'
import BoardEdit from '@/components/BoardEdit'
import Header from '@/components/common/Header'
import HeaderMark from '@/components/common/HeaderMark'


export default function Home() {
  return (
    <div id="wrapper">
      <HeaderMark />
      <Header />

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

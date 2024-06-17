import Image from 'next/image'

export default function Header({ ...props }) {
  return (
    <div className="logo">
      <Image src="/images/crazecoin/coin.png" alt="로고" width={201} height={163} />
    </div>
  )
}

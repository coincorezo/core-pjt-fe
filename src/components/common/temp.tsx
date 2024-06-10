// type profileType
type profileType = 'myPage' | 'header' | 'board'

interface Props {
  type: profileType
  alt: string
}

export default function Temp({ type, alt }: Props) {
  return (
    <>
      {type === 'myPage' ? (
        <div className="profile-img">
          <picture>
            <img className="profile-user-img" alt={alt} />
          </picture>
        </div>
      ) : (
        /* CSS 작업 후 수정 */
        <div className="profile-img">
          <picture>
            <img className="profile-user-img" alt={alt} />
          </picture>
        </div>
      )}
    </>
  )
}

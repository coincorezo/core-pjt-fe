import Image from 'next/image'

export default function Emoticon() {
  return (
    <article id="work" className="panel">
      <header>
        <h2>Work</h2>
      </header>
      <p>
        Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.
      </p>
      <section>
        <div className="row">
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic01.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic02.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic03.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic04.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic05.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic06.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic07.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic08.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic09.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic10.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic11.jpg" alt="" width={100} height={100} />
            </a>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <a href="#" className="image fit">
              <Image src="/images/pic12.jpg" alt="" width={100} height={100} />
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

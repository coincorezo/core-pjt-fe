import Button from '@/components/common/Button'
import Textarea from '@/components/common/Textarea'

export default function BoardEdit() {
  return (
    <article id="contact" className="panel">
      <header>
        <h2>Contact Me</h2>
      </header>
      <form action="#" method="post">
        <div>
          <div className="row">
            <div className="col-6 col-12-medium">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-medium">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" rows={6}></textarea>
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
            <Button>버튼</Button>
            <Textarea />
          </div>
        </div>
      </form>
    </article>
  )
}

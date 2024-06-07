'use client'

import Button from '@/components/common/Button'
import Textarea from '@/components/common/Textarea'
import Checkbox from '@/components/common/Checkbox'
import Radio from '@/components/common/Radio'
import Modal from '@/components/common/Modal'
import { useState } from 'react'

export default function BoardEdit() {
  const [isOpen, setIsOpen] = useState(false)

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
            <div>
              <Checkbox name={'button'} value={'1'} onChange={() => {}}>
                sdlfjlklk
              </Checkbox>
            </div>
            <div>
              <Radio name={'btn'} value={'1'} onChange={() => {}}>
                radio
              </Radio>
            </div>
            <div>
              <Button onClick={() => setIsOpen(true)}>모달 오픈</Button>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div>모달</div>
              </Modal>
            </div>
          </div>
        </div>
      </form>
    </article>
  )
}

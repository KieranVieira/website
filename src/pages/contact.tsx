import type { NextPage } from 'next';

import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const Contact: NextPage = () => {
  return (
    <div className='content-container'>
      <Navigation/>

      <section className='mb-14'>
        <h1 className='my-6 pt-4'>So you want to get in touch?</h1>
        <p className='my-6'>I&apos;m open to any inquiries you may have. Always willing to collaborate with and help developers looking for tips, and appreciate the same in return. So please feel free to reach out to me and I&apos;ll try to get back to you as soon as possible :). </p>
        <ContactForm/>
      </section>

      <Footer/>
    </div>
  )
}

export default Contact;
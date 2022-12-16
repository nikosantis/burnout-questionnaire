import Translate from './translate'
import Header from 'components/header'
import Footer from 'components/footer'
import Intro from 'components/intro'
import Title from 'components/title'
import Questions from 'components/questions'
import ModalIndexPage from './modal'

export default function HomePage() {
  return (
    <Translate>
      <div>
        <Header />
        <main role='main'>
          <div className='mx-auto max-w-7xl px-4 lg:px-8 pt-20 pb-16 text-slate-900 dark:text-slate-200'>
            <Intro />
            <Title />
            <Questions />
          </div>
          <ModalIndexPage />
        </main>
        <Footer />
      </div>
    </Translate>
  )
}

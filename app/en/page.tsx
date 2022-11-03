import Header from 'components/header'
import Footer from 'components/footer'
import { getTranslateFromMap } from 'lib/translate'
import Intro from 'components/intro'
import Title from 'components/title'
import Questions from 'components/questions'
import ModalEnPage from './modal'

const home = getTranslateFromMap('home', 'en')
const common = getTranslateFromMap('common', 'en')

export default function HomePage() {
  return (
    <div>
      <Header title={home.title} />
      <main role='main'>
        <div className='mx-auto max-w-7xl px-4 lg:px-8 pt-20 pb-16 text-slate-900 dark:text-slate-200'>
          <Intro
            disclaimer={home.disclaimer}
            description={home.description}
            information={home.information}
          />
          <Title frequency={home.frequency} points={common.points} />
          <Questions
            questionnaire={common.questionnaire}
            points={common.points}
          />
        </div>
        <ModalEnPage />
      </main>
      <Footer />
    </div>
  )
}

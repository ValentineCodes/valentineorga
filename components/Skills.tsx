import { CiMonitor } from 'react-icons/ci'
import { BsPhone } from 'react-icons/bs'
import { LuSquareStack } from 'react-icons/lu'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Skill from './Skill'

const categories = [
  {
    Icon: CiMonitor,
    title: 'Web Development',
    tech: 'HTML, CSS, TS, NEXTJS',
  },
  {
    Icon: BsPhone,
    title: 'Mobile Development',
    tech: 'REACT NATIVE & TYPESCRIPT',
  },
  {
    Icon: LuSquareStack,
    title: 'Smart Contract Development',
    tech: 'SOLIDITY & TYPESCRIPT',
  },
]

const skills = [
  { img: '/images/html_logo.png', title: 'HTML' },
  { img: '/images/css_logo.png', title: 'CSS' },
  { img: '/images/ts-js_logo.png', title: 'Typescript / Javascript' },
  { img: '/images/react_logo.png', title: 'NextJs / React Native' },
  { img: '/images/solidity_logo.png', title: 'Solidity' },
  { img: '/images/firebase_logo.png', title: 'Firebase' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border bg-bg py-20 md:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="I strive to never stop learning"
          />
        </Reveal>

        <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-6">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.15} className="flex-1">
              <div className="flex h-full flex-col items-center gap-3 rounded-lg border-l-8 border-accent bg-accent-soft px-4 py-6 text-center">
                <category.Icon
                  className="text-3xl text-accent md:text-4xl"
                  aria-hidden
                />
                <p className="font-display text-lg font-semibold text-text md:text-xl">
                  {category.title}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-muted md:text-sm">
                  {category.tech}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 justify-items-center gap-8 md:gap-10">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 0.1}>
              <Skill img={skill.img} title={skill.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

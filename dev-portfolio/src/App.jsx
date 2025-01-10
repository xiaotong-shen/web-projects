import { useState } from 'react'
import './index.css'

const headingElements = [{name: 'email', title: 'Contact', href:'mailto:xiaotong.shen@mail.utoronto.ca'},
{name: 'linkedin', title: 'LinkedIn', href: 'https://www.linkedin.com/in/shen-xiaotong'}
]

const familiarLanguages = ["Javascript", "Python", "R", "SQL"]
const familarTechnologies = ["HTML", "CSS", "React.js", "GSAP"]

function Header({ headingElements }) {
  return <>
    <div className="heading">
      <p className='nameLogo'>Xiaotong Shen</p>
      <ul>
        {headingElements.map(element => {
          return (<li className={'nav-btn ' + element['name']}>
            <a href={element['href']} target='_blank'>{element['title']}</a>
          </li>)
        })}
      </ul>
    </div>
  </>
}

const textContainer = document.querySelectorAll(".word")

function Word( {word} ) {
  const wordArr = word.split("")
  console.log(wordArr)
  return (
  <>
    {wordArr.map((character, index) => {
      return <span key={index}>{character}</span>
    })}
  </>
  );
}

function App() {
  return (
    <>
      <Header headingElements={headingElements}/>
      <div className='hero'>
        <div className="text">        
          <div className="headline dm-serif-text-regular">
            <Word word="Xiaotong Shen — Full-Stack Dev"/>
          </div>
          <div className='description'>
            <p>Hey! I'm Xiaotong, currently pursuing DataSci @ UofT :)
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

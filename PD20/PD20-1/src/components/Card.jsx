import Avatar from './Avatar.jsx';
import Intro from './Intro.jsx';
import SkillList from './SkillList/SkillList.jsx'
import './Card.css'

function Card() {

  return (
    <>
        <div className='viskaTurim'>
          <div className='CardContainer'>
              <Avatar></Avatar>
              <Intro></Intro>
              <SkillList></SkillList>
          </div>
        </div>
    </>
  )
}

export default Card

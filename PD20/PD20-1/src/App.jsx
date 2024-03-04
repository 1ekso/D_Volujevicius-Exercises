import './App.css';
import './components/Card.css'
import './index.css'
import Card from './components/Card.jsx';


function App() {

  const status = true;


  return (
    <>
      <div className={`'viskaTurim' ${status ? 'regular' : ''}`}>  
        <div className='regular viskaTurim'>
          <Card>

          </Card>
        </div>
      </div>
    </>
  )
}

export default App

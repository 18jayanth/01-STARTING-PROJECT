import './Header.css'
import reactimage from '../../assets/react-core-concepts.png';
const reactDescriptions=['Core','Fundamental','Crucial']
function generateRandomInt(max)
{
  return Math.floor(Math.random()*(max))

}
export default function Header()
{
  const description=reactDescriptions[generateRandomInt(3)];
  return (
    <header>
        <img src={reactimage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

  )
}
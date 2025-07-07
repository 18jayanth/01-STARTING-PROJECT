import './CoreConcept.css';
export default function CoreConcepts({title,description,image}){
  return (
    <li>
      <img src={image} alt="..."/>
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}
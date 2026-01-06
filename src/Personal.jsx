import './Personal.css'

const Personal = ({ user, personal }) => {
  return (
    <div id="personal-div" style={{backgroundColor: `${personal.favColor}`}}>
      <p>{personal.firstName} {personal.lastName}, {new Date().getFullYear() - Number(personal.birthDate.substring(personal.birthDate.length - 4))}</p>
    </div>
  )
}

export default Personal
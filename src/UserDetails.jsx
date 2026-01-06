import { useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getRandomUserDetails } from "./data/userData"
import './UserDetails.css'

const UserDetails = () => {
  const { userId } = useParams()
  const location = useLocation()
  const [user, setUser] = useState(getRandomUserDetails(userId, location.state.pic))
  console.log(user)

  return (
    <div className="user">
      <img src={user.personal.profilePic} alt="an AI generated image of an origami animal" />
      <div id="user-bio">
        <p>{user.personal.firstName} is a {user.employment.jobTitle} at {user.employment.employer}</p>
    
      </div>

    </div>  
  )
}

export default UserDetails
import { useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getRandomUserDetails } from "./data/userData"
import './UserDetails.css'

import Address from "./Address"
import Cars from "./Cars"
import Employment from "./Employment"
import Personal from "./Personal"

const UserDetails = () => {
  const { userId } = useParams()
  const location = useLocation()
  const [user, setUser] = useState(getRandomUserDetails(userId, location.state.pic))
  console.log(user)

  return (
    <div className="user">
      <img src={user.personal.profilePic} alt="an AI generated image of an origami animal" />
      <div id="user-bio">
        <Personal user={user} personal={user.personal} />
        <Address user={user} address={user.address} />
        <Employment user={user} employment={user.employment} />
        <Cars user={user} cars={user.cars} />
      </div>

    </div>  
  )
}

export default UserDetails
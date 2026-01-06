const Employment = ({ user, employment }) => {
  return (
    <>
      <p>{user.personal.firstName} {user.personal.lastName} has spent {employment.yearsEmployed} years as a {employment.jobTitle} at {employment.employer}</p>
    </>
  )
}

export default Employment
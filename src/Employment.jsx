const Employment = ({ user, employment }) => {
  return (
    <>
      <p>{user.personal.firstName} {user.personal.lastName} has spent {employment.yearsEmployed} years at {employment.employer} as a {employment.jobTitle} </p>
    </>
  )
}

export default Employment
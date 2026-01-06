const Employment = ({ user, employment }) => {
  return (
    <>
      <p>{user.personal.firstName} has spent {employment.yearsEmployed} years as a {employment.jobTitle} at {employment.employer}</p>
    </>
  )
}

export default Employment
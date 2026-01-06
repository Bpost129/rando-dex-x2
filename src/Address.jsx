const Address = ({ user, address }) => {
  return (
    <>
      <p>{address.street} - {address.city}, {address.state} {address.zipCode} </p>
    </>
  )
}

export default Address
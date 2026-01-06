const Car = ({ car }) => {
  return (
    <div id="car">
      <h4>Vehicle</h4>
      <p>{car.year} {car.make} {car.model}</p>
    </div>
  )
}

export default Car
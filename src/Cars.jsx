import Car from "./Car"

const Cars = ({ user, cars }) => {
  return (
    <>
      <h3>Garage</h3>
      <div id="garage">
        {cars.map(car =>
          <Car key={car._id} car={car} />
        )}
      </div>
    </>
  )
}

export default Cars
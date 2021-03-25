const passengers = [
  {name: 'Zach', seatNumber: '12c', bordingClass: 'D', referenceCode: "AAA", destination: "Aruba"},
  {name: 'Rachel', seatNumber: '12b', bordingClass: 'D', referenceCode: "AAA", destination: "Aruba"},
  {name: 'Jess', seatNumber: '22d', bordingClass: 'A', referenceCode: "AHA", destination: "Russia"},
  {name: 'Steve', seatNumber: '32c', bordingClass: 'A', referenceCode: "AHA", destination: "Russia"},
  {name: 'Chris', seatNumber: '44c', bordingClass: 'B', referenceCode: "DDD", destination: "Florida"},
  {name: 'Jason', seatNumber: '22c', bordingClass: 'A', referenceCode: "AHA", destination: "Russia"},
  {name: 'Ryan', seatNumber: '40b', bordingClass: 'C', referenceCode: "CDC", destination: "Brazil"}
]

const flights = [
  {number: 777, passengers: [], destination: "Aruba"},
  {number: 678, passengers: [], destination: "Russia"},
  {number: 888, passengers: [], destination: "Florida"},
  {number: 555, passengers: [], destination: "Brazil"}
]

const sorted = passengers.sort((a,b) => {
  return a.bordingClass.localeCompare(b.bordingClass) || a.seatNumber.localeCompare(b.seatNumber)
})

console.log(sorted)

// console.log(flights)

for(const flight of flights){
  for(const person of passengers){
    if(flight.destination === person.destination){
      flight.passengers.push(person)
    }
  }
}

// for(const flight of flights){
//   console.log(flight)
// }
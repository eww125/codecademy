const myPlaces = ['Thailand', 'Canada', 'Austria']
const friendPlaces = ['Paris', 'Hawaii', 'Thailand']

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  //console.log('loop1' + myPlaces[myPlacesIndex])
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    //console.log('loop2' + friendPlaces[friendPlacesIndex])
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex] + ' test ' + friendPlaces[friendPlacesIndex])
    }

}
}

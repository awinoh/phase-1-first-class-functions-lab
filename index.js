const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
   return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
   return drivers.slice(drivers.length - 2, drivers.length);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
   return function (fare) {
      return (Number(fare) * (a))
   }
}
//  const farePrice = createFareMultiplier();
//  function fareDoubler (fare){
//    // return farePrice(fare) *(2)
//    return fare *2
//  }
const multiplyBy4 = createFareMultiplier(4)
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(arrayOfDrivers, processDriver){
   return processDriver(arrayOfDrivers)

}
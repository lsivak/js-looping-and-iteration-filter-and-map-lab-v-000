function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}
function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver (drivers, revenue).map(function (driver) {
    return `${driver.name}`
  })
}
// function exactMatch (extendedDrivers, attribute) {
//       debugger
//       // for(const driver in extendedDriver) {
//           return extendedDrivers.filter(function (driver) {
//     return driver.attribute === attribute
//       debugger
// // }
// // }
// })
// }
function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}
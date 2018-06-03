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
function exactMatch (extendedDrivers, attribute) {
    for(const driver of extendedDrivers) {
    if (driver.attribute === attribute) {
    return driver
  }
}
}

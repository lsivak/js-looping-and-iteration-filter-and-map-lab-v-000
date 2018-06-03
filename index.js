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
function exactMatch (drivers, attribute) {
  return drivers.filter(function (driver) {
    for (const key in attribute) {
      return driver[key] === attribute[key];
    }
  });
}
function exactMatchToList (drivers, attribute) {
  return drivers.filter(function (driver) {
    debugger
    for (const value in attribute) {
      if( driver[attribute] === attribute;
return driver.value
    }
  });
}

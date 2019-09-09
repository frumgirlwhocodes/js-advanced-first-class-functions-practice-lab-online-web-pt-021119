// Code your solution in this file!
const logDriverNames= function(drivers) {
 return  drivers.forEach(function(element) {
    console.log(element.name);
  });
};

const logDriversByHometown= function (drivers, hometown) { drivers.forEach( function(element) {
  if (element.hometown === hometown) { console.log(element.name);
  }
});
}

const driversByRevenue= function(drivers){
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1 - driver2
    
  });
}

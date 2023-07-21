//Code your solution in this file!
function distanceFromHqInBlocks(customerLocation) {
    const headquartersLocation = 42;
    return Math.abs(customerLocation - headquartersLocation);
  }
  
  function distanceFromHqInFeet(customerLocation) {
    const blocks = distanceFromHqInBlocks(customerLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  const pickupLocation = 50;
  console.log(distanceFromHqInBlocks(customerLocation));
  console.log(distanceFromHqInFeet(customerLocation)); 
  
  const startBlock = 34;
  const endBlock = 38;
  console.log(distanceTravelledInFeet(startBlock, endBlock));
  
  console.log(calculatesFarePrice(startBlock, endBlock));
  
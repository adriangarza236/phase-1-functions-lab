// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation >= 42) {
        const distanceInBlocks = (pickUpLocation - 42)
        return distanceInBlocks
    } 
    else if (pickUpLocation < 42) {
        const distanceInBlocks = (42 - pickUpLocation)
        return distanceInBlocks
    }
};
function distanceFromHqInFeet(pickUpLocation) {
    const distanceInFeet = (distanceFromHqInBlocks(pickUpLocation) * 264)
    return distanceInFeet
};
function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        const numberOfFeetTravelled = ((start - destination) * 264)
        return numberOfFeetTravelled
    }
    else if (start < destination) {
        const numberOfFeetTravelled = ((destination - start) * 264)
        return numberOfFeetTravelled 
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * .02)
    }
    else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }

}
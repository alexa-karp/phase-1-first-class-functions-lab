const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function (drivers) {
    return [drivers[2], drivers[3]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function fareMultiplier(fare) {
        return (fare*integer);
    }
};

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}; 

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
};

function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
};
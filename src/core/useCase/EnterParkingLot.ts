import ParkingLot from '../entity/ParkingLot';

export default class EnterParkingLot {
    constructor() {

    }

    execute() {
        const parkingLot = new ParkingLot("shopping", 100, 8, 2);
        return parkingLot;
    }
}
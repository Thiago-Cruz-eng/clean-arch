export default class ParkingLot {
    code:any;
    capacity:any;
    openHour:any;
    closeHour:any;

    constructor(code:any, capacity:any, openHour:any, closeHour:any) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }
}
import EnterParkingLot from '../src/core/useCase/EnterParkingLot';

test("should enter parking lot", () => {
    const enterParkingLot = new EnterParkingLot();
    const parkingLot = enterParkingLot.execute()
    expect(parkingLot.code).toBe("shopping")
})
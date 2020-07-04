const processInputCommand = require('../index')
const originalLog = console.log
afterEach(() => (console.log = originalLog))

let consoleOutput = []
const mockedLog = (output) => consoleOutput.push(output)
beforeEach(() => {
    console.log = mockedLog;
    consoleOutput = [];
})

describe('Create parking slots', () => {
    test('it should create parking lot if specified slots are less than maximum slots', () => {
        processInputCommand(`create_parking_lot 6`);
        expect(consoleOutput).toEqual([
            'Created parking lot with 6 slots',
        ])
    })
    test('it should log an error if the specified size is greater than maximum capacity', () => {
        processInputCommand(`create_parking_lot 500`);
        expect(consoleOutput).toEqual([
            'Parking lot has maximum capacity of 100 slots',
        ])
    })
})
describe('park car', () => {
    test('should park a car if slot is available', () => {
        processInputCommand(`create_parking_lot 1`);
        processInputCommand(`park KA-01-HH-1234`)
        expect(consoleOutput).toEqual([
            'Created parking lot with 1 slots',
            'Allocated slot number: 1'
        ])
    })
    test('should log parking lot is full if there is no space', () => {
        processInputCommand(`create_parking_lot 1`);
        processInputCommand(`park KA-01-HH-1234`);
        processInputCommand(`park KA-01-HH-9999`);

        expect(consoleOutput).toEqual([
            'Created parking lot with 1 slots',
            'Allocated slot number: 1',
            'Sorry, parking lot is full'
        ])
    })
})
describe('leave parking lot', () => {
    test('it should log the registration number of the car the parking slot and parking charges', () => {
        processInputCommand(`create_parking_lot 1`);
        processInputCommand(`park KA-01-HH-1234`);
        processInputCommand(`leave KA-01-HH-1234 4`)
        expect(consoleOutput).toEqual([
            'Created parking lot with 1 slots',
            'Allocated slot number: 1',
            'Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30'
        ])
    })
    test('it should log not found when car is not parked in parking lot', () => {
        processInputCommand(`leave KA-01-HH-1234 4`)
        expect(consoleOutput).toEqual([
            'Registration number KA-01-HH-1234 not found'
        ])
    })
})
describe('status of parking lot', () => {
    test('it should log the complete status of parking lot', () => {
        processInputCommand(`create_parking_lot 6`)
        processInputCommand(`park KA-01-HH-1234`)
        processInputCommand(`park KA-01-HH-9999`)
        processInputCommand(`park KA-01-BB-0001`)
        processInputCommand(`park KA-01-HH-7777`)
        processInputCommand(`park KA-01-HH-2701`)
        processInputCommand(`park KA-01-HH-3141`)
        processInputCommand(`leave KA-01-HH-3141 4`)
        processInputCommand(`status`)
        expect(consoleOutput).toEqual([
            `Created parking lot with 6 slots`,
            `Allocated slot number: 1`,
            `Allocated slot number: 2`,
            `Allocated slot number: 3`,
            `Allocated slot number: 4`,
            `Allocated slot number: 5`,
            `Allocated slot number: 6`,
            `Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30`,
            `Slot No.    Registration No.`,
            `1           KA-01-HH-1234`,
            `2           KA-01-HH-9999`,
            `3           KA-01-BB-0001`,
            `4           KA-01-HH-7777`,
            `5           KA-01-HH-2701`
        ])
    })
})

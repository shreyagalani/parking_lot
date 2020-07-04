const readline = require('readline');
const fs = require('fs');
const maximumSlots = 100
var totalParkingSlots

function processInputCommand(command) {
        const commandAndArguments = command.split(' ')
        switch (commandAndArguments[0]) {
            case 'create_parking_lot': {
                if (commandAndArguments[1] > maximumSlots) {
                    console.log(`Parking lot has maximum capacity of ${maximumSlots} slots`)
                } else {
                    totalParkingSlots = new Array(commandAndArguments[1])
                    for (var i = 0; i < commandAndArguments[1]; i++) {
                        totalParkingSlots[i] = null
                    }
                    console.log(`Created parking lot with ${commandAndArguments[1]} slots`)

                }

            }
            break;
        case 'park': {
            const slotNumber = totalParkingSlots.indexOf(null)
            if (slotNumber !== -1) {
                totalParkingSlots[slotNumber] = commandAndArguments[1];
                console.log(`Allocated slot number: ${slotNumber+1}`)
            } else {
                console.log('Sorry, parking lot is full')
            }
        }
        break;
        case 'leave': {
            const indexOfParkedCar = totalParkingSlots.indexOf(commandAndArguments[1])
            if (indexOfParkedCar !== -1) {
                const hours = commandAndArguments[2]
                const charge = 10 + ((hours - 2) * 10)
                console.log(`Registration number ${commandAndArguments[1]} with Slot Number ${indexOfParkedCar+1} is free with Charge ${charge}`);
                totalParkingSlots[indexOfParkedCar] = null
            } else {
                console.log(`Registration number ${commandAndArguments[1]} not found`);
            }
        }
        break;
        case 'status': {
            console.log(`Slot No.    Registration No.`)
            totalParkingSlots.forEach((parkedCar, index) => {
                if (parkedCar) {
                    console.log(`${index+1}           ${parkedCar}`)
                }
            })
        }
        break;
        default: {
            console.log(`Invalid Command`)
        }

        }

    ;
};
if(process.argv[2]){const readInterface = readline.createInterface({
    input: fs.createReadStream(`${process.argv[2]}`),
    // output: process.stdout,
    console: false
});
readInterface.on('line', function (line){
    processInputCommand(line)
})}

module.exports = processInputCommand;


# Parking Lot

To run this Application make sure you have node installed on you machine

To check node version you can use the below command
 $ `node -v`

To install node you can follow the below link
 `https://nodejs.org/en/download/`

To test parking lot Application you need to run setup first

To run setup you can use the below command
 $ `bin/setup`

To run the application against custom input you can run the below command from parking_lot directory
 $ `node index.js <input_file>`
Please refer the below example to create your own input files
```
    Created parking lot with 6 slots
    Allocated slot number: 1
    Allocated slot number: 2
    Allocated slot number: 3
    Allocated slot number: 4
    Allocated slot number: 5
    Allocated slot number: 6
    Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30
    Slot No.    Registration No.
    1           KA-01-HH-1234
    2           KA-01-HH-9999
    3           KA-01-BB-0001
    4           KA-01-HH-7777
    5           KA-01-HH-2701
    Allocated slot number: 6
    Sorry, parking lot is full
    Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30
    Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50
    Registration number DL-12-AA-9999 not found
    Allocated slot number: 1
    Allocated slot number: 3
    Sorry, parking lot is full
    Slot No.    Registration No.
    1           KA-09-HH-0987
    2           KA-01-HH-9999
    3           CA-09-IO-1111
    4           KA-01-HH-7777
    5           KA-01-HH-2701
    6           KA-01-P-333
```
Only .txt files can be accepted as an input file
 
To run the test cases use below command
 $ `npm run test`

To run functional test suite please refer the README.md included in `functional_specs` folder





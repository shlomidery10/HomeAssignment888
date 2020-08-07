var logic = require('../logic.js');

let expectedResult=true;
let firstContinentCountries=[{"code": "AF","name": "Africa"},{"code": "AN","name": "Antarctica"}];
let secondContinentCountries=[{"code": "AF","name": "Africa"},{"code": "AN","name": "Antarctica"}];
let thirdContinentCountries=[{"code": "AF","name": "israel"},{"code": "AN","name": "israel"}];


describe('compareTwoObjects_TwoEqualObject_ReturnTrue', () => {
  it('compareTwoObjects First Case', () => {
    expect(logic.compareTwoObjects(firstContinentCountries,secondContinentCountries)).toEqual(expectedResult);
  });
});


describe('compareTwoObjects_TwoDifferentObject_ReturnFalse', () => {
  it('compareTwoObjects First Case', () => {
    expect(logic.compareTwoObjects(firstContinentCountries,thirdContinentCountries)).toEqual(!expectedResult);
  });
});
 


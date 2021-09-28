const { test, expect, describe } = require('@jest/globals');
const { stringLength, reverseString, MathematicalOperations, capitalize } = require('./exercise');

describe('Various tests for string length', () => {
  test('return length of string', () => {
    // Arrange
    const string = 'Francis';
  
    // Act
    let lengthOfString = stringLength(string);
  
    // Assert
    expect(lengthOfString).toBe(7);
  })

  test('Inputted invalid string', () => {
    // Arrange
    const string = 'Bobobolokaka';
    
    // Act and Assert
    expect(() => stringLength(string)).toThrow(Error);
  })
}) 

describe('Return a reversed string', () => {
  test('String should be reversed', () => {
    // Arrange
    const stringName = 'Microverse';

    //Act
    let stringisReversed = reverseString(stringName);

    // Assert
    expect(stringisReversed).toBe('esrevorcim');
  })
})

describe('Mathematical Operations', () => {
  describe('Addition of Numbers', () => {
    test('Add two numbers (5, 6) to get a sum (11)', () => {
      // Arrange and Act
      const addition = new MathematicalOperations(5, 6);
      
      // Assert
      expect(addition.addNumbers()).toEqual(11);
    })
    test('Add two numbers(1, 2) to get a sum(3)', () => {
      // Arrange and Act
      const addition = new MathematicalOperations(1, 2);
      
      // Assert
      expect(addition.addNumbers()).toEqual(3);
    })
    test('Add two numbers(100, 1000) to get a sum(1,100)', () => {
      // Arrange and Act
      const addition = new MathematicalOperations(100, 1000);
      
      // Assert
      expect(addition.addNumbers()).toEqual(1100);
    })
  })

  describe('Subtraction of Numbers', () => {
    test('Subtract a number(5) from (6) to get difference (-1)', () => {
      // Arrange and Act
      const subtraction = new MathematicalOperations(5, 6);
      
      // Assert
      expect(subtraction.subtractNumbers()).toEqual(-1);
    })
    test('Subtract a number(2) from (2) to get a difference (0)', () => {
      // Arrange and Act
      const subtraction = new MathematicalOperations(2, 2);
      
      // Assert
      expect(subtraction.subtractNumbers()).toEqual(0);
    })
    test('Subtract a number(7) from (6) to get a difference (1)', () => {
      // Arrange and Act
      const subtraction = new MathematicalOperations(7, 6);
      
      // Assert
      expect(subtraction.subtractNumbers()).toEqual(1);
    })
  })

  describe('Multiplication of Numbers', () => {
    test('Multiply a number(5) by (6) to get a product (30)', () => {
      // Arrange and Act
      const multiplication = new MathematicalOperations(5, 6);
      
      // Assert
      expect(multiplication.multiplyNumbers()).toEqual(30);
    })
    test('Multiply a number(100) by (100) to get a product (10000)', () => {
      // Arrange and Act
      const multiplication = new MathematicalOperations(100, 100);
      
      // Assert
      expect(multiplication.multiplyNumbers()).toEqual(10000);
    })
    test('Multiply a number(15) by (1000) to get a product (15000)', () => {
      // Arrange and Act
      const multiplication = new MathematicalOperations(15, 1000);
      
      // Assert
      expect(multiplication.multiplyNumbers()).toEqual(15000);
    })
  })

  describe('Division of Numbers', () => {
    test('Divide a number(5) by (6) to get a quotient (0.83)', () => {
      // Arrange and Act
      const division = new MathematicalOperations(5, 6);
      
      // Assert
      expect(division.divideNumbers()).toEqual(0.83);
    })
    test('Divide a number(10) by (2) to get a quotient (5)', () => {
      // Arrange and Act
      const division = new MathematicalOperations(10, 2);
      
      // Assert
      expect(division.divideNumbers()).toEqual(5);
    })
    test('Divide a number(100) by (10) to get a quotient (10)', () => {
      // Arrange and Act
      const division = new MathematicalOperations(100, 10);
      
      // Assert
      expect(division.divideNumbers()).toEqual(10);
    })
  })
})

describe('Return a Capitalized String', () => {
  test(`String's first character should be capitalized`, () => {
    // Arrange
    const stringName = 'hello';

    //Act
    let stringisCapitalized = capitalize(stringName);

    // Assert
    expect(stringisCapitalized).toBe('Hello');
  })
  test('Inputted invalid string', () => {
    // Arrange
    const string = 0;
    
    // Act and Assert
    expect(() => capitalize(string)).toThrow(Error);
  })
})
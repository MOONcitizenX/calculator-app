import { Brackets, type Operator } from '@constants/Operators';
import { isNumeric } from './isNumeric';
import { mathOperations } from '@constants/MathOperations';

export const calculate = (polishToken: Array<string | Operator | Brackets>) => {
  const numbers: string[] = [];
  const operations: Array<Operator | Brackets> = [];
  try {
    polishToken.forEach((entry) => {
      if (isNumeric(entry)) {
        numbers.push(entry);
      } else {
        operations.push(entry as Operator);
        while (numbers.length >= 2 && operations.length >= 1) {
          const lastOperands = [Number(numbers.pop()), Number(numbers.pop())];
          const operation = operations.pop();
          let intermediateResult;
          if (
            operation !== undefined &&
            operation !== Brackets.openingBracket &&
            operation !== Brackets.closingBracket
          ) {
            intermediateResult = mathOperations[operation](lastOperands[0], lastOperands[1]);
            numbers.push(intermediateResult);
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }

  if (numbers.length === 1) {
    if (Number(numbers[0]) === Infinity) {
      return 'Error: division by zero';
    }
    if (Number(numbers[0]) > 2 ** 53 - 1 || Number(numbers[0]) < -(2 ** 53 - 1)) {
      return 'Too big numbers';
    }
    return numbers[0];
  }
  return '';
};
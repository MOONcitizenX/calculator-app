import React, { createContext, useContext } from 'react';
import { useActions } from '@hooks/useActions';
import { Calculator } from '@utils/Calculator';

interface CalculatorProviderProps {
  children?: React.ReactNode;
}

interface Context {
  calculator: Calculator;
}

const CalculatorContext = createContext<Context | null>(null);

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (context !== null) {
    return context;
  }
  throw new Error('No calculator context');
};

export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children }) => {
  const { addHistory } = useActions();

  const calculator = new Calculator(addHistory);

  const context: Context = {
    calculator,
  };

  return <CalculatorContext.Provider value={context}>{children}</CalculatorContext.Provider>;
};
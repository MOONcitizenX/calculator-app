import styled from 'styled-components';

interface HistoryWrapperProps {
  $isOpen: boolean;
}

export const HistoryWrapper = styled.div<HistoryWrapperProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 30px;
  border-radius: 16px;
  border-bottom: 30px solid transparent;
  box-shadow: ${({ $isOpen, theme }) =>
    $isOpen ? `6px 6px 16px ${theme.colors.shadow.primary}` : 'none'};
  transition: all 0.5s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'translate(100%)' : 'translate(0%)')};
  overflow: hidden;
  @media screen and (max-width: 480px) {
    border-radius: 0;
  }
`;

export const StyledHistoryList = styled.ul`
  height: 100%;
  overflow: auto;
  margin-top: 12px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledHeading = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 22px;
`;

export const StyledHistoryItem = styled.li`
  color: ${({ theme }) => theme.colors.text.primary};
`;

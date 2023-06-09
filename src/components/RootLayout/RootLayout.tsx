import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { StyledContainer } from '@styles/shared';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </main>
    </>
  );
};

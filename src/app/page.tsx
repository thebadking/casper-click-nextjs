'use client';
import { useEffect, useState } from 'react';
import { useClickRef } from '@make-software/csprclick-ui';
import { LandingBrief, SignedInBrief } from '../components/gettingStarted';
import { Welcome } from '@/components/gettingStarted/components';
import styled from 'styled-components';
import Container from '@/components/container';

const GettingStartedContainer = styled.div(({ theme }) =>
  theme.withMedia({
    maxWidth: ['100%', '720px', '960px'],
    padding: '0 12px',
    margin: '0 auto'
  })
);

const AppBody = () => {
  const clickRef = useClickRef();
  const [activeAccount, setActiveAccount] = useState(null);

  useEffect(() => {
    clickRef?.on('csprclick:signed_in', async (evt) => {
      await setActiveAccount(evt.account);
    });
    clickRef?.on('csprclick:switched_account', async (evt) => {
      await setActiveAccount(evt.account);
    });
    clickRef?.on('csprclick:signed_out', async () => {
      setActiveAccount(null);
    });
    clickRef?.on('csprclick:disconnected', async () => {
      setActiveAccount(null);
    });
  }, [clickRef?.on]);

  return (
    <Container>
      <Welcome />
      <GettingStartedContainer id={'getting-started'}>
        {activeAccount ? <SignedInBrief /> : <LandingBrief />}
      </GettingStartedContainer>
    </Container>
  );
};

export default AppBody;

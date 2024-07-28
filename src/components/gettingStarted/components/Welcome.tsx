import styled from 'styled-components';

const Container = styled.div(({ theme }) =>
  theme.withMedia({
    backgroundImage: [
      `url("/bg-desktop-full.jpg")`,
      `url("/bg-desktop-full.jpg")`,
      `url("/bg-desktop-full.jpg")`
    ],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    height: ['693px', '624px', '624px'],
    width: '100%'
  })
);

const StyledSvgIcon = styled.div(({ theme }) =>
  theme.withMedia({
    svg: {
      height: ['60px', '80px', '80px'],
      width: ['60px', '80px', '80px'],
      path: { fill: theme.clickLogo }
    }
  })
);

const StyledWrapper = styled.div(({ theme }) =>
  theme.withMedia({
    width: '100%',
    maxWidth: ['540px', '720px', '960px'],
    padding: '0 12px',
    margin: '0 auto'
  })
);

const InfoContainer = styled.div(({ theme }) =>
  theme.withMedia({
    display: 'flex'
  })
);
const StyledInfo = styled.div(({ theme }) =>
  theme.withMedia({
    position: 'relative',
    top: ['120px', '174px', '174px']
  })
);

const GreetingText = styled.div(({ theme }) =>
  theme.withMedia({
    color: '#DADCE5',
    fontSize: ['24px', '40px', '40px'],
    fontWeight: '600',
    lineHeight: ['32px', '56px', '56px'],
    marginTop: ['24px', '40px', '40px']
  })
);

const KillerAppText = styled.div(({ theme }) =>
  theme.withMedia({
    color: '#A8ADBF',
    fontSize: '16px',
    fontWeight: '200',
    lineHeight: '24px',
    marginTop: '8px',
    width: ['81%', '100%', '100%']
  })
);

const LearnMoreButton = styled.div(({ theme }) =>
  theme.withMedia({
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    width: '176px',
    height: '36px',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#B2332D',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#F2F2F2',
    marginTop: '32px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#9f211c'
    }
  })
);

export const Welcome = () => {
  const handleReadMore = () => {
    const gettingStartedContainer = document.getElementById('getting-started');
    // eslint-disable-next-line no-debugger
    gettingStartedContainer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container>
      <StyledWrapper>
        <InfoContainer>
          <StyledInfo>
            <StyledSvgIcon className="App-logo">
              <svg
                width="86"
                height="88"
                viewBox="0 0 86 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M81.8224 32.5H59.9999C58.6192 32.5 57.4999 31.3807 57.4999 30L57.4999 25.1761C57.4999 18.9556 50.3633 15.4389 45.4306 19.2287L20.2789 38.5526C16.3713 41.5548 16.3713 47.4452 20.2789 50.4474L45.4306 69.7713C50.3633 73.5611 57.4999 70.0444 57.4999 63.8239L57.4999 58C57.4999 56.6193 58.6192 55.5 59.9999 55.5H81.8224C83.4952 55.5 84.4995 57.0016 84.0259 58.3246C78.1465 74.7511 62.4434 86.5 44 86.5C20.5279 86.5 1.5 67.4721 1.5 44C1.5 20.5279 20.5279 1.5 44 1.5C62.4434 1.5 78.1465 13.2489 84.0259 29.6754C84.4995 30.9984 83.4952 32.5 81.8224 32.5Z"
                  strokeWidth="3"
                />
              </svg>
            </StyledSvgIcon>
            <GreetingText>Welcome to CSPR.click</GreetingText>
            <KillerAppText>Your starting point to develop the next web3 killer app.</KillerAppText>
            <LearnMoreButton onClick={handleReadMore}>Learn more</LearnMoreButton>
          </StyledInfo>
        </InfoContainer>
      </StyledWrapper>
    </Container>
  );
};

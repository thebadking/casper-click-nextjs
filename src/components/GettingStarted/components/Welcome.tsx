//@ts-nocheck
const Container = ({ children }) => {
  return (
    <div
      className="
          bg-cover bg-no-repeat bg-right w-full
          h-[693px] md:h-[624px] lg:h-[624px]
          bg-[url('/bg-mobile-full.jpg')]
          md:bg-[url('/bg-desktop-full.jpg')]
          lg:bg-[url('/bg-desktop-full.jpg')]
        "
    >
      {children}
    </div>
  );
};

const StyledSvgIcon = ({ children }) => {
  return (
    <div className="svg-icon">
      <svg
        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:h-[80px] lg:w-[80px]"
        viewBox="0 0 86 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </div>
  );
};

const StyledWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-[540px] md:max-w-[720px] lg:max-w-[960px] p-3 mx-auto">
      {children}
    </div>
  );
};

const InfoContainer = ({ children }) => {
  return <div className="flex">{children}</div>;
};

const StyledInfo = ({ children }) => {
  return (
    <div className="relative top-[120px] md:top-[174px] lg:top-[174px]">
      {children}
    </div>
  );
};

const GreetingText = ({ children }) => {
  return (
    <div className="text-[#DADCE5] text-[24px] md:text-[40px] lg:text-[40px] font-semibold leading-[32px] md:leading-[56px] lg:leading-[56px] mt-[24px] md:mt-[40px] lg:mt-[40px]">
      {children}
    </div>
  );
};

const KillerAppText = ({ children }) => {
  return (
    <div className="text-[#A8ADBF] text-[16px] font-light leading-[24px] mt-[8px] w-[81%] md:w-[100%] lg:w-[100%]">
      {children}
    </div>
  );
};

const LearnMoreButton = ({ onClick, children }) => {
  return (
    <div
      className="flex justify-center items-center w-[176px] h-[36px] p-[8px 16px] rounded-[4px] bg-[#B2332D] text-[14px] leading-[20px] text-[#F2F2F2] mt-[32px] hover:cursor-pointer hover:bg-[#9f211c]"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Welcome = () => {
  const handleReadMore = () => {
    const gettingStartedContainer = document.getElementById("getting-started");
    gettingStartedContainer?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Container>
      <StyledWrapper>
        <InfoContainer>
          <StyledInfo>
            <StyledSvgIcon>
              <path
                d="M81.8224 32.5H59.9999C58.6192 32.5 57.4999 31.3807 57.4999 30L57.4999 25.1761C57.4999 18.9556 50.3633 15.4389 45.4306 19.2287L20.2789 38.5526C16.3713 41.5548 16.3713 47.4452 20.2789 50.4474L45.4306 69.7713C50.3633 73.5611 57.4999 70.0444 57.4999 63.8239L57.4999 58C57.4999 56.6193 58.6192 55.5 59.9999 55.5H81.8224C83.4952 55.5 84.4995 57.0016 84.0259 58.3246C78.1465 74.7511 62.4434 86.5 44 86.5C20.5279 86.5 1.5 67.4721 1.5 44C1.5 20.5279 20.5279 1.5 44 1.5C62.4434 1.5 78.1465 13.2489 84.0259 29.6754C84.4995 30.9984 83.4952 32.5 81.8224 32.5Z"
                strokeWidth="3"
              />
            </StyledSvgIcon>
            <GreetingText>Welcome to CSPR.click</GreetingText>
            <KillerAppText>
              Your starting point to develop the next web3 killer app.
            </KillerAppText>
            <LearnMoreButton onClick={handleReadMore}>
              Learn more
            </LearnMoreButton>
          </StyledInfo>
        </InfoContainer>
      </StyledWrapper>
    </Container>
  );
};

import React from 'react';
import { Account, BuyMeACoffee, CustomMenuItems, Section, UseClickRefHook } from './components';
import Container from '../container';

export const LandingBrief = () => {
  return (
    <Container>
      <h3>✨ Multiple wallets integration</h3>
      <Section>
        <span>This project template comes with full support for multiple wallets:</span>
        <ul>
          <li>Casper Wallet</li>
          <li>Ledger</li>
          <li>CasperDash</li>
          <li>Torus</li>
          <li>Metamask</li>
          <li>Casper Signer</li>
        </ul>
        <span>
          Your app can interact with any of them using the same API. CSPR.click takes care of
          everything wallet related. If needed, you can{' '}
          <a
            href={'https://docs.cspr.click/core-js-sdk/types#csprclickinitoptions'}
            target={'_blank'}
            rel="noreferrer"
          >
            modify the list of enabled wallets
          </a>
          .
        </span>
      </Section>

      <h3>⚙️ Uniform UI/UX</h3>
      <Section>
        <span>
          CSPR.click UI components provide a common UX across different Casper apps for an easy
          management of accounts, settings, and future ecosystem-wide functionality.
        </span>
        <span>
          <a
            href={'https://docs.cspr.click/ui-sdk/customizing-the-top-bar'}
            target={'_blank'}
            rel="noreferrer"
          >
            Customize the elements in the top bar
          </a>{' '}
          according to your application requirements. Add and remove settings selectors.
        </span>
      </Section>

      <h3>🔝 Sign in</h3>
      <Section>
        <span>
          Now, go back to the top of the page and sign in with your favorite wallet. Or, click here:
          <b
            onClick={(event) => {
              event.preventDefault();
              window.csprclick.signIn();
            }}
          >
            {' '}
            Connect
          </b>
          .
        </span>
      </Section>
    </Container>
  );
};

export const SignedInBrief = () => {
  return (
    <Container>
      <h3>🎉 Awesome! You have successfully signed in! What&#39;s next?</h3>
      <Section>
        <span style={{ padding: '10px' }}>
          Be sure that on this page you&#39;ll find all information you need for future integration.
          Before you&apos;ll jump into development process, please scroll down and get familiar with
          each section. Below you&#39;ll find some useful code snipped with explanation and easy
          integration examples about most important features in the SDK which you&apos;ll use
          frequently.
        </span>
      </Section>
      <Section>
        <ol type="1">
          <li>
            <a href="#useRef">useClickRef hook</a>
          </li>
          <li>
            <a href="#account">Get your user´s account and update your app</a>
          </li>
          <li>
            <a href="#customising">Customize the account menu</a>
          </li>
          <li>
            <a href="#buyCoffee">Buy Alice a coffee on testnet</a>
          </li>
        </ol>
      </Section>
      <h3 id="useRef">🪝️ useClickRef hook</h3>
      <UseClickRefHook />
      <h3 id="account">🆔 Get access to your user account</h3>
      <Account />
      <h3 id="customising">🔧 Customize the account menu</h3>
      <CustomMenuItems />
      <h3 id="buyCoffee">☕ Buy Alice a coffee on testnet</h3>
      <BuyMeACoffee />
      <h3>🔥 Happy hacking!</h3>
      <Section>
        <span>
          Finally! Time to focus on your new project! And, remember, you may find guides and
          examples in{' '}
          <a
            style={{ textDecoration: 'underline' }}
            href={'https://docs.cspr.click'}
            target={'_blank'}
            rel="noreferrer"
          >
            our documentation
          </a>
          . Or you can reach to us on{' '}
          <a
            style={{ textDecoration: 'underline' }}
            href={'https://t.me/CSPRDevelopers'}
            target={'_blank'}
            rel="noreferrer"
          >
            telegram
          </a>
          .
        </span>
      </Section>
    </Container>
  );
};

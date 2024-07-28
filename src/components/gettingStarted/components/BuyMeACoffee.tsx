import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { AccountIdenticon, useClickRef } from '@make-software/csprclick-ui';
import { SendResult } from '@make-software/csprclick-core-client';
import makeTransferDeploy from './TransferDeploy';
import Prism from 'prismjs';

export const StyledTD = styled.td(({ theme }) =>
  theme.withMedia({
    fontWeight: '600',
    margin: '4px 15px 4px 0',
    display: 'block'
  })
);

export const SpanTruncated = styled.span(({ theme }) =>
  theme.withMedia({
    display: 'inline-block',
    fontFamily: 'JetBrains Mono',
    width: ['150px', '350px', '100%'],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
);
const AccountRow = styled.div(({ theme }) =>
  theme.withMedia({
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center'
  })
);

export const BuyMeACoffee = () => {
  const [deployHash, setDeployHash] = useState<string | undefined>(undefined);
  const recipientPk = '0202dd8d878df6f2ecd0c9c012fd7cecc830f3623ecabeb914223c233c2c4046dcbb';

  const clickRef = useClickRef();
  const activeAccount = clickRef?.getActiveAccount();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleSignTransaction = async () => {
    const sender = activeAccount?.public_key?.toLowerCase() || '';
    const deploy = makeTransferDeploy(sender, recipientPk, '50' + '000000000', 'casper-test');
    clickRef
      ?.send(deploy, sender)
      .then((res: SendResult | undefined) => {
        if (res?.deployHash) {
          setDeployHash(res.deployHash);
          alert('Transaction sent successfully: ' + res.deployHash);
        } else if (res?.cancelled) {
          alert('Sign cancelled');
        } else {
          alert('Error in send(): ' + res?.error + '\n' + res?.errorData);
        }
      })
      .catch((err: any) => {
        alert('Error: ' + err);
        throw err;
      });
  };

  return (
    <>
      <Section>
        <span>
          Your app will need to send transactions to Casper. Let&apos;s illustrate how to do it
          buying a coffee for Alice with testnet CSPR tokens.
        </span>
        <span>
          First, build a transfer transaction deploy. The <code>casper-js-sdk</code> is available in
          this template to do so. Refer to the official{' '}
          <a href={'https://casper-ecosystem.github.io/casper-js-sdk/'}>SDK documentation</a> for
          more information and examples of usage.
        </span>
        <span>
          Next, call <code>clickRef.send()</code> method. CSPR.click will request the user to sign
          the transaction in the active wallet and then will send the transaction to a Casper node
          for processing it.
        </span>
        <span>
          Notice in the example that your application must handle different possible responses. Your
          app may show a success message with the deploy hash when the transaction has been sent,
          but react appropriately when the user rejects or the node reject the transaction.
        </span>
      </Section>
      <Section>
        <pre>
          <code className={'language-javascript'}>
            {`const handleSignTransaction = async () => {
  const sender = activeAccount?.public_key?.toLowerCase();
  const deploy = makeTransferDeploy(sender, recipientPk, '50000000000', 'casper-test');
  clickRef?.send(deploy, sender)
    .then(res => {
	  if (res?.deployHash) {
	  	alert('Transaction sent successfully: ' + res.deployHash);
	  } else if (res?.cancelled) {
	  	alert('Sign cancelled');
	  } else {
	  	alert('Error in send(): ' + res?.error + ' - ' + res?.errorData);
	  }    
	})
}
`}
          </code>
        </pre>
      </Section>
      <Section withBackground>
        <table>
          <tbody>
            <tr>
              <StyledTD>Send:</StyledTD>
              <td>50 CSPR</td>
            </tr>
            <tr>
              <StyledTD>From:</StyledTD>
              <td>
                <i>your account</i>
              </td>
            </tr>
            <tr>
              <StyledTD>To:</StyledTD>
              <td>
                <AccountRow>
                  <AccountIdenticon hex={recipientPk} size="sm"></AccountIdenticon>
                  <SpanTruncated>{recipientPk}</SpanTruncated>
                </AccountRow>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {activeAccount?.public_key && (
                  <button onClick={() => handleSignTransaction()}>Sign transaction</button>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {deployHash && (
          <a
            href={`${clickRef?.appSettings?.csprlive_url}deploy/${deployHash}`}
            target="_blank"
            rel="noreferrer"
          >
            Check transfer status on CSPR.live
          </a>
        )}
      </Section>
    </>
  );
};

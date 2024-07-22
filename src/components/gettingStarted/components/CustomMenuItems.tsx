import { useEffect } from 'react';
import Prism from 'prismjs';
import AccountMenu from '../../../../public/account-menu.jpg';
import Image from 'next/image';

export const CustomMenuItems = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <section className="p-4 ">
        <p className="mb-4">
          You can customize the account dropdown menu in our top bar with your own menu items.
          Options to switch to another account and sign out are always present at the end of the
          list. The rest depends on your needs. We provide a couple of common menu item components
          you may add, and one component for you to include anything you need.
        </p>
        <p>The following piece of code shows you how to customize the account menu:</p>
      </section>

      <section className="p-4 ">
        <pre className=" rounded-lg p-4">
          <code className="language-javascript">
            {`export const accountMenuItems = [
  <ViewAccountOnExplorerMenuItem key={0} />,
  <CopyHashMenuItem key={1} />,
  <AccountMenuItem
    key={2}
    onClick={() => {
      window.location.href = 'https://docs.cspr.click';
    }}
    icon={CSPRClickIcon}
    label={'CSPR.click docs'}
    badge={{ title: 'new', variation: 'green' }}
  />,
];`}
          </code>
        </pre>
      </section>

      <section className="p-4 ">
        <p>
          Now, add the items to the <code>&lt;ClickUI&gt;</code> component:
        </p>
      </section>

      <section className="p-4 ">
        <pre className=" rounded-lg p-4">
          <code className="language-markup">
            {`<ClickUI topBarSettings={{accountMenuItems}}/>
`}
          </code>
        </pre>
      </section>

      <section className="p-4 ">
        <div className="mb-4">You will see update Account Menu:</div>
        <div>
          <Image src={AccountMenu} width={500} alt="Account menu example" />
        </div>
      </section>
    </>
  );
};

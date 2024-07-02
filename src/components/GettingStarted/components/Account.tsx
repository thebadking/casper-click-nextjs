import { useEffect } from "react";
import { Section } from "./Section";
import { useClickRef } from "@make-software/csprclick-ui";
import Prism from "prismjs";

const UserAccount = () => {
  const clickRef = useClickRef();
  const activeAccount = clickRef?.getActiveAccount();
  return (
    <table className="w-full border border-gray-200 shadow-sm rounded-lg">
      <tbody>
        <tr>
          <td className="font-semibold px-4 py-2">Public key:</td>
          <td className="px-4 py-2">
            <span className="inline-block font-mono w-[150px] md:w-[350px] lg:w-full whitespace-nowrap">
              {activeAccount?.public_key}
            </span>
          </td>
        </tr>
        <tr>
          <td className="font-semibold px-4 py-2">Provider:</td>
          <td className="px-4 py-2">{activeAccount?.provider}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const Account = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Section>
        <span>
          Use <code>useClickRef()</code> hook to get a reference to the
          CSPR.click SDK instance. With this instance you easily can get an
          access to user&apos;s active account with all information: such as
          public key, provider, etc. You can use it to display relevant users
          data as in example below:
        </span>
      </Section>
      <Section>
        <pre>
          <code className={"language-javascript"}>
            {`const UserAccount = () => {
  const clickRef = useClickRef()
  const activeAccount = clickRef?.getActiveAccount()
    return (
      <table>
        <tr><td>Public key:</td><td>{activeAccount.public_key}</td></tr>
        <tr><td>Provider:</td><td>{activeAccount.provider}</td></tr>
      </table>  
    )`}
          </code>
        </pre>
      </Section>
      <Section>
        <UserAccount />
      </Section>
    </>
  );
};

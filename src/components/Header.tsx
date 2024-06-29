"use client";

import dynamic from "next/dynamic";

const ClickTopBar = dynamic(
  () =>
    import("@make-software/csprclick-ui").then((mod) => {
      return mod.ClickUI;
    }),
  {
    ssr: false,
  }
);

const BuyCSPRMenuItem = dynamic(
  () =>
    import("@make-software/csprclick-ui").then((mod) => {
      return mod.BuyCSPRMenuItem;
    }),
  {
    ssr: false,
  }
);

const Header = () => {
  const accountMenuItems = [<BuyCSPRMenuItem key={"buy-cspr"} />];
  const topBarSettings = { accountMenuItems };
  return <ClickTopBar topBarSettings={topBarSettings} />;
};
export default Header;

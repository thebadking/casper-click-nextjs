"use client";

import { useEffect, useState } from "react";
import { useClickRef } from "@make-software/csprclick-ui";
import { LandingBrief, SignedInBrief } from "@/components/GettingStarted";
import { Welcome } from "@/components/GettingStarted/components";
import Container from "@/components/container";

const MainContainer = () => {
  const clickRef = useClickRef();
  const [activeAccount, setActiveAccount] = useState(null);

  useEffect(() => {
    clickRef?.on("csprclick:signed_in", async (evt) => {
      await setActiveAccount(evt.account);
    });
    clickRef?.on("csprclick:switched_account", async (evt) => {
      await setActiveAccount(evt.account);
    });
    clickRef?.on("csprclick:signed_out", async () => {
      setActiveAccount(null);
    });
    clickRef?.on("csprclick:disconnected", async () => {
      setActiveAccount(null);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickRef?.on]);

  return (
    <Container>
      <Welcome />
      <div
        id="getting-started"
        className="max-w-full md:max-w-screen-md lg:max-w-screen-lg px-3 mx-auto"
      >
        {activeAccount ? <SignedInBrief /> : <LandingBrief />}
      </div>
    </Container>
  );
};

export default MainContainer;

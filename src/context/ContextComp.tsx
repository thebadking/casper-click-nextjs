"use client";

import { ReactNode } from "react";
import { useGetAllValidators } from "@/hooks/useGetAllValidators";
import { useGetStatusInfos } from "@/hooks/useGetStatusInfos";
import { getAvatarUrl } from "@/utils/Utils";
import AppContext from "@/context/AppContext";

const ContextComp = ({ children }: { children: ReactNode }) => {
  const statusInfos = useGetStatusInfos();
  const era = statusInfos.data?.result.last_added_block_info.era_id || 0;
  const validatorsQuery = useGetAllValidators(era);

  return (
    <AppContext.Provider
      value={{
        validators:
          validatorsQuery?.data?.data?.map((item) => ({
            publicKey: item.public_key,
            fee: item.fee,
            name: item.account_info?.info.owner?.name,
            img:
              item.account_info?.info.owner?.branding?.logo?.png_256 ||
              item.account_info?.info.owner?.branding?.logo?.png_1024 ||
              getAvatarUrl(item.public_key),
          })) || [],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextComp;

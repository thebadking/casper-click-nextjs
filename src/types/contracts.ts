export interface ContractsPayload {
  data: Contracts[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface Contracts {
  contract_package_hash: string;
  owner_public_key: string;
  contract_type_id: number | null;
  contract_name: null | string;
  contract_description: null | string;
  metadata: Metadata | null;
  timestamp: Date;
  deploys_num: number;
}

export interface Metadata {
  symbol: string;
  nft_kind?: string;
  burn_mode?: string;
  holder_mode?: string;
  minting_mode?: string;
  ownership_mode?: string;
  whitelist_mode?: string;
  identifier_mode?: string;
  nft_metadata_kind?: string;
  total_supply_uref?: string;
  metadata_mutability?: string;
  decimals?: number;
  balances_uref?: string;
}

export interface Page {
  number: number;
  url: string;
}

export interface ContractPackagePayload {
  contract_package_hash: string;
  owner_public_key: null;
  contract_type_id: number;
  contract_name: string;
  contract_description: string;
  metadata: null;
  timestamp: Date;
}

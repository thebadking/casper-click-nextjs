export interface ValidatorsPayload {
  data: Datum[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface Datum {
  era_id: number;
  public_key: string;
  is_active: boolean;
  fee: number;
  delegators_number: number;
  self_stake: string;
  bid_amount: string;
  total_stake: string;
  delegator_stake: string;
  self_share: string;
  network_share: string;
  rank: number;
  account_info: AccountInfo | null;
  average_performance: AveragePerformance;
}

export interface AccountInfo {
  account_hash: string;
  url: string;
  is_active: boolean;
  info: Info;
  deploy_hash: string;
  verified_account_hashes: string[];
}

export interface Info {
  nodes: Node[];
  owner: Owner;
}

export interface Node {
  location: Location;
  public_key: string;
  description: string;
  functionality: Functionality[];
}

export enum Functionality {
  Other = "other",
  RPCProxy = "rpc-proxy",
  Validator = "validator",
}

export interface Location {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Owner {
  name: string;
  type: Type[];
  email: string;
  social: Social;
  website: string;
  branding: Branding;
  identity: Identity;
  location: Location;
  resources: Resources;
  description: string;
  affiliated_accounts: AffiliatedAccount[] | null;
}

export interface AffiliatedAccount {
  public_key: string;
}

export interface Branding {
  logo: Logo;
}

export interface Logo {
  svg: string;
  png_256: string;
  png_1024: string;
}

export interface Identity {
  other: null;
  ownership_disclosure_url: string;
  casper_association_kyc_url: string;
  casper_association_kyc_onchain: string;
}

export interface Resources {
  other: Array<OtherClass | string> | null;
  privacy_policy_url: string;
  code_of_conduct_url: string;
  terms_of_service_url: string;
}

export interface OtherClass {
  url: string;
  name: string;
}

export interface Social {
  github: string;
  medium: string;
  reddit: Reddit;
  wechat: string;
  keybase: string;
  twitter: string;
  youtube: string;
  facebook: string;
  telegram: string;
}

export enum Reddit {
  Empty = "",
  Everstake = "Everstake",
  Mystra = "mystra",
  RAllianceblock = "r/Allianceblock/",
  RHectordao = "/r/hectordao/",
  The3KyNoX = "3KyNoX",
  UNeoNumis = "u/NeoNumis",
}

export enum Type {
  Corporation = "corporation",
  DAO = "dao",
  Dapp = "dapp",
  Exchange = "exchange",
  Individual = "individual",
  TypeDAO = "DAO",
  TypeValidator = "Validator",
  Validator = "validator",
}

export interface AveragePerformance {
  era_id: number;
  public_key: string;
  average_score: number;
}

export interface Page {
  number: number;
  url: string;
}

export interface DelegationsPayload {
  data: Delegation[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface Delegation {
  public_key: string;
  stake: string;
  bonding_purse: string;
  validator_public_key: string;
  validator: Validator;
}

export interface Validator {
  era_id: number;
  public_key: string;
  is_active: boolean;
  fee: number;
  delegators_number: number;
  self_stake: string;
  bid_amount: string;
  total_stake: string;
  delegator_stake: string;
  self_share: string;
  network_share: string;
  rank: number;
  account_info: AccountInfo;
  average_performance: null;
}

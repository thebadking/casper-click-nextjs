export interface ValidatorPayload {
  data: Data;
}

export interface Data {
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
  functionality: string[];
}

export interface Location {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Owner {
  name: string;
  type: string[];
  email: string;
  social: Social;
  website: string;
  branding: Branding;
  identity: Identity;
  location: Location;
  resources: Resources;
  description: string;
  affiliated_accounts: AffiliatedAccount[];
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
  other: Other[];
  privacy_policy_url: string;
  code_of_conduct_url: string;
  terms_of_service_url: string;
}

export interface Other {
  url: string;
  name: string;
}

export interface Social {
  github: string;
  medium: string;
  reddit: string;
  wechat: string;
  keybase: string;
  twitter: string;
  youtube: string;
  facebook: string;
  telegram: string;
}

export interface AveragePerformance {
  era_id: number;
  public_key: string;
  average_score: number;
}

export interface RewardsValidatorsPayload {
  data: string;
}

export interface DelegatorsPayload {
  data: DelegatorData[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface DelegatorData {
  public_key: string;
  stake: string;
  bonding_purse: string;
  validator_public_key: string;
  account_info: null;
}

export interface Page {
  number: number;
  url: string;
}

export interface RewardsDelegatorPayload {
  data: RewardsData[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface RewardsData {
  eraId: number;
  publicKey: string;
  amount: string;
  timestamp: Date;
  currency_amount: number;
  rate: number;
  current_currency_amount: number;
}

export interface Page {
  number: number;
  url: string;
}

export interface BlocksValidatorPayload {
  data: BlocksData[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface BlocksData {
  blockHash: string;
  parentHash: string;
  timestamp: Date;
  eraId: number;
  proposer: string;
  state: string;
  deployCount: number;
  transferCount: number;
  height: number;
  blockHeight: number;
}

export interface Page {
  number: number;
  url: string;
}

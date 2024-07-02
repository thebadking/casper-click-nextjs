import { Headers } from "node-fetch";
import { StringifiableRecord } from "query-string";

export interface QueryConfig {
  query?: StringifiableRecord;
  method?: "GET" | "HEAD";
  url: string;
  body?: Object;
  headers?: Headers;
}

export interface PriceHistoryPayload {
  prices: [number, number][];
  total_volumes: [number, number][];
  market_caps: [number, number][];
}

export interface SupplyInformationsPayload {
  data: {
    token: string;
    total: number;
    circulating: number;
    timestamp: number;
  };
}

export interface AuctionMetricsPayload {
  active_validators_number: number;
  total_bids_number: number;
  active_bids_number: number;
  total_active_era_stake: number;
}

export interface TrendingNFTCollectionPayload {
  success: boolean;
  data: DatumTrendingNFTCollectionPayload[];
}

export interface DatumTrendingNFTCollectionPayload {
  _id: string;
  volume: number;
  lastTimeFrameVolume: number;
  collection: Collection;
}

export interface Collection {
  _id: string;
  categories: any[];
  isVerified: boolean;
  isVisible: boolean;
  isInternal: boolean;
  numberOfItems: number;
  ownersCount: number;
  floor: null | string;
  floorTokenID: null | string;
  volumeCSPR: string;
  installer: string;
  kind: Kind;
  metadataKind: MetadataKind;
  ownershipMode: OwnershipMode;
  holderMode: HolderMode;
  whitelistMode: WhitelistMode;
  allowMinting: boolean;
  contractWhitelist: any[];
  totalSupply: string;
  attributes: Attribute[];
  meta: Array<string[]>;
  contractPackageHash: string;
  chain: Chain;
  contractHash: string;
  collectionName: string;
  symbol: string;
  mintingMode?: MintingMode;
  identifierMode?: IdentifierMode;
  metadataMutability?: MetadataMutability;
  burnMode?: BurnMode;
  reportingMode?: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  bannerImage?: string;
  customURL?: string;
  description?: string;
  featuredImage?: string;
  image?: string;
  standard: Standard;
  discord?: string;
  mediumLink?: string;
  siteUrl?: string;
  telegram?: string;
  twitterHandle?: string;
  tokenIDType?: string;
}

export interface Attribute {
  trait_type: string;
  value: string;
  tokenIDs: string[];
}

export enum BurnMode {
  Burnable = "Burnable",
  NonBurnable = "NonBurnable",
}

export enum Chain {
  Casper = "casper",
  CasperTest = "casper-test",
}

export enum HolderMode {
  Empty = "",
  Mixed = "Mixed",
}

export enum IdentifierMode {
  Ordinal = "Ordinal",
}

export enum Kind {
  Digital = "Digital",
  Empty = "",
}

export enum MetadataKind {
  Empty = "",
  Raw = "Raw",
}

export enum MetadataMutability {
  Immutable = "Immutable",
  Mutable = "Mutable",
}

export enum MintingMode {
  Installer = "Installer",
  Public = "Public",
}

export enum OwnershipMode {
  Empty = "",
  Transferable = "Transferable",
}

export enum Standard {
  Cep47 = "CEP47",
  Cep78 = "CEP78",
}

export enum WhitelistMode {
  Empty = "",
  Unlocked = "Unlocked",
}

export interface StatusInfoPayload {
  jsonrpc: string;
  id: number;
  result: Result;
}

export interface Result {
  api_version: string;
  chainspec_name: string;
  starting_state_root_hash: string;
  peers: Peer[];
  last_added_block_info: LastAddedBlockInfo;
  our_public_signing_key: string;
  round_length: null;
  next_upgrade: null;
  build_version: string;
  uptime: string;
}

export interface LastAddedBlockInfo {
  hash: string;
  timestamp: Date;
  era_id: number;
  height: number;
  state_root_hash: string;
  creator: string;
}

export interface Peer {
  node_id: string;
  address: string;
}

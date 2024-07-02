export interface FriendlyNFTByAccount {
  success: boolean;
  data: NFTs[];
  length: number;
}

export interface NFTs {
  likes: number;
  isNSFW: boolean;
  _id: string;
  listings: any[];
  offers: any[];
  history: string[];
  eventParams: any[];
  fetchedFromBlockchain: boolean;
  attributes: any[];
  deployHash: string;
  tokenID: string;
  contractHash: string;
  contractPackageHash: string;
  owner: string;
  mintedBy: string;
  name: string;
  imageURL: string;
  contentType: string;
  timestamp: string;
  nftCollection: NftCollection;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hasAtLeastOneActive: boolean;
  hasBuyNow: boolean;
  hasOnAuction: boolean;
  listingExpirationDate: null;
  listingID: null;
  price: null;
}

export interface NftCollection {
  _id: string;
  categories: any[];
  isVerified: boolean;
  isVisible: boolean;
  isInternal: boolean;
  numberOfItems: number;
  ownersCount: number;
  floor: null;
  floorTokenID: null;
  volumeCSPR: string;
  installer: string;
  kind: string;
  metadataKind: string;
  ownershipMode: string;
  holderMode: string;
  whitelistMode: string;
  allowMinting: boolean;
  contractWhitelist: any[];
  totalSupply: string;
  attributes: any[];
  meta: Array<string[]>;
  contractPackageHash: string;
  chain: string;
  contractHash: string;
  collectionName: string;
  symbol: string;
  standard: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  tokenIDType: string;
}

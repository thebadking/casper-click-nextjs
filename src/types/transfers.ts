export interface TransfersPayload {
  data: Trasnfer[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface Trasnfer {
  transferId: null | string;
  deployHash: string;
  blockHash: string;
  sourcePurse: string;
  targetPurse: string;
  amount: string;
  fromAccount: string;
  toAccount: string;
  timestamp: Date;
  fromAccountPublicKey: string;
  toAccountPublicKey: string;
  currency_amount: number;
  rate: number;
  current_currency_amount: number;
}

export interface Page {
  number: number;
  url: string;
}

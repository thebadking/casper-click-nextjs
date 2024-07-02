export interface BlockPayload {
  data: Data;
}

export interface Data {
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
  deploys: string[];
}

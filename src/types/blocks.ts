export interface BlocksPayload {
  data: Block[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface Block {
  blockHash: string;
  parentHash: string;
  timestamp: Date;
  eraId: number;
  proposer: string;
  state: State;
  deployCount: number;
  transferCount: number;
  height: number;
  blockHeight: number;
}

export enum State {
  B5Af5Edb7183D3F68Bfa6Edcd22Fa0Fe3784Bb4399D1Bd21Dfd312Ab27C93415 = "b5af5edb7183d3f68bfa6edcd22fa0fe3784bb4399d1bd21dfd312ab27c93415",
  Eb84651D9107B4Ffc1057Cf80Eeca328846D66A56Dc2Af11C8860766264F014D = "eb84651d9107b4ffc1057cf80eeca328846d66a56dc2af11c8860766264f014d",
  The8Adbac13B792985D6C07B52138Ec88F897Cc034Bede4D0Ef5Aca9De0Edda8109 = "8adbac13b792985d6c07b52138ec88f897cc034bede4d0ef5aca9de0edda8109",
}

export interface Page {
  number: number;
  url: string;
}

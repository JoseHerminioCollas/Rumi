// src/types/stone.ts

export type Attribute = {
  trait_type: string;
  value: string;
};

export type Properties = {
  [k: string]: any;
  stone_id?: string;
  mining_concession?: string;
  hcs_compliance_topic?: string;
  compliance_proof_hcs?: string;
  vendor_ruc?: string;
};

export type Item = {
  name: string;
  properties: Properties;
  attributes: Attribute[];
};

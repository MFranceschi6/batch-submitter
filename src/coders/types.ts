export interface Signature {
  r: string
  s: string
  v: string
}
export type Bytes32 = string
export type Uint16 = number
export type Uint8 = number
export type Uint24 = number
export type Address = string

export interface Coder {
  encode: Function
  decode: Function
}

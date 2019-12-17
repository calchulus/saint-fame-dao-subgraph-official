export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: 'FAME',
    name: 'SAINTFAMEdao',
    tokenAddress: '0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2',
    tokenDecimals: 18,
    exchangeAddress: '0x5e7907ac70b9a781365c72f2acee96710bda042e'
  }]

/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x8C1FF117c5ad343Ddac145A9c1C974E704B8c3eD'

export const WETH9_ADDRESS = '0x4200000000000000000000000000000000000006'
export const DAI_ADDRESS = '0xE033EA74d0f98696010b49E6B832F477d32C3944' // DAI
export const USDC_ADDRESS = '0x0EFF288275F280db38FC8d4A3116E0777370A3b5' // USDC
export const USDT_ADDRESS = '0xDA321De9DEDdF061B22FD5E2876fE65f8d542C8d' // USDT
export const WBTC_ADDRESS = '0x8DD4B4ab9B4D4C5bC2Fdd15E8b42360b296d5C8A' // WBTC

export const USDT_WETH9_03_POOL = '0xC3C5D341Bdf91D9dE1010c10e2d8469EB4279eE7'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

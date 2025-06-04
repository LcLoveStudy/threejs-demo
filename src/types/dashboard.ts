/** 案例名称的枚举 */
export enum ExampleNameEnum {
  'solarSystem' = '太阳系模型',
  'baseCube' = '基础立方体',
}

/** 案例id的类型 */
export type ExampleIdsType = keyof typeof ExampleNameEnum

/** 案例列表类型 */
export type ExampleItemType = {
  id: ExampleIdsType
  name: ExampleNameEnum
  img: string
  description: string
}

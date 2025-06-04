import type { ExampleIdsType } from '@/types/dashboard'
import { solarSystem } from './solarSystem'
import { baseBox } from './baseBox'

/** 初始化three */
export const initialExamples = (canvasDom: HTMLCanvasElement | null, exampleId: ExampleIdsType) => {
  if (!canvasDom) return
  switch (exampleId) {
    case 'solarSystem':
      solarSystem(canvasDom)
      break
    case 'baseBox':
      baseBox(canvasDom)
      break
    default:
      break
  }
}

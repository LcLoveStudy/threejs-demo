import type { ExampleIdsType } from '@/types/dashboard'
import { solarSystem } from './solarSystem'

/** 初始化three */
export const initialExamples = (canvasDom: HTMLCanvasElement | null, exampleId: ExampleIdsType) => {
  if (!canvasDom) return
  switch (exampleId) {
    case 'solarSystem':
      solarSystem(canvasDom)
      break
    default:
      break
  }
}

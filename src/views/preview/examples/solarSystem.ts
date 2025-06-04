import * as THREE from 'three'
import { getBaseUtils, resetRenderer } from './common'

/** 创建一个太阳系 */
export const solarSystem = (canvasDom: HTMLCanvasElement) => {
  const { scene, camera, renderer } = getBaseUtils(canvasDom)
  scene.background = new THREE.Color('gray')

  // 自转的列表
  const rotateList: Array<THREE.Mesh | THREE.Object3D> = []

  const geometry = new THREE.SphereGeometry(2, 32, 32) // 球体

  const solarOrbit = new THREE.Object3D()
  rotateList.push(solarOrbit)
  scene.add(solarOrbit)

  // 太阳
  const sunMaterial = new THREE.MeshStandardMaterial({ color: 'white', emissive: 'yellow' })
  const sun = new THREE.Mesh(geometry, sunMaterial)
  rotateList.push(sun)
  solarOrbit.add(sun)

  const earthOrbit = new THREE.Object3D()
  earthOrbit.position.set(10, 0, 0)
  solarOrbit.add(earthOrbit)
  rotateList.push(earthOrbit)
  // 地球
  const earthMaterial = new THREE.MeshPhongMaterial({ color: 'blue' })
  const earth = new THREE.Mesh(geometry, earthMaterial)
  earth.scale.set(0.5, 0.5, 0.5)
  rotateList.push(earth)
  earthOrbit.add(earth)

  const moonOrbit = new THREE.Object3D()
  moonOrbit.position.set(2, 0, 0)
  earthOrbit.add(moonOrbit)
  rotateList.push(moonOrbit)
  // 月球
  const moonMaterial = new THREE.MeshPhongMaterial({ color: 'gray' })
  const moon = new THREE.Mesh(geometry, moonMaterial)
  moon.scale.set(0.2, 0.2, 0.2)
  rotateList.push(moon)
  moonOrbit.add(moon)

  // 太阳光
  const sunlight = new THREE.DirectionalLight(0xffffff, 1)
  sunlight.position.set(50, 20, 0)
  scene.add(sunlight)

  // 环境光，防止黑色
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3) // 第二个参数是强度
  scene.add(ambientLight)

  // 自转
  const animate = () => {
    requestAnimationFrame(animate)
    rotateList.forEach((item) => {
      item.rotation.y += 0.01
    })
    sunlight.position.copy(sun.getWorldPosition(new THREE.Vector3()))
    sunlight.target.position.copy(earth.getWorldPosition(new THREE.Vector3()))
    sunlight.target.updateMatrixWorld()
    renderer.render(scene, camera)
  }
  requestAnimationFrame(animate)

  renderer.render(scene, camera)

  /** 响应式 */
  resetRenderer(renderer, camera)
}

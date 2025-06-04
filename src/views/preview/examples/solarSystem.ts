import * as THREE from 'three'
import { getBaseUtils, resetRenderer } from './common'

/** 创建一个太阳系 */
export const solarSystem = (canvasDom: HTMLCanvasElement) => {
  const { scene, camera, renderer, controls } = getBaseUtils(canvasDom)
  renderer.setClearColor('#ffffff')

  // 创建太阳
  const sunGeometry = new THREE.SphereGeometry(5, 32, 32)
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfdb813 })
  const sun = new THREE.Mesh(sunGeometry, sunMaterial)
  scene.add(sun)

  // 创建地球
  const earthOrbit = new THREE.Object3D()
  const earthGeometry = new THREE.SphereGeometry(2, 32, 32)
  const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x1e90ff })
  const earth = new THREE.Mesh(earthGeometry, earthMaterial)
  earth.position.x = 15
  earthOrbit.add(earth)
  scene.add(earthOrbit)

  //创建月球
  const moonOrbit = new THREE.Object3D()
  const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32)
  const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 })
  const moon = new THREE.Mesh(moonGeometry, moonMaterial)
  moon.position.x = 3
  moonOrbit.add(moon)
  earth.add(moonOrbit)

  //添加光源
  const light = new THREE.PointLight(0xffffff, 2, 50)
  light.position.set(10, 10, 10)
  scene.add(light)

  //添加动画逻辑
  const animate = () => {
    requestAnimationFrame(animate)
    sun.rotation.y += 0.005 // 自转
    earth.rotation.y += 0.05 // 地球自转
    earthOrbit.rotation.y += 0.01 // 地球绕太阳公转
    moonOrbit.rotation.y += 0.05 // 月球绕地球公转
    controls.update() // 更新控制器
    renderer.render(scene, camera) // 渲染画面
  }
  animate()

  /** 响应式 */
  resetRenderer(renderer, camera)
}

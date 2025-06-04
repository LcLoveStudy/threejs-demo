import * as THREE from 'three'
import { getBaseUtils, resetRenderer } from './common'

/** 创建一个太阳系 */
export const solarSystem = (canvasDom: HTMLCanvasElement) => {
  const { scene, camera, renderer } = getBaseUtils(canvasDom)
  const objects: Array<THREE.Mesh | THREE.Object3D> = [] //需要更新旋转角度的对象数组

  const solarSystem = new THREE.Object3D()
  scene.add(solarSystem)
  objects.push(solarSystem)

  const sphereGeometry = new THREE.SphereGeometry(1, 6, 6) //球体几何体

  const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 }) //太阳材质
  const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial) //太阳
  sunMesh.scale.set(5, 5, 5) //设置太阳大小
  solarSystem.add(sunMesh)
  objects.push(sunMesh) //将太阳添加到需要更新旋转角度的对象数组中

  const color = 0xffffff
  const intensity = 3
  const light = new THREE.PointLight(color, intensity)
  scene.add(light)

  const earthSystem = new THREE.Object3D()
  earthSystem.position.x = 10
  solarSystem.add(earthSystem)
  objects.push(earthSystem) //将地球系统添加到太阳系中

  const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244 }) //地球材质
  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial) //地球
  objects.push(earthMesh) //将地球添加到需要更新旋转角度的对象数组中
  earthSystem.add(earthMesh) //将地球系统添加到地球中

  const moonOrbit = new THREE.Object3D()
  moonOrbit.position.x = 2
  earthSystem.add(moonOrbit)

  const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, emissive: 0x111111 }) //月球材质
  const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial) //月球
  moonMesh.scale.set(0.5, 0.5, 0.5)
  moonOrbit.add(moonMesh) //将月球系统添加到月球中
  objects.push(moonMesh) //将地球添加到需要更新旋转角度的对象数组中

  camera.position.set(0, 50, 0)
  camera.up.set(0, 0, 1)
  camera.lookAt(0, 0, 0)

  const animate = (time: number) => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera) // 渲染画面
    objects.forEach((obj) => {
      obj.rotation.y = time * 0.001 // 更新对象的旋转角度
    })
  }
  requestAnimationFrame(animate)

  renderer.render(scene, camera)

  /** 响应式 */
  resetRenderer(renderer, camera)
}

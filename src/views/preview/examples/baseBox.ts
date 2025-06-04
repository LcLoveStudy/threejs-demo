import * as THREE from 'three'
import { getBaseUtils, resetRenderer } from './common'

export const baseBox = (canvasDom: HTMLCanvasElement) => {
  const { renderer, scene, camera, controls } = getBaseUtils(canvasDom)
  camera.position.z = 5 //相机位置
  const geometry = new THREE.BoxGeometry(1, 1, 1) //创建几何体
  const material = new THREE.MeshPhongMaterial({ color: 'pink' }) //创建材质
  const cube = new THREE.Mesh(geometry, material) //创建网格

  const light = new THREE.DirectionalLight(0xffffff, 2) //创建光源
  light.position.set(1, 1, 1) //设置光源位置
  scene.add(light) //将光源添加到场景中

  scene.add(cube) //将网格添加到场景中
  renderer.render(scene, camera) //渲染场景和相机

  //添加动画逻辑
  const animate = (time: number) => {
    time *= 0.001 // 将时间单位变为秒
    requestAnimationFrame(animate)
    controls.update() // 更新控制器
    // 让光源始终从摄像机方向打过来
    light.position.copy(camera.position)

    cube.rotation.x = time
    cube.rotation.y = time
    renderer.render(scene, camera) // 渲染画面
  }
  requestAnimationFrame(animate)

  resetRenderer(renderer, camera)
}

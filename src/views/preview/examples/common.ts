import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
/**
 * 初始化场景和相机
 * @param canvasDom canvas元素
 * @returns
 */
export const getBaseUtils = (canvasDom: HTMLCanvasElement) => {
  const scene = new THREE.Scene() //初始化场景

  //初始化相机
  const camera = new THREE.PerspectiveCamera(
    75, // 视场角
    window.innerWidth / window.innerHeight - 64, //长宽比
    0.1, //近截面
    1000, //远截面
  )
  camera.position.z = 30 //相机位置

  //初始化渲染器
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasDom,
    antialias: true, //抗锯齿
  })
  renderer.setSize(window.innerWidth, window.innerHeight - 64) //设置渲染器大小
  renderer.setPixelRatio(window.devicePixelRatio)

  //添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  return { scene, camera, renderer, controls }
}

import { useEffect, useRef } from "react";
import * as THREE from "three";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function TronBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --------------------------
    //   SCENE + CAMERA
    // --------------------------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 10);

    // --------------------------
    //   RENDERER
    // --------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    mount.appendChild(renderer.domElement);

    // --------------------------
    //   BLOOM POST-PROCESSING
    // --------------------------
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      2.0, // strength
      0.4, // radius
      0.0 // threshold
    );

    composer.addPass(bloomPass);

    // --------------------------
    //   GRID INFINITO
    // --------------------------
    const gridSize = 200;
    const gridDivisions = 60;
    const gridColor = 0x00d9ff;

    const grid1 = new THREE.GridHelper(
      gridSize,
      gridDivisions,
      gridColor,
      gridColor
    );
    const grid2 = new THREE.GridHelper(
      gridSize,
      gridDivisions,
      gridColor,
      gridColor
    );
    grid2.position.z = -gridSize;

    scene.add(grid1);
    scene.add(grid2);

    // --------------------------
    //   SOL / PORTAL
    // --------------------------
    const sunGeo = new THREE.CircleGeometry(20, 64);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xff9e00 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(0, 10, -100);
    scene.add(sun);

    const sunLight = new THREE.PointLight(0xff9e00, 2, 100);
    sunLight.position.set(0, 10, -80);
    scene.add(sunLight);

    // --------------------------
    //   PARTÍCULAS
    // --------------------------
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 150;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.15,
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // --------------------------
    //   PARALLAX (apenas no Hero)
    // --------------------------
    let mouseX = 0;
    let mouseY = 0;
    let isInsideHero = false;

    const onMouseMove = (event: MouseEvent) => {
      if (!isInsideHero) return;

      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Detecta entrada/saída do Hero
    const heroSection = document.getElementById("hero");

    heroSection?.addEventListener("mouseenter", () => {
      isInsideHero = true;
    });

    heroSection?.addEventListener("mouseleave", () => {
      isInsideHero = false;
    });

    // --------------------------
    //   ANIMAÇÃO
    // --------------------------
    const clock = new THREE.Clock();
    const speed = 0.6;

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // GRID infinito
      grid1.position.z += speed;
      grid2.position.z += speed;

      if (grid1.position.z >= gridSize)
        grid1.position.z = grid2.position.z - gridSize;
      if (grid2.position.z >= gridSize)
        grid2.position.z = grid1.position.z - gridSize;

      // PARTÍCULAS
      particlesMesh.position.z += speed;
      if (particlesMesh.position.z > 50) particlesMesh.position.z = -50;

      // Movimento da câmera (somente no Hero)
      if (isInsideHero) {
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 2 + 3 - camera.position.y) * 0.05;
      } else {
        camera.position.x += (0 - camera.position.x) * 0.03;
        camera.position.y += (3 - camera.position.y) * 0.03;
      }

      camera.lookAt(0, 2, -50);

      // Sol pulsante
      sun.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.02);

      composer.render();
    };

    animate();

    // --------------------------
    //   RESIZE
    // --------------------------
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(mount.clientWidth, mount.clientHeight);
      composer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // --------------------------
    //   CLEANUP
    // --------------------------
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);

      heroSection?.removeEventListener("mouseenter", () => {});
      heroSection?.removeEventListener("mouseleave", () => {});

      mount.removeChild(renderer.domElement);

      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10 w-full h-full bg-black"
    />
  );
}

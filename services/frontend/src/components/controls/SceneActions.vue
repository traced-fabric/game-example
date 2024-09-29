<script lang="ts" setup>
import { Vector3 } from 'three';
import { useSceneSettingsStore } from '../../stores/sceneSettings';

const sceneSettings = useSceneSettingsStore();

function addCube() {
  sceneSettings.objects.add({
    modelPath: '/models/cube/cube.glb',
    position: new Vector3(Math.random() * 20 - 10, Math.random() * 20, Math.random() * 20 - 10),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
  });
}
</script>

<template>
  <section class="fixed flex flex-col gap-4 p-2 -translate-x-1/2 rounded bottom-2 left-1/2 bg-neutral-900/80 backdrop-blur">
    <button @click="addCube">
      Add cube
    </button>
  </section>
</template>

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

const transformControlsModes = ['translate', 'rotate', 'scale'] as const;

function setControlsMode(mode: (typeof sceneSettings)['transformControls']['mode']) {
  sceneSettings.transformControls.mode = mode;
}
</script>

<template>
  <section class="fixed flex flex-col -translate-x-1/2 bottom-2 left-1/2 backdrop-blur">
    <div class="flex gap-6 p-2 rounded bg-neutral-800">
      <button
        class="px-2 rounded bg-neutral-700"
        @click="addCube"
      >
        Add cube
      </button>

      <div class="flex gap-2">
        <button
          v-for="mode in transformControlsModes"
          :key="mode"
          :disabled="sceneSettings.transformControls.mode === mode"
          class="px-2 rounded bg-neutral-700 disabled:opacity-50"
          @click="setControlsMode(mode)"
        >
          {{ mode }}
        </button>
      </div>
    </div>
  </section>
</template>

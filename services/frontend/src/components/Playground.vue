<script lang="ts" setup>
import { useLoader, useTres } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { watch } from 'vue';
import { useSceneSettingsStore } from '../stores/sceneSettings';

const model = await useLoader(GLTFLoader, '/models/playground/playground.glb');

const sceneSettings = useSceneSettingsStore();
const { advance } = useTres();

model.nodes.Room.material.color.set(sceneSettings.room.color);
watch(() => sceneSettings.room.color, (color) => {
  model.nodes.Room.material.color.set(color);
  advance();
});
</script>

<template>
  <primitive :object="model.scene" />
</template>

<script lang="ts" setup>
import { useSceneSettingsStore } from '../../stores/sceneSettings';
import GameObject from './GameObject.vue';

const sceneSettings = useSceneSettingsStore();
</script>

<template>
  <Suspense>
    <GameObject
      v-for="object in sceneSettings.objects.list"
      :key="object.id"

      :object="object"
    />
  </Suspense>
</template>

<script lang="ts" setup>
import { useSceneSettingsStore } from '../stores/sceneSettings';

const sceneSettings = useSceneSettingsStore();
</script>

<template>
  <nav class="fixed flex flex-col w-full gap-4 p-2 rounded max-w-72 top-2 left-2 bg-neutral-900/80 backdrop-blur">
    Scene settings

    <hr>

    <div class="grid gap-2">
      <p>Room:</p>

      <div class="flex gap-2">
        <label for="room-color" class="grow">Color</label>
        <input id="room-color" type="color" v-model="sceneSettings.room.color">
      </div>
    </div>
  </nav>
</template>

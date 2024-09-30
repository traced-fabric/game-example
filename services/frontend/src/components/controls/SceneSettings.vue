<script lang="ts" setup>
import { useSceneSettingsStore } from '../../stores/sceneSettings';

const sceneSettings = useSceneSettingsStore();
</script>

<template>
  <section class="fixed flex flex-col w-full gap-4 p-2 rounded text-sky-950 max-w-72 top-2 left-2 bg-blue-200/70 backdrop-blur">
    Scene settings

    <div class="grid gap-2">
      <div class="flex gap-2">
        <label for="room-color" class="grow">Room color</label>
        <input id="room-color" v-model="sceneSettings.room.color" type="color">
      </div>
    </div>
  </section>
</template>

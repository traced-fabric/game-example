import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSceneSettingsStore = defineStore('sceneSettings', () => {
  const roomColor = ref('#ffffff');

  return {
    room: {
      roomColor,
    },
  };
});

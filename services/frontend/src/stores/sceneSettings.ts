import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useSceneSettingsStore = defineStore('sceneSettings', () => {
  const room = reactive({
    color: '#ffffff',
  });

  return {
    room,
  };
});

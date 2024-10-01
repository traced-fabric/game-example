import type { Vector3 } from 'three';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export type TObject = {
  id: string;

  modelPath: string;

  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

export const useSceneSettingsStore = defineStore('sceneSettings', () => {
  const roomColor = ref('#fffaf5');

  const objects = ref<Record<TObject['id'], TObject>>({});
  const addObject = (object: Omit<TObject, 'id'>) => {
    const id = crypto.randomUUID();
    objects.value[id] = { ...object, id };
  };
  const removeObject = (id: TObject['id']) => {
    delete objects.value[id];
  };

  const transformControlsMode = ref<'translate' | 'rotate' | 'scale'>('translate');

  return {
    room: {
      color: roomColor,
    },

    objects: {
      list: objects,
      add: addObject,
      remove: removeObject,
    },

    transformControls: {
      mode: transformControlsMode,
    },
  };
});

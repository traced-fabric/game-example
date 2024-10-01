<script lang="ts" setup>
import type { TObject } from '../../stores/sceneSettings';
import { TransformControls, useGLTF } from '@tresjs/cientos';
import { useTres } from '@tresjs/core';
import { onMounted, ref } from 'vue';
import { useSceneSettingsStore } from '../../stores/sceneSettings';

const props = defineProps<{
  object: TObject;
}>();

const model = await useGLTF(props.object.modelPath);

const primitiveRef = ref();
const { advance } = useTres();
const sceneSettings = useSceneSettingsStore();

onMounted(advance);
</script>

<template>
  <TransformControls
    :mode="sceneSettings.transformControls.mode"
    :object="primitiveRef"
    :size="0.6"
    @change="advance"
  />
  <primitive
    ref="primitiveRef"
    :object="model.scene"
    :position="object.position"
  />
</template>

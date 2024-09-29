<script lang="ts" setup>
import type { TObject } from '../../stores/sceneSettings';
import { useGLTF } from '@tresjs/cientos';
import { useTres } from '@tresjs/core';
import { onMounted } from 'vue';

const props = defineProps<{
  object: TObject;
}>();

const model = await useGLTF(props.object.modelPath);
const { advance } = useTres();

onMounted(advance);
</script>

<template>
  <primitive
    :object="model.scene"
    :position="object.position"
  />
</template>

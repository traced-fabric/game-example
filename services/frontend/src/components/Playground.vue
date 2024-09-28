<script lang="ts" setup>
import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const { scene: playground } = await useLoader(GLTFLoader, '../public/models/playground/playground.glb');
</script>

<template>
  <primitive :object="playground" />
</template>

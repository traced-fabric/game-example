<script lang="ts" setup>
import { OrbitControls } from '@tresjs/cientos';
import { useTres } from '@tresjs/core';

const { advance } = useTres();

function render() {
  advance();
}
</script>

<template>
  <TresPerspectiveCamera :position="[30, 20, 10]" :look-at="[0, 8, 0]" />
  <OrbitControls @change="render" />
</template>

<script setup lang="ts">
import { OrbitControls, Sky } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
</script>

<template>
  <TresCanvas shadows window-size render-mode="on-demand">
    <TresPerspectiveCamera :position="[5, 7.5, 7.5]" />

    <OrbitControls />
    <Sky
      :turbidity="10.4"
      :rayleigh="1.837"
      :mie-coefficient="0.063"
      :mie-directional-g="0.975"
      :elevation="24.7"
      :exposure="0.324"
    />

    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight :position="[5, 5, 2]" :intensity="1" />

    <TresMesh
      :position="[-2, 2, 0]"
      :rotation="[0, Math.PI, 0]"
    >
      <TresConeGeometry :args="[1, 1.5, 3]" />
      <TresMeshToonMaterial color="#82DBC5" />
    </TresMesh>
    <TresMesh
      :position="[0, 0, 0]"
    >
      <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
      <TresMeshToonMaterial color="#4F4F4F" />
    </TresMesh>
  </TresCanvas>
</template>

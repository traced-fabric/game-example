<script setup lang="ts">
import { Sky } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
import Camera from './components/Camera.vue';
import Controls from './components/controls/Controls.vue';
import AllObjects from './components/objects/AllObjects.vue';
import Playground from './components/Playground.vue';
</script>

<template>
  <TresCanvas shadows window-size render-mode="manual">
    <Camera />

    <Sky
      :turbidity="10.4"
      :rayleigh="1.837"
      :mie-coefficient="0.063"
      :mie-directional-g="0.975"
      :elevation="24.7"
      :azimuth="180"
      :exposure="0.324"
    />

    <TresDirectionalLight :position="[50, 50, 20]" :intensity="5" />
    <TresDirectionalLight :position="[-30, 3, -50]" :intensity="5" />

    <Suspense>
      <Playground />
    </Suspense>

    <AllObjects />
  </TresCanvas>

  <Controls />
</template>

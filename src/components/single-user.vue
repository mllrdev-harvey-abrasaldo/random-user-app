<script setup lang="ts">
import type { PropType } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import type { Result } from '@/interface/users';

defineProps({
  user: {
    type: Object as PropType<Result>,
    required: true,
  }
});

</script>

<template>
  <div>
    <Card>
      <template #header>
        <img :src="user.picture.large"/>
      </template>
      <template #title> {{ user.name.first }} {{ user.name.last }} <br /> </template>
      <template #subtitle>
        Email: {{ user.email }} <br />
        Phone: {{ user.phone }} | {{ user.cell }} <br />
        <br />
        <Chip class="chip">{{ user.gender }}</Chip>
      </template>
      <template #content>
        {{ user.location.street.number }} {{ user.location.street.name }}, {{ user.location.city }},
        {{ user.location.state }}, {{ user.location.country }}</template
      >
    </Card>
  </div>
</template>

<style>
</style>
<script setup lang="ts">
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import { type PropType, computed, onMounted } from 'vue';
import type {Result} from '@/interface/users'

  const thisUser = defineProps({
    user: {
      type: Object as PropType<Result>,
      required: true,
    },
  })
  const fullName = computed (
    function name () {
      return `${thisUser.user.name.first} ${thisUser.user.name.last}`
    }
  )
  const fullLocation = computed(
    function location () {
      return `${thisUser.user.location.street.number} ${thisUser.user.location.street.name} ${thisUser.user.location.city} 
      ${thisUser.user.location.state} ${thisUser.user.location.country}`
    }
  )

</script>

<template>
  <div>
    <Card class="modalCard">
      <template #header>
        <img :src="user.picture.large"/>
      </template>
      <template #title>{{fullName}}</template>
      <template #subtitle>
        Email: {{ user.email }} <br />
        Phone: {{ user.phone }} | {{ user.cell }} <br />
        <br />
        <Chip class="chip">{{ user.gender }}</Chip>
      </template>
      <template #content>{{fullLocation}}
      </template>
    </Card>
  </div>
</template>

<style>
.modalCard {
  min-width: 25rem;
  max-width: 30rem;
  margin-bottom: 2em;
  border-radius: 5px;
  margin: 8% auto;
  position: relative;
  padding: 20px;
}
</style>
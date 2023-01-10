<script setup lang="ts">
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import {computed} from 'vue';
import useUser from '@/composables/use-user';
import Button from 'primevue/button';
import router from '@/router';

const { user } = useUser();

  const fullName = computed (
    function name () {
      return `${user.value?.name.first} ${user.value?.name.last}`
    }
  )
  const fullLocation = computed(
    function location () {
      return `${user.value?.location.street.number} ${user.value?.location.street.name} ${user.value?.location.city} 
      ${user.value?.location.state} ${user.value?.location.country}`
    }
  )

  function backButton() {
    router.go(-1);
  }

</script>

<template>
  <div>
    <Card class="modalCard">
      <template #header>
        <img :src="user?.picture.large"/>
      </template>
      <template #title>{{fullName}}</template>
      <template #subtitle>
        Email: {{ user?.email }} <br />
        Phone: {{ user?.phone }} | {{ user?.phone }} <br />
        <br />
        <Chip class="chip">{{ user?.gender }}</Chip>
      </template>
      <template #content>{{fullLocation}}
      </template>
    </Card>
    <Button @click="backButton()">Back</Button>
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
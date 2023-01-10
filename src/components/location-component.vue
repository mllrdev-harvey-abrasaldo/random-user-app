<script setup lang="ts">
import type { Result } from '@/interface/users';
import { type PropType, computed } from 'vue';

const thisUser = defineProps({
    data: {
      type: Object as PropType<Result>,
      required: true,
    },
})

const fullLocation = computed(
    function location () {
      return `${thisUser.data.location.street.number} ${thisUser.data.location.street.name} ${thisUser.data.location.city} 
      ${thisUser.data.location.state} ${thisUser.data.location.country}`
    }
  )

</script>

<template>
    {{fullLocation}}
</template>
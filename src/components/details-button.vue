<script setup lang="ts">
import type { Result } from '@/interface/users';
import  type {PropType}  from 'vue';
import router from '@/router';
import Button from 'primevue/button';
import { RouteName } from '@/constants/route-names';
import useUser from '@/composables/use-user';

const { user } =  useUser();

const thisUser = defineProps({
    data: {
      type: Object as PropType<Result>,
      required: true,
    },
})

function toView() {
    user.value = thisUser.data
    console.log(user.value?.name.first)
    router.push({ name: RouteName.USER, params: { id: thisUser.data.id?.value } });
}

</script>

<template>
    <Button @click="toView">More Details</Button>
</template>
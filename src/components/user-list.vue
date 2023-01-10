<script setup lang="ts">
import { ref, type PropType } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import router from '../router/index';
import { RouteName } from '@/constants/route-names';
import type IPage from '@/interface/page';
import Avatar from 'primevue/avatar';
import type { Result } from '@/interface/users';
import UserModal from './user-modal.vue';

defineProps({
  users: {
    type: Object as PropType<Result[]>,
    required: true
  },
});

const selectedUser = ref();
const pageNumber = ref(1);
const maxPage = ref(1);
const showUser = ref(false)

function onPage<Type extends IPage>(event: Type) {
  pageNumber.value = event.page + 1;
  maxPage.value = event.pageCount;
  router.push({ name: RouteName.LIST, params: { page: pageNumber.value.toString() } })
}

function backButton(){
  router.push({ name: RouteName.LIST, params: { page: 1 } });
  showUser.value = false;
}

function viewUser() {
  showUser.value = true;
}

function location(data: Result) {
  return `${data.location.street.number} ${data.location.street.name} ${data.location.city} 
      ${data.location.state} ${data.location.country}`
}

</script>

<template>
  <DataTable v-if="!showUser"
    :value="users"
    :paginator="true"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
    :rows="5"
    :autoLayout="true"
    @page="onPage($event)"
    v-model:selection="selectedUser"
    selectionMode="single"
    @row-click="viewUser"
      >
      <Column field="picture.medium">
        <template #body="{ data }">
          <Avatar :image = "data.picture.large" shape ="circle" size="large" />
        </template>
      </Column>
      <Column field="name.first" header="Name" :sortable="true">
        <template #body="{ data }"> {{ data.name.first }} {{ data.name.last }} </template>
      </Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone #">
        <template
          #body="{ data }"> {{ data.phone }} 
        </template>
      </Column>
      <Column field="gender" header="Gender">
      <template #body="{ data }">
          {{ data.gender }}
      </template>
      </Column>
      <Column field="location" header="Address">
        <template #body="{ data }">
          {{ location(data) }}
        </template>
      </Column>
    </DataTable>
    <div v-if="showUser">
      <Button @click="backButton">Back to List</Button>
      <UserModal :user="selectedUser"  />
  </div>
</template>

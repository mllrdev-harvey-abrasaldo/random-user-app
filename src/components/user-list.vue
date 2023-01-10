<script setup lang="ts">
import { ref, type PropType } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from '../router/index';
import { RouteName } from '@/constants/route-names';
import type IPage from '@/interface/page';
import Avatar from 'primevue/avatar';
import type { Result } from '@/interface/users';
import Location from '../components/location-component.vue'
import detailsButton from './details-button.vue';

defineProps({
  users: {
    type: Object as PropType<Result[]>,
    required: true
  },
});

const pageNumber = ref(1);
const maxPage = ref(1);

function onPage<Type extends IPage>(event: Type) {
  pageNumber.value = event.page + 1;
  maxPage.value = event.pageCount;
  router.push({ name: RouteName.LIST, params: { page: pageNumber.value.toString() } })
}

</script>

<template>
  <DataTable
    :value="users"
    :paginator="true"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
    :rows="5"
    :autoLayout="true"
    @page="onPage($event)"
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
          <Location :data="data" />
        </template>
      </Column>
      <Column field="details" header="More Details">
        <template #body="{data}">
          <detailsButton :data="data"/>
        </template>
      </Column>
  </DataTable>
</template>

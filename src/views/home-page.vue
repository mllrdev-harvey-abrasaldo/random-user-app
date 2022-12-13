<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import ProgressSpinner from 'primevue/progressspinner';
import { genders } from '../constants/genders';
import useData from '../composables/use-data'
import UserList from '../components/user-list.vue';

const { getUsers, users, quantity, gender, error, loading, errorMsg } = useData();
function getRandomUser() {
  getUsers();
}

</script>

<template>
  <InputNumber placeholder="Number of users" v-model="quantity" :min="1" showButtons />
  <Dropdown
    placeholder="Select a Gender"
    v-model="gender"
    :options="genders"
    optionLabel="name"
    optionValue="code"
    />
  <Button @click="getRandomUser">Generate Random User</Button>
  <p><ProgressSpinner v-if="loading" /></p>
  <p v-if="error">Can't retrieve users please try again!</p>
  <p>{{errorMsg}}</p>
  <UserList v-if="users" :users="users"></UserList>
</template>

<style></style>
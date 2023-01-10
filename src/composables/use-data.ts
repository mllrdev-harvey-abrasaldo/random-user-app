import { ref } from 'vue';
import useApi from '@/composables/use-api';
import type { Result } from '@/interface/users';

const users = ref<Result[]>();

export default function useData() {
  const { get } = useApi();
  const error = ref(false);
  const loading = ref(false);
  const quantity = ref(1);
  const gender = ref();
  const errorMsg = ref();

  const url = 'https://randomuser.me/api/?';
  const searchParams = new URLSearchParams();

  async function getUsers() {
    searchParams.set('results', quantity.value.toString());
    searchParams.set('gender', gender.value);


    try{
      const data = await get(url, searchParams, error, loading)
      users.value = data.results;
    }
    catch(err) {
      errorMsg.value = err;
    }
  }

  return { getUsers, users, loading, error, quantity, gender, errorMsg };
}
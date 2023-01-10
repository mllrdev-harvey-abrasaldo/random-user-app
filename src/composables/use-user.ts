import type { Result } from '@/interface/users';
import { ref } from 'vue';

const user = ref<Result>();

export default function useUser(){
    return {user};
}
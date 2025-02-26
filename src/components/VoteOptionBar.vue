<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";
import VoteOptionBtn from "./VoteOptionBtn.vue";

  const voteStore = useVoterStore();

  const { voteOptions } = storeToRefs(voteStore);
  const { removeVoteOption } = voteStore;

</script>

<template>
  <div v-for="option in voteOptions" :key="option.id" class="w-full shadow-md hover:shadow-xl rounded-md pr-[3px] bg-purple-200 flex items-center gap-1 transition-all duration-300 ease-in-out">
    <VoteOptionBtn :option="option" />
    <button @click="() => removeVoteOption(option.id)" class="cursor-pointer size-8 p-2 flex items-center justify-center rounded-full hover:bg-neutral-100 hover:text-red-700 text-xl transition-all duration-300 ease-in-out">
      <img src="/src/assets/trash-01.svg" alt="trash icon" />
    </button>
  </div>
</template>

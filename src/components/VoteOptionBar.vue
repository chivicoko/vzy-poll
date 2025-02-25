<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";

  const voteStore = useVoterStore();

  const { voteOptions } = storeToRefs(voteStore);
  const { handleVote, removeVoteOption } = voteStore;
</script>

<template>
  <div v-for="option in voteOptions" :key="option.id" class="w-full shadow-md hover:shadow-xl rounded-md pr-[3px] bg-purple-200 flex items-center gap-1 transition-all duration-300 ease-in-out">
    <button
      @click="handleVote(option.id)" 
      class="w-[89%] relative border-r border-gray-400 cursor-pointer rounded-l-md py-2 px-4"
    >
      <p class="relative z-10 rounded-l-md">{{ option.title }} <span class="text-sm">({{ option.count }} votes - {{ option.percentageValue }}%)</span></p>
    
        <div class="absolute top-0 left-0 rounded-l-md h-full bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] transition-all duration-700 ease-in-out"
        :style="{ width: option.percentageValue + '%' }"></div>
    </button>
    <button @click="() => removeVoteOption(option.id)" class="cursor-pointer size-8 p-2 flex items-center justify-center rounded-full hover:bg-neutral-100 hover:text-red-700 text-xl transition-all duration-300 ease-in-out">
      <img src="/src/assets/trash-01.svg" alt="trash icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";

  const voteStore = useVoterStore();

  const { voteOptions } = storeToRefs(voteStore);
  const { handleVote, removeVoteOption } = voteStore;
</script>

<template>
  <div v-for="option in voteOptions" :key="option.id" class="w-full flex items-center gap-1">
    <button
      @click="handleVote(option.id)" 
      class="w-[88%] relative border cursor-pointer py-2 px-4"
    >
      <p class="relative z-10">{{ option.title }} <span class="text-sm">({{ option.count }} votes - {{ option.percentageValue }}%)</span></p>
    
        <div class="absolute top-0 left-0 h-full bg-green-600 transition-all duration-700 ease-in-out"
        :style="{ width: option.percentageValue + '%' }"></div>
    </button>
    <button @click="() => removeVoteOption(option.id)" class="cursor-pointer size-8 p-2 flex items-center justify-center rounded-full bg-neutral-200 hover:text-red-700 text-xl">&times;</button>
  </div>
</template>

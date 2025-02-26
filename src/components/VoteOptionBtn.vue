<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import { defineProps } from "vue";

  const voteStore = useVoterStore();

  const { handleVote } = voteStore;
  
//   DefineProps: ()
defineProps<{
    option: {
    id: number;
    title: string;
    count: number;
    percentageValue: number;
},
}>();
</script>

<template>
    <button
      @click="handleVote(option.id)" 
      class="w-[89%] relative border-r border-gray-400 cursor-pointer rounded-l-md py-2 px-4"
    >
      <span class="relative z-10 rounded-l-md">{{ option.title }} <span class="text-sm">({{ option.count }} votes - {{ option.percentageValue }}%)</span></span>
    
        <div class="absolute top-0 left-0 rounded-l-md h-full bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] transition-all duration-700 ease-in-out"
        :style="{ width: option.percentageValue + '%' }"></div>
    </button>
</template>

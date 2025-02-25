<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";
  import VoteForm from '@/components/VoteForm.vue';
  import VoteOptionBar from '@/components/VoteOptionBar.vue';

  const voteStore = useVoterStore();

  const { voteOptions, totalVotes, isVoteFormOpen, oneTime } = storeToRefs(voteStore);
  const { toggleOptionClickability, toggleVoteForm, $reset } = voteStore;
</script>

<template>
  <main class="w-full h-full pt-3 pb-12 px-3 flex flex-col items-center justify-center gap-3 overflow-hidden">
    
    <div class="h-full w-80 md:w-96 p-3">
      <div class="py-4 flex flex-col items-center justify-center">
        <h1 class="pb-2 text-center text-3xl font-bold bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent">
          The VZY Poll
        </h1>
        <p>Total Number of Votes: <strong>{{ totalVotes }}</strong></p>
        <div class="flex items-center justify-center gap-6 border-y py-1 w-[70%]">
          <p>One Time Vote? </p>
          <button @click="toggleOptionClickability" :class="`${!oneTime ? 'opacity-50 grayscale-50' : 'opacity-100 grayscale-0'} flex items-center gap-2 cursor-pointer bg-purple-600 py-[4px] px-1 rounded-full`">
            <span :class="`${oneTime ? 'bg-white text-purple-700' : 'bg-transparent text-white'} rounded-full p-1 size-5`"></span>
            <span :class="`${!oneTime ? 'bg-white text-purple-700' : 'bg-transparent text-white'} rounded-full p-1 size-5`"></span>
          </button>
        </div>
      </div>

      <div v-if="voteOptions.length > 0" class="w-full flex flex-col gap-5">
        <VoteOptionBar />
      </div>
      
      <div v-else class="w-full">
        <p class="w-full text-center">No vote options yet!</p>
      </div>

      <div class="pt-8 flex items-center gap-1 md:gap-4 w-full">
        <button @click="$reset" class="rounded-md border border-[#7848a9] hover:border-transparent bg-transparent hover:bg-[#7848a9] text-[#683899] hover:text-white flex-1 px-6 py-2 cursor-pointer text-sm">
          Reset
        </button>
        <button @click="toggleVoteForm" :disabled="isVoteFormOpen === true" :class="`${isVoteFormOpen ? 'cursor-not-allowed opacity-50 grayscale-50' : 'cursor-pointer opacity-100 grayscale-0'} rounded-md bg-[#7848a9] hover:bg-[#9248a9] text-sm text-white flex-1 border whitespace-nowrap px-2 py-2`">
          Add vote option
        </button>
      </div>
    </div>

    <div :class="`${isVoteFormOpen ? 'translate-y-0' : 'translate-y-60'} transition-all duration-700 ease-in-out pt-4`">
      <VoteForm />
    </div>

  </main>
</template>

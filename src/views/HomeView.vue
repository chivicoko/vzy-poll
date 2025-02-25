<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";
  import VoteForm from '@/components/VoteForm.vue';
  import VoteOptionBar from '@/components/VoteOptionBar.vue';

  const voteStore = useVoterStore();

  const { totalVotes, isVoteFormOpen } = storeToRefs(voteStore);
  const { toggleVoteForm, $reset } = voteStore;
</script>

<template>
  <main class="w-full h-full pt-3 pb-12 px-3 flex flex-col items-center justify-center gap-3 overflow-hidden">
    
    <div class="h-full w-80 md:w-96 p-3">
      <div class="py-4 flex flex-col items-center justify-center">
        <h1 class="text-center text-3xl font-bold bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent">
          The Poll
        </h1>
        <p>Total Number of Votes: <strong>{{ totalVotes }}</strong></p>
      </div>
      <div class="w-full flex flex-col gap-5">
        <VoteOptionBar />
      </div>

      <div class="pt-8 flex items-center gap-1 md:gap-4 w-full">
        <button @click="$reset" class="rounded-md border border-[#7848a9] hover:border-transparent bg-transparent hover:bg-[#7848a9] text-[#683899] hover:text-white text-sm flex-1 px-6 py-2 cursor-pointer">
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

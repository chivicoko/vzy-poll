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
  <main class="w-full h-full pt-3 pb-12 px-3 flex flex-col items-center justify-center overflow-hidden">
    
    <div class="h-full w-80 md:w-96 p-3 space-y-2">
      <div class="py-4 flex flex-col items-center justify-center">
        <h2 class="text-center text-3xl font-bold">The Poll</h2>
        <p>Total Number of Votes: <strong>{{ totalVotes }}</strong></p>
      </div>
      <div class="w-full flex flex-col gap-3">
        <VoteOptionBar />
      </div>

      <div class="py-4 flex items-center gap-1 md:gap-4 w-full">
        <button @click="$reset" class="rounded-md border border-purple-700 hover:border-transparent bg-transparent hover:bg-purple-700 text-purple-900 hover:text-white flex-1 px-6 py-2 cursor-pointer">Reset</button>
        <button @click="toggleVoteForm" :disabled="isVoteFormOpen === true" :class="`${isVoteFormOpen ? 'cursor-not-allowed opacity-50 grayscale-50' : 'cursor-pointer opacity-100 grayscale-0'} rounded-md bg-purple-600 hover:bg-purple-700 text-white flex-1 border whitespace-nowrap px-2 py-2`">Add vote option</button>
      </div>
    </div>

    <div :class="`${isVoteFormOpen ? 'translate-y-0' : 'translate-y-60'} transition-all duration-700 ease-in-out`">
    <!-- <div v-if="isVoteFormOpen" class=""> -->
      <VoteForm />
    </div>

  </main>
</template>

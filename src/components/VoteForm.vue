<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";

  const voteStore = useVoterStore();
  const {voteOption, error, } = storeToRefs(voteStore);
  const { handleSubmit, toggleVoteForm } = voteStore;

</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center gap-3 w-80 md:w-96 mx-auto bg-neutral-100 p-4 rounded-2xl">
    <div class="w-full flex items-center gap-1">
      <input type="text" name="voteOption" v-model="voteOption" placeholder="Vote option sample..." class="w-[80%] p-1 rounded-sm border">
      <button type="submit" class="cursor-pointer bg-purple-600 hover:bg-purple-700 py-1 px-4 rounded-sm w-[20%] text-white">Add</button>
    </div>
    <span class="w-full text-red-700 text-sm text-center">{{error}}</span>
    <button type="button" @click="toggleVoteForm" class="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 py-1 px-4 rounded-sm text-white">Close</button>
  </form>
</template>
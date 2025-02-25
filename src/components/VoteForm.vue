<script setup lang="ts">
  import { useVoterStore } from "@/stores/voter";
  import {storeToRefs} from "pinia";

  const voteStore = useVoterStore();
  const {voteOption, error, } = storeToRefs(voteStore);
  const { createVoteOption, toggleVoteForm } = voteStore;

</script>

<template>
  <form @submit.prevent="createVoteOption" class="flex flex-col items-center gap-3 w-80 md:w-96 mx-auto bg-neutral-100 p-4 rounded-2xl">
    <div class="w-full pb-4 flex items-center justify-end">
        <button type="button" @click="toggleVoteForm" class="cursor-pointer size-8 p-2 flex items-center justify-center rounded-full hover:bg-neutral-200 hover:text-red-700 text-2xl transition-all duration-300 ease-in-out">
            &times;
        </button>
    </div>

    <div class="w-full flex items-center gap-1">
        <div class="w-[80%] rounded-md py-[2px] px-[1.6px] bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9]">
            <input type="text" name="voteOption" v-model="voteOption" placeholder="Vote option sample..." class="bg-white w-full py-[6px] px-1 rounded-sm border">
        </div>
        <button type="submit" class="cursor-pointer bg-gradient-to-r from-[#475ac7] hover:from-[#7848a9] via-[#3a71b5] to-[#7848a9] hover:to-[#475ac7] py-[9px] px-4 rounded-md w-[20%] text-white transition-all duration-300 ease-in-out">
            Add
        </button>
    </div>
    <span class="w-full text-red-700 text-sm text-center">{{error}}</span>
  </form>
</template>
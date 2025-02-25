import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVoterStore = defineStore('voter', () => {
  const voteOptions = ref([
    {id: 1, title: 'Option 1', count: 0, percentageValue: 0},
    {id: 2, title: 'Option 2', count: 0, percentageValue: 0},
    {id: 3, title: 'Option 3', count: 0, percentageValue: 0},
    {id: 4, title: 'Option 4', count: 0, percentageValue: 0},
  ]);
  
  const voteOption = ref('');
  const error = ref('');
  const isVoteFormOpen = ref(false);
  const oneTime = ref(false);

  const totalVotes = computed(() => voteOptions.value.reduce((total, option) => total + option.count, 0));

  const handleVote = (id: number) => {
    const voteOption = voteOptions.value.find(voteItem => voteItem.id === id);
    
    if (voteOption) {
      if (oneTime.value && voteOption.count === 1) {
        // console.log(voteOption.count);
        // console.log(oneTime.value);
        return;
      }
      
      voteOption.count++;
      voteOptions.value.forEach(option => {
        option.percentageValue = parseFloat(((option.count / totalVotes.value) * 100).toFixed(2));
      });
    } else {
      error.value = "This vote option does not exist";
    }
    // console.log(voteOptions.value);
  }
  
  const handleSubmit = () => {
    if (voteOption.value.length > 0) {
      const newVoteOptionObj = voteOptions.value.find(vote => vote.title === voteOption.value);

      if (newVoteOptionObj) {
        error.value = 'Vote option already exists';
        // voteOption.value = '';
        return;
      } else {
        voteOptions.value.push({id: Math.random(), title: voteOption.value, count: 0, percentageValue: 0});
        voteOption.value = '';
      }
      error.value = ''
    } else {
      error.value = 'You cannot add empty option.'
    }
  }

  const toggleVoteForm = () => {
    isVoteFormOpen.value = !isVoteFormOpen.value;
  }

  const removeVoteOption = (id: number) => {
    voteOptions.value = voteOptions.value.filter(vote => vote.id !== id);
  }

  const $reset = () => {
    voteOptions.value = [
      {id: 1, title: 'Option 1', count: 0, percentageValue: 0},
      {id: 2, title: 'Option 2', count: 0, percentageValue: 0},
      {id: 3, title: 'Option 3', count: 0, percentageValue: 0},
      {id: 4, title: 'Option 4', count: 0, percentageValue: 0},
    ]
  }

  const toggleOptionClickability = () => {
    if (!oneTime.value) {
      $reset();
      oneTime.value = !oneTime.value
    } else {
      oneTime.value = !oneTime.value
    }
  };

  return { handleVote, voteOptions, oneTime, totalVotes, voteOption, error, isVoteFormOpen, toggleOptionClickability, handleSubmit, toggleVoteForm, removeVoteOption, $reset }
})

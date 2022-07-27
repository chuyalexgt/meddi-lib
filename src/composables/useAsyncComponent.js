import {ref} from 'vue';

const useAsyncComponent = () =>{
  const progress = ref({loading: false, percentage: 0});
  let interval = null;

  const startComputing = () => {
    progress.value.loading = true;
    progress.value.percentage = 0;

    interval = setInterval(() => {
      progress.value.percentage += Math.floor(Math.random() * 8 + 10);
      if (progress.value.percentage >= 90) {
        clearInterval(interval);
      }
    }, 100);
  };

  const stopComputing = () => {
    progress.value.percentage = 100;
    clearInterval(interval);
    setTimeout(() => (progress.value.loading = false), 1000);
  };

  return {startComputing, stopComputing, progress};
};

export default useAsyncComponent;

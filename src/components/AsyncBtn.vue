<template>
   <q-btn
    color="primary"
  >
    {{label}}
    <template v-slot:loading>
      <q-spinner-puff class="on-left" />
      {{loadingLabel}}
    </template>
  </q-btn>
</template>

<script>
// :loading="progress.loading"
// :percentage="progress.percentage"
export default {
  props: {
    label: {
      required: true,
      type: String,
    },
    loadingLabel: {
      type: String,
      default: 'Descargando...',
    },

  },
};
</script>


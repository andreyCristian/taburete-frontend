<template>
  <div class="product-list__view">
    <table-detailed />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { typesProviders as types } from '@/store/modules/providers/types';

import TableDetailed from '@/components/providers/list/tableDetailed.vue';

export default {
  components: {
    TableDetailed,
  },
  methods: {
    ...mapActions(types.PATH, {
      updateProviders: types.actions.UPDATE_PROVIDERS,
    }),
  },
  mounted() {
    this.updateProviders();
  },
};
</script>

<template>
  <table-detailed />
</template>

<script>
import { mapActions } from 'vuex';
import { typesProducts as types } from '@/store/modules/products/types';

import TableDetailed from '@/components/products/list/tableDetailed.vue';

export default {
  components: {
    TableDetailed,
  },
  methods: {
    ...mapActions(types.PATH, {
      updateProducts: types.actions.UPDATE_PRODUCTS,
    }),
  },
  mounted() {
    this.updateProducts();
  },
};
</script>

<template>
  <div class="columns m-0">
    <div class="providers-list--hoverable-option">
      <button class="button" @click="updateItemCatalog(data)">
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button class="button" @click="deleteItemCatalog(data.id)">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="providers-list--item-name column is-three-quarters">
      <div class="has-text-weight-bold is-size-7">Proveedor</div>
      {{ data.nombre_prov }}
    </div>
    <div class="providers-list--item-value column">
      <div class="has-text-weight-bold is-size-7">Costo</div>
      $ {{ data.valor }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { typesProductsXProviders } from '@/store/modules/productXprovider/types';

export default {
  props: {
    data: { type: Object, default: () => {} },
  },
  methods: {
    ...mapActions(typesProductsXProviders.PATH, {
      updateItemCatalog: typesProductsXProviders.actions.UPDATE_ITEM_CATALOG,
      deleteItemCatalog: typesProductsXProviders.actions.DELETE_ITEM_CATALOG,
    }),
  },
};
</script>

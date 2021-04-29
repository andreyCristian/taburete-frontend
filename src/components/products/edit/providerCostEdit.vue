<template>
  <div class="provider-list--item-edit">
    <div class="field field-body is-horizontal">
      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select v-model="catalogItem.proveedor_id">
              <option disabled>Seleccione una opción</option>
              <option v-for="(item, idx) in getListNoRepeatIds()" :key="idx" :value="item.id">
                {{ item.nombre }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <p class="control has-icons-left is-expanded">
        <input
          type="number"
          class="input"
          v-model="catalogItem.valor"
          placeholder="Ingrese el valor"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-weight"></i>
        </span>
      </p>
      <button class="button ml-2" @click="saveItemCatalog()">
        <i class="fas fa-check-circle"></i>
      </button>
      <button class="button ml-2" @click="updateItemCatalog(null)">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

import { typesProviders } from '@/store/modules/providers/types';
import { typesProductsXProviders } from '@/store/modules/productXprovider/types';

export default {
  computed: {
    ...mapState(typesProviders.PATH, ['providers']),
    ...mapState(typesProductsXProviders.PATH, ['costProduct']),
    ...mapGetters(typesProductsXProviders.PATH, {
      providersCatalogId: typesProductsXProviders.getters.GET_ID_PROVIDERS_CATALOG,
    }),
    ...mapGetters(typesProviders.PATH, {
      providersId: typesProviders.getters.GET_ID_PROVIDERS,
    }),
    catalogItem: {
      get() { return this.costProduct; },
      set(val) { this.updateItemCatalog(val); },
    },
  },
  methods: {
    ...mapActions(typesProductsXProviders.PATH, {
      saveItemCatalog: typesProductsXProviders.actions.SAVE_NEW_ITEM,
      updateItemCatalog: typesProductsXProviders.actions.UPDATE_ITEM_CATALOG,
    }),
    getListNoRepeatIds() {
      const avProviders = this.providersId.filter((x) => !this.providersCatalogId.includes(x));
      return this.providers.filter((y) => avProviders.includes(y.id));
    },
  },
};
</script>

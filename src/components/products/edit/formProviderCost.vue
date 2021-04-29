<template>
  <div class="form--edit-product">
    <div class="is-size-5 has-text-weight-semibold mb-5 has-text-right">
      Costo del producto
    </div>
    <div class="edit-product__providers-list">
      <div
        :class="{
          'providers-list--item': !costProduct || (costProduct && costProduct.id != item.id)
        }"
        v-for="(item, idx) in catalog" :key="idx"
      >
        <provider-cost-view
          :data="item"
          @click="createCatalog(idx)"
          v-if="!costProduct || (costProduct && costProduct.id != item.id)"
        />
        <provider-cost-edit
          v-if="costProduct && costProduct.id == item.id"
        />
      </div>
      <provider-cost-edit v-if="costProduct && !costProduct.id" />
      <div
        @click="createCatalog()"
        class="providers-list--add-btn has-text-centered is-size-6"
      >
        <i class="fas fa-plus"></i>
        Registrar nuevo costo del producto
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { typesProductEdit } from '@/store/modules/productsEdit/types';
import { typesProductsXProviders } from '@/store/modules/productXprovider/types';

import ProviderCostView from './providerCostView.vue';
import ProviderCostEdit from './providerCostEdit.vue';

export default {
  computed: {
    ...mapState(typesProductEdit.PATH, ['id']),
    ...mapState(typesProductsXProviders.PATH, ['catalog', 'costProduct']),
  },
  methods: {
    ...mapActions(typesProductsXProviders.PATH, {
      updateItemCatalog: typesProductsXProviders.actions.UPDATE_ITEM_CATALOG,
    }),
    createCatalog(idx = null) {
      if (idx == null) this.updateItemCatalog({ producto_id: this.id });
      else this.updateItemCatalog(this.catalog[idx]);
    },
  },
  components: {
    ProviderCostView,
    ProviderCostEdit,
  },
};
</script>

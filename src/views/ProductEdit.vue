<template>
  <div class="product-edit__view">
    <div class="product-edit__view--header">
      <div class="header--title is-size-4 has-text-weight-bold">
        {{ titlePage }}
      </div>
      <button class="button header--button" @click="saveProduct()">
        Guardar
      </button>
    </div>
    <div class="columns product-edit__view--columns m-0">
      <div class="column">
        <form-product />
      </div>
      <div class="column is-three-fifths">
        <form-provider-cost />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import FormProduct from '@/components/products/edit/formProduct.vue';
import FormProviderCost from '@/components/products/edit/formProviderCost.vue';

import { typesProviders } from '@/store/modules/providers/types';
import { typesConfigurations } from '@/store/modules/configuration/types';
import { typesProductEdit as types } from '@/store/modules/productsEdit/types';
import { typesProductsXProviders } from '@/store/modules/productXprovider/types';

export default {
  components: {
    FormProduct,
    FormProviderCost,
  },
  computed: {
    ...mapState(types.PATH, ['id', 'product']),
    titlePage() {
      if (this.id) return 'Editar producto';
      return 'Crear producto';
    },
  },
  methods: {
    ...mapActions(types.PATH, {
      saveProduct: types.actions.SAVE_PRODUCT,
      updateProduct: types.actions.UPDATE_PRODUCT,
    }),
    ...mapActions(typesProductsXProviders.PATH, {
      updateCatalog: typesProductsXProviders.actions.UPDATE_CATALOG,
    }),
    ...mapActions(typesConfigurations.PATH, {
      updateUnidsType: typesConfigurations.actions.UPDATE_UNIDS_TYPES,
      updateProductType: typesConfigurations.actions.UPDATE_PRODUCTS_TYPES,
    }),
    ...mapActions(typesProviders.PATH, {
      updateProviders: typesProviders.actions.UPDATE_PROVIDERS,
    }),
  },
  created() {
    this.updateProduct(this.$route.params.id);
    this.updateCatalog(this.$route.params.id);

    this.updateUnidsType();
    this.updateProviders();
    this.updateProductType();
  },
};
</script>

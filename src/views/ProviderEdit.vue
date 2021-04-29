<template>
  <div class="provider-edit__view">
    <div class="provider-edit__view--header">
      <div class="header--title is-size-4 has-text-weight-bold">
        {{ titlePage }}
      </div>
      <button class="button header--button" @click="saveProvider()">
        Guardar
      </button>
    </div>
    <div class="columns provider-edit__view--columns m-0">
      <div class="column">
        <form-provider />
      </div>
      <div class="column is-three-fifths">
        <form-add-product />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import FormProvider from '@/components/providers/edit/formProvider.vue';
import FormAddProduct from '@/components/providers/edit/formAddProduct.vue';

import { typesProviders } from '@/store/modules/providers/types';
import { typesConfigurations } from '@/store/modules/configuration/types';
import { typesProviderEdit as types } from '@/store/modules/providerEdit/types';
import { typesProductsXProviders } from '@/store/modules/productXprovider/types';

export default {
  components: {
    FormProvider,
    FormAddProduct,
  },
  computed: {
    ...mapState(types.PATH, ['id', 'product']),
    titlePage() {
      if (this.id) return 'Editar proveedor';
      return 'Crear proveedor';
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

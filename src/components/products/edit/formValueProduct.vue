<template>
  <div class="form-value__product">
      <div class="field">
      <p class="control has-icons-left">
        <input
          type="number"
          class="input"
          v-model="valueProduct"
          placeholder="Ingrese el precio de venta"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-coins"></i>
        </span>
      </p>
    </div>
    <div class="is-size-6 has-text-weight-semibold mb-3">
      Comparativa de precios
    </div>
    <p class="mb-3">
      % Ganancia según PV parametrizado:
      <span class="has-text-weight-semibold"> {{ getPercentPV() }} </span>
    </p>
    <div class="field">
      <div class="control is-expanded">
        <div class="select is-fullwidth">
          <select v-model="providerId">
            <option disabled>Seleccione una opción</option>
            <option v-for="(item, idx) in providers" :key="idx" :value="item.id">
              {{ item.nombre }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { typesProviders } from '@/store/modules/providers/types';
import { typesProductEdit as types } from '@/store/modules/productsEdit/types';
import { typesProductsXProviders } from '@/store/modules/productXprovider/types';

export default {
  data() {
    return {
      providerId: null,
    };
  },
  computed: {
    ...mapState(types.PATH, ['product']),
    ...mapState(typesProviders.PATH, ['providers']),
    ...mapState(typesProductsXProviders.PATH, ['catalog']),
    valueProduct: {
      get() { return this.product.precio_venta; },
      set(val) { this.updateValueProduct(val); },
    },
  },
  methods: {
    ...mapActions(types.PATH, {
      updateValueProduct: types.actions.UPDATE_VALUE_PRODUCT,
    }),
    getPercentPV() {
      if (this.valueProduct && this.providerId) {
        for (let i = 0; i < this.catalog.length; i += 1) {
          if (this.catalog[i].proveedor_id === this.providerId) {
            const percentGained = ((this.valueProduct * 100) / this.catalog[i].valor) - 100;
            return Math.round(percentGained * 100) / 100;
          }
        }
      }

      return '-';
    },
  },
};
</script>

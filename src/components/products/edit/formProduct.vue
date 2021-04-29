<template>
  <div class="form--edit-product">
    <div class="is-size-5 has-text-weight-semibold mb-5">
      Parametrización
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input
          type="text"
          class="input"
          v-model="product.nombre"
          placeholder="Ingrese el nombre del producto"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-beer"></i>
        </span>
      </p>
    </div>
    <div class="field field-body is-horizontal">
      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select v-model="product.tipo_unidad_id">
              <option disabled>Seleccione una opción</option>
              <option v-for="(item, idx) in unidsTypes" :key="idx" :value="item.id">
                {{ item.nombre }} ({{ item.abreviatura}})
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <p class="control has-icons-left is-expanded">
          <input
            type="number"
            class="input"
            v-model="product.cantidad"
            placeholder="Ingrese la cantidad"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-weight"></i>
          </span>
        </p>
      </div>
    </div>
    <div class="field">
      <div class="control is-expanded">
        <div class="select is-fullwidth">
          <select v-model="product.tipo_producto_id">
            <option disabled>Seleccione una opción</option>
            <option v-for="(item, idx) in productTypes" :key="idx" :value="item.id">
              {{ item.nombre }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <hr class="h-divider" />
    <div class="is-size-5 has-text-weight-semibold mb-5">
      Precio de venta
    </div>
    <form-value-product />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { typesProductEdit as types } from '@/store/modules/productsEdit/types';
import { typesConfigurations } from '@/store/modules/configuration/types';

import FormValueProduct from './formValueProduct.vue';

export default {
  components: {
    FormValueProduct,
  },
  computed: {
    ...mapState(typesConfigurations.PATH, ['unidsTypes', 'productTypes']),
    ...mapState(types.PATH, ['product']),
  },
};
</script>

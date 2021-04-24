<template>
  <v-client-table
    :data="products"
    :columns="[
      'id',
      'tipo_producto_id',
      'nombre',
      'tipo_unidad_id',
      'cantidad',
      'precio_venta',
    ]"
    :options="{
      headings: {
        id: 'ID',
        tipo_producto_id: 'Tipo',
        nombre: 'Nombre',
        tipo_unidad_id: 'Unid',
        cantidad: 'Cant',
        precio_venta: 'Precio',
      },
    }"
  />
</template>

<script>
import { mapState } from 'vuex';
import { typesProducts as types } from '@/store/modules/products/types';

export default {
  name: 'tableDetailed',
  computed: {
    ...mapState(types.PATH, ['products']),
  },
};
</script>

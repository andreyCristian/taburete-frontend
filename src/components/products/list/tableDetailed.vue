<template>
  <div class="report-table columns is-multiline pt-5">
    <v-client-table
      class="column report-table__container"
      :data="products"
      :columns="[
        'action',
        'tipo',
        'nombre',
        'unidad',
        'cantidad',
        'precio_venta',
      ]"
      :options="{
        headings: {
          action: 'Acciones',
          tipo: 'Tipo',
          nombre: 'Nombre',
          unidad: 'Unid',
          cantidad: 'Cant',
          precio_venta: 'Precio',
        },
        texts: {
          limit: '',
          filter: '',
          columns: '',
          loading: 'Cargando...',
          filterPlaceholder: 'Buscar',
          noResults: 'No se encontraron resultados',
          count: 'Mostrando de {from} a {to} de {count} filas',
        }
      }"
    >
      <template slot="afterFilterWrapper">
        <span class="title-table">Productos</span>
      </template>
      <template slot="afterFilter">
        <router-link
          class="button is-success"
          :to="{ name: 'edit-product', params: { id: '' } }"
        >
          Crear
        </router-link>
      </template>
      <div class="report-table__action" slot="action" slot-scope="{ row }">
        <div class="dropdown" @mouseleave="toggleDropdown(row.id, false)">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              @click="toggleDropdown(row.id, true)"
              :aria-controls="`dropdown-menu-${ row.id }`"
            >
              <span class="icon is-small">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" :id="`dropdown-menu-${ row.id }`" role="menu">
            <div class="dropdown-content">
              <router-link
                class="dropdown-item"
                :to="{ name: 'edit-product', params: { id: row.id } }"
              >
                <i class="fas fa-truck-loading" />
                Editar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </v-client-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { typesProducts as types } from '@/store/modules/products/types';

export default {
  name: 'tableDetailed',
  computed: {
    ...mapState(types.PATH, ['products']),
  },
  methods: {
    toggleDropdown(rowId, showMenu) {
      const el = document.getElementById(`dropdown-menu-${rowId}`).parentElement;
      if (!showMenu) el.classList.remove('is-active');
      else el.classList.add('is-active');
    },
  },
};
</script>

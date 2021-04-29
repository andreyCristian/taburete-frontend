<template>
  <div class="report-table columns is-multiline pt-5">
    <v-client-table
      class="column report-table__container"
      :data="providers"
      :columns="[
        'action',
        'nombre',
        'ciudad',
        'telefono',
        'direccion',
      ]"
      :options="{
        headings: {
          action: 'Acciones',
          nombre: 'Nombre',
          ciudad: 'Ciudad',
          telefono: 'Teléfono',
          direccion: 'Dirección',
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
      <div class="report-table__list-data" slot="telefono" slot-scope="{ row }">
        <span v-for="(item, idx) in getPhones(row.telefono)" :key="idx">{{ item }}</span>
      </div>
      <div class="report-table__list-data" slot="direccion" slot-scope="{ row }">
        <span v-for="(item, idx) in getAddresses(row.direccion)" :key="idx">{{ item }}</span>
      </div>
      <template slot="afterFilterWrapper">
        <span class="title-table">Proveedores</span>
      </template>
      <template slot="afterFilter">
        <router-link
          class="button is-success"
          :to="{ name: 'edit-provider', params: { id: '' } }"
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
                :to="{ name: 'edit-provider', params: { id: row.id } }"
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
import { typesProviders as types } from '@/store/modules/providers/types';

export default {
  name: 'tableDetailed',
  computed: {
    ...mapState(types.PATH, ['providers']),
  },
  methods: {
    getPhones(phones) {
      if (phones) {
        try {
          const data = JSON.parse(phones);
          return data.length ? data : ['-'];
        } catch (e) {
          console.warn(e);
        }
      }

      return ['-'];
    },
    getAddresses(addresses) {
      if (addresses) {
        try {
          const data = JSON.parse(addresses);
          return data.length ? data : ['-'];
        } catch (e) {
          console.warn(e);
        }
      }

      return ['-'];
    },
    toggleDropdown(rowId, showMenu) {
      const el = document.getElementById(`dropdown-menu-${rowId}`).parentElement;
      if (!showMenu) el.classList.remove('is-active');
      else el.classList.add('is-active');
    },
  },
};
</script>

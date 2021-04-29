<template>
  <aside class="menu sidebar-menu">
    <div class="sidebar-menu__header">
    </div>
    <div class="sidebar-menu__body">
      <ul class="sidebar-menu__body--option-list">
        <li class="option-list--item">
          <router-link
            :to="{ name: 'product' }"
            v-tooltip.right-center="'Productos'"
            class="has-text-centered is-size-3 px-0"
          >
            <i class="fas fa-beer" />
          </router-link>
        </li>
        <li class="option-list--item">
          <router-link
            :to="{ name: 'provider' }"
            v-tooltip.right-center="'Proveedores'"
            class="has-text-centered is-size-3 px-0"
          >
            <i class="fas fa-truck-loading" />
          </router-link>
        </li>
        <li class="option-list--item">
          <router-link
            :to="{ name: 'configuration' }"
            v-tooltip.right-center="'Configuración'"
            class="has-text-centered is-size-3 px-0"
          >
            <i class="fas fa-cogs" />
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

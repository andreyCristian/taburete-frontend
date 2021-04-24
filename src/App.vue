<template>
  <div id="app">
    <navbar-component />
    <sidebar-component />
    <content-component>
      <router-view />
    </content-component>
  </div>
</template>

<script>
import NavbarComponent from './components/grid/Navbar.vue';
import SidebarComponent from './components/grid/Sidebar.vue';
import ContentComponent from './components/grid/Content.vue';

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
  },
};
</script>

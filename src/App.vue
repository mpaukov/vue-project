<template>
  <ApartmentItem />
</template>



    <script>
import ApartmentItem from './components/apartment/ApartmentItem.vue';



export default {
  name: 'App',
  components: {
    ApartmentItem
  },

}
</script>

    <style>
    #app {
      font-family: Montserrat, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    </style>

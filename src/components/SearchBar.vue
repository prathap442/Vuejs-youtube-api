<template>
  <div>
    <input type="text" @input="inputChangeSearchBar"/>
    {{ message }}
  </div>
</template>

<script>
  export default ({
    name: "SearchBar",
    methods: {
      inputChangeSearchBar: function(event){
        console.log(event.target.value);
        this.message = event.target.value.split('').reverse().join('');
      }
    },
    data: function(){
      return { message: "this is the search bar data" }
    }
  })
</script>

<style>

</style>
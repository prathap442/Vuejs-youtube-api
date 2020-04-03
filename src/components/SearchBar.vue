<template>
  <div>
    ---------------
    <br/>
    <input type="text" @input="inputChangeSearchBar"/>
    <br/>
    {{ message }}
    --------------
  </div>
</template>

<script>
  export default ({
    name: "SearchBar",
    methods: {
      inputChangeSearchBar: function(event){
        console.log(event.target.value);
        this.$emit('termChange',event.target.value);
      }
    },
    data: function(){
      return { message: "this is the search bar data" }
    }
  })
</script>

<style>

</style>
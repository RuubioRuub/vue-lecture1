<template>
  
  <div class="col-md-4 mt-4">
      <div class="card">
        <div class="card-body">
          <td>{{ name }}</td>
          <span
            :class="{
              down: price < previousPrice,
              up: price > previousPrice,
            }"
            >{{ currency }} {{ price.toFixed(4) }}</span
          >
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "StockItem",
  props:{
        name: String,
        price: Number,
        previousPrice: Number,
      currency: String,
    }
}
</script>

<style>

</style>
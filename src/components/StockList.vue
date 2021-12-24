<template>
  <h1>Stock list</h1>
  <p>This is just a test component</p>
  <table>
    <thead>
      <th>Name</th>
      <th>Price</th>
    </thead>
    <tbody v-for="stock in stocks" :key="stock.name">
      <td>{{ stock.name }}</td>
      <td
        :class="{
          down: stock.price < stock.previousPrice,
          up: stock.price > stock.previousPrice,
        }"
      >
        {{ stock.currency }} {{ stock.price }}
      </td>
    </tbody>
  </table>
  <button type="button" @click="updatePrices">Update</button>
</template>

<script>
export default {
  name: "StockList",
  data() {
    return {
      stocks: [
        { name: "BMW", price: 61.05, previousPrice: 0, currency: "€" },
        { name: "Caterpillar", price: 146.49, previousPrice: 0, currency: "$" },
        { name: "AMD", price: 76.5, previousPrice: 0, currency: "$" },
        { name: "Gazprom", price: 4.583, previousPrice: 0, currency: "$" },
      ],
      portfolio: [],
    };
  },

  methods: {
    updatePrices() {
      this.stocks.forEach((stock) => {
        stock.previousPrice = stock.price;
        stock.price += (Math.random() - 0.5) * 2;
        if (stock.price < 0) {
          stock.price = 0;
        }
      });
    },
  },
  mounted() {
    setInterval(() => {
      this.updatePrices();
    }, 1000);
  },
};
</script>

<style>
.up {
  color: green;
}
.down {
  color: red;
}
</style>
<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Species</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="character in characters" :key="character.id">
        <td>{{ character.name }}</td>
        <td>{{ character.status }}</td>
        <td>{{ character.species }}</td>
        <td>{{ character.gender }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CharactersTable",
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table {
  width: 99%;
  border: none;
  margin: 0.5rem;
  color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  box-shadow: rgb(0, 0, 0) 0 4px 6px -1px, rgb(0, 0, 0) 0 2px 4px -1px;
}
.table thead th {
  font-weight: bold;
  text-align: left;
  padding: 10px 15px;
  background: rgb(60, 62, 68);
  font-size: 14px;
  border: 1px solid rgb(255, 152, 0);
}
.table tbody td {
  text-align: left;
  background: rgb(60, 62, 68);
  border: 1px solid rgb(255, 152, 0);
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
.table thead tr th:first-child,
.table tbody tr td:first-child {
  border-left: none;
}
.table thead tr th:last-child,
.table tbody tr td:last-child {
  border-right: none;
}
.table tbody tr:nth-child(even) {
  background: #f3f3f3;
}
</style>

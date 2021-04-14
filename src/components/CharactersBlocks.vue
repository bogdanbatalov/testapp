<template>
  <div class="container">
    <div v-for="character in characters" :key="character.id">
      <div class="card">
        <div class="img-box">
          <img :src="character.image" class="img" alt="" />
        </div>
        <div class="text">
          <h2>{{ character.name }}</h2>
          <span>Status: {{ character.status }}</span>
          <span>Species: {{ character.species }}</span>
          <span>Gender: {{ character.gender }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Characters",
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 350px;
  min-height: 180px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: rgb(0, 0, 0) 0 4px 6px -1px, rgb(0, 0, 0) 0 2px 4px -1px;
}

.img-box {
  flex: 2 1 0;
}
.img {
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.text {
  flex: 3 1 0;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
}
</style>

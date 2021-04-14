<template>
  <div id="app">
    <div class="filter-panel">
      <h2>Filters</h2>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter name..."
          v-model="filter.name"
          @input="changeInfiniteId"
        />
      </label>
      <label>
        Status:
        <input
          type="text"
          placeholder="Enter status..."
          v-model="filter.status"
          @input="changeInfiniteId"
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          placeholder="Enter gender..."
          v-model="filter.gender"
          @input="changeInfiniteId"
        />
      </label>
      <div class="checkbox-panel">
        <span>Blocks</span>
        <input type="checkbox" class="toggle" v-model="mode" />
        <span>Table</span>
      </div>
    </div>
    <CharactersBlocks v-if="!mode" :characters="filteredCharacters" />
    <CharactersTable v-if="mode" :characters="filteredCharacters" />
    <infinite-loading
      :identifier="infiniteId"
      @infinite="addCharactersHandler"
    />
    <vue-backTop>
      <div class="backtop">▲</div>
    </vue-backTop>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CharactersBlocks from "@/components/CharactersBlocks";
import CharactersTable from "@/components/CharactersTable";

export default {
  name: "App",
  components: { CharactersBlocks, CharactersTable },
  data() {
    return {
      page: 1,
      mode: false,
      infiniteId: 0,
      info: null,
      filter: {
        name: "",
        status: "",
        gender: "",
      },
    };
  },
  comments: {
    CharactersBlocks,
    CharactersTable,
  },
  computed: {
    ...mapGetters(["getCharacters"]),
    filteredCharacters() {
      return this.getCharacters.filter((character) => {
        for (let key in this.filter) {
          if (this.filter[key]) {
            if (
              !character[key]
                .toLowerCase()
                .includes(this.filter[key].toLowerCase())
            )
              return false;
          }
        }
        return true;
      });
    },
  },
  methods: {
    ...mapActions(["addCharacters"]),
    addCharactersHandler($state) {
      if (!this.info || this.info.next) {
        this.addCharacters({ page: this.page }).then((data) => {
          this.info = data;
          this.page++;
          $state.loaded();
        });
      } else {
        $state.complete();
      }
    },
    changeInfiniteId() {
      this.infiniteId += 1;
    },
  },
};
</script>
<style lang="scss">
.backtop {
  background: rgb(60, 62, 68);
  text-align: center;
  height: 20px;
  width: 20px;
  box-shadow: rgb(0, 0, 0) 0 4px 6px -1px, rgb(0, 0, 0) 0 2px 4px -1px;
  color: rgb(255, 255, 255);
}
.filter-panel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100px;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: rgb(0, 0, 0) 0 4px 6px -1px, rgb(0, 0, 0) 0 2px 4px -1px;

  input[type="text"] {
    margin: 0;
    height: 20px;
    border-radius: 0.5rem;
    border: 1px solid rgb(118, 118, 118);
    padding: 0.5rem 1rem;
    font-weight: 700;
    color: rgb(51, 51, 51);

    &:focus {
      outline: none;
      border: 1px solid rgb(255, 152, 0);
      border-radius: 0.5rem;
    }
  }

  .checkbox-panel {
    display: flex;
    justify-content: space-around;
    align-items: center;

    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;

      &:focus {
        outline: 0;
      }
    }

    .toggle {
      height: 32px;
      width: 52px;
      border-radius: 16px;
      display: inline-block;
      position: relative;
      margin: 0;
      border: 2px solid #474755;
      background: linear-gradient(180deg, #2d2f39 0%, #1f2027 100%);
      transition: all 0.2s ease;

      &:after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
        transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
      }

      &:checked {
        border-color: rgb(255, 152, 0);

        &:after {
          transform: translatex(20px);
        }
      }
    }
  }
}
</style>

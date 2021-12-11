<template>
  <el-form
    @submit.native.prevent="updateFilter"
    class="explore-filter flex-justStart column"
    :model="filterBy"
    size="medium"
  >
    <div class="explore-filter-container flex-justStart">
      <el-dropdown
        placement="bottom"
        class="pointer"
        trigger="click"
        :hide-on-click="false"
        :class="{ 'filter-active': priceActive }"
        ref="dropDownPrice"
      >
        <span class="item fill-parent f-ac-jc">
          {{
            priceActive
              ? `$${filterBy.minPrice} -  $${filterBy.maxPrice}`
              : "Price"
          }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="filter-popper flex column">
          <el-dropdown-item>
            <el-slider
              :value="pricesToPicker"
              @input="pricesFromPicker"
              :show-tooltip="false"
              :step="5"
              range
              :min="0"
              :max="2000"
            >
            </el-slider>
            <el-input
              class="filter-input"
              type="number"
              :max="filterBy.maxPrice"
              :step="5"
              v-model="filterBy.minPrice"
            />
            <el-input
              class="filter-input"
              type="number"
              :debounce="300"
              :min="filterBy.minPrice"
              :step="5"
              v-model="filterBy.maxPrice"
            />
          </el-dropdown-item>
          <div class="explore-filter-btns">
            <el-button @click="clearPrice" class="clear"> Clear </el-button>
            <el-button
              @click="updateFilter"
              native-type="submit"
              class="update"
            >
            <span class="upSpan">
              Update
            </span>
            </el-button>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown
        :class="{ 'filter-active': typeActive }"
        :hide-on-click="false"
        placement="top-start"
        trigger="click"
        ref="dropDownType"
      >
        <span class="item fill-parent f-ac-jc">
          {{ typeActive ? filterBy.type.join(", ") : "Type" }}
           <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="filter-popper flex column">
          <el-dropdown-item>
            <el-checkbox-group class="f-as-jsb column" v-model="filterBy.type">
              <el-checkbox label="Villa" />
              <el-checkbox label="Suite" />
              <el-checkbox label="Appartment" />
            </el-checkbox-group>
          </el-dropdown-item>
          <div class="explore-filter-btns">
            <el-button @click="clearType" class="clear"> Clear </el-button>
            <el-button
              class="update"
              @click="updateFilter"
              native-type="submit"
            >
            <span class="upSpan">
              Update
            </span>
            </el-button>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown
        :class="{ 'filter-active': amenitiesActive }"
        :hide-on-click="false"
        placement="bottom-start"
        trigger="click"
        ref="dropDownAmenities"
      >
        <span class="item fill-parent f-ac-jc">
          {{ amenitiesActive ? filterBy.amenities.join(", ") : "Amenities" }}
           <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="filter-popper flex column">
          <el-dropdown-item>
            <el-checkbox-group class="f-as-jsb" v-model="filterBy.amenities">
              <div class="f-as-jsb column">
                <el-checkbox label="Wifi" />
                <el-checkbox label="Kitchen" />
                <el-checkbox label="Smoking allowed" />
                <el-checkbox label="Pets allowed" />
              </div>
              <div class="f-as-jsb column">
                <el-checkbox label="Self check-in" />
                <el-checkbox label="Air conditioning" />
                <el-checkbox label="TV" />
                <el-checkbox label="Cooking basics" />
              </div>
            </el-checkbox-group>
          </el-dropdown-item>

          <div class="explore-filter-btns">
            <el-button @click="clearAmenities" class="clear"> Clear </el-button>
            <el-button
              class="update"
              @click="updateFilter"
              native-type="submit"
            >
            <span class="upSpan">
              Update
              </span>
            </el-button>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <div class="explore-filter-btns">
      <el-button @click="clearAll" class="clear">
        Clear Filters
      </el-button>
      <el-button @click="updateFilter" class="update">
        Update
      </el-button>
    </div> -->
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        type: [],
        amenities: [],
        minPrice: 0,
        maxPrice: 2000,
      },
    };
  },
  methods: {
    updateFilter() {
      //   this.$store.commit({ type: 'setFilterBy', filterBy: this.filterBy })
      //   this.$refs.dropDown.hide();
      this.$refs.dropDownType.visible = false;
      this.$refs.dropDownPrice.visible = false;
      this.$refs.dropDownAmenities.visible = false;
      this.$emit("filtered", { ...this.filterBy });
    },
    pricesFromPicker(ev) {
      ev
        ? ([this.filterBy.minPrice, this.filterBy.maxPrice] = ev)
        : (this.filterBy.minPrice = this.filterBy.maxPrice = null);
    },
    clearAll() {
      this.filterBy.type = [];
      this.filterBy.amenities = [];
      this.filterBy.minPrice = 0;
      this.filterBy.maxPrice = 2000;
      this.$emit("filtered", { ...this.filterBy });
    },
    clearPrice() {
      this.$refs.dropDownPrice.visible = false;
      this.filterBy.minPrice = 0;
      this.filterBy.maxPrice = 2000;
      this.$emit("filtered", { ...this.filterBy });
    },
    clearType() {
      this.$refs.dropDownType.visible = false;
      this.filterBy.type = [];
      this.$emit("filtered", { ...this.filterBy });
    },
    clearAmenities() {
      this.$refs.dropDownAmenities.visible = false;
      this.filterBy.amenities = [];
      this.$emit("filtered", { ...this.filterBy });
    },
  },
  computed: {
    pricesToPicker() {
      return [this.filterBy.minPrice, this.filterBy.maxPrice];
    },
    priceActive() {
      return this.filterBy.minPrice || this.filterBy.maxPrice < 2000
        ? true
        : false;
    },
    typeActive() {
      return this.filterBy.type.length ? true : false;
    },
    amenitiesActive() {
      return this.filterBy.amenities.length ? true : false;
    },
    getFilterBy() {
      return this.$store.getters.getFilterBy;
    },
  },
  watch: {
    getFilterBy: {
      immediate: true,
      handler() {
        // this.filterBy = JSON.parse(JSON.stringify(this.getFilterBy))
      },
    },
  },
};
</script>

<style>
.upSpan{
  position: relative;
  right: 5px;

}
</style>
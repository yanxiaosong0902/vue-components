<template>
<div class="select_input">
  <input type="text" :placeholder="placeholder" @focus="handlerFocus" @blur="handlerBlur" @change="handlerChange" v-model="current_value">
  <div class="box" v-show="box_show">
    <ul>
      <li v-for="item in options" :key="" @click="selectItem(item)">
        {{item.name}}
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      box_show: false,
      current_value: '',
      current_item: null
    }
  },
  props: {
    options: {
      type: Array
    },
    placeholder: String
  },
  mounted() {

  },
  methods: {
    handlerFocus() {
      this.box_show = true
    },
    handlerBlur() {
      const self = this
      setTimeout( function () {
        self.box_show = false
      }, 100 )
    },
    handlerChange() {
      var _current_item = this.current_item
      this.current_value = _current_item.name
    },
    selectItem( item ) {
      this.current_value = item.name
      this.current_item = item
      this.$emit( 'getChild', this.current_item )
    }
  }
}
</script>
<style lang="scss">
.select_input {
    input {
        font-size: 14px;
        color: #333;
        -webkit-appearance: none;
        border-radius: 4px;
        border: 1px solid #c1c1c1;
        height: 40px;
        width: 180px;
        line-height: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }
    .box {
        display: block;
        position: relative;
        width: 180px;
        border: 1px solid #c1c1c1;
        box-sizing: border-box;
        border-radius: 4px;
        li,
        ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }
        ul > li {
            height: 30px;
            line-height: 30px;
            text-align: left;
            padding: 0 5px;
            cursor: pointer;
            &:hover {
                background-color: skyblue;
            }
        }
        &:before {
            content: '';
            position: absolute;
            width: 4px;
            height: 4px;
            border: 4px solid transparent;
            border-bottom: 4px solid transparent;
        }
    }
}
</style>

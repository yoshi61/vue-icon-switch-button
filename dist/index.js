/*!
 * vue-icon-switch-button v0.0.1
 * (c) yoshi61
 * Released under the ISC License.
 */
'use strict';

var vue = require('vue');

//
//
//
//
//
//
//
//
var script = {
  props: {
    value: {
      type: Boolean,
      "default": false
    },
    icon: {
      type: String,
      "default": 'mdi-heart'
    },
    icon_false: {
      type: String,
      "default": null
    }
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
      this.signalChange(value);
    },
    signalChange: function signalChange(value) {
      this.$emit('change', value);
    }
  },
  computed: {
    iconColor: function iconColor() {
      return this.value ? 'accent' : 'grey';
    },
    iconDisplay: function iconDisplay() {
      if (!this.icon_false) {
        return this.icon;
      }

      return this.value ? this.icon : this.icon_false;
    }
  }
};

const _hoisted_1 = { class: "date-picker" };

function render(_ctx, _cache) {
  const _component_v_icon = vue.resolveComponent("v-icon");
  const _component_v_btn = vue.resolveComponent("v-btn");

  return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
    vue.createVNode(_component_v_btn, {
      text: "",
      icon: "",
      color: _ctx.iconColor,
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.updateValue(!_ctx.value)))
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_v_icon, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.iconDisplay), 1 /* TEXT */)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8 /* PROPS */, ["color"])
  ]))
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-icon-switch-button", script);
  }
};

module.exports = index;

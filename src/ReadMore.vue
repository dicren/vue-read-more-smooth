<template>
  <div
    class="text-overflow"
    :class="{ expanded: expanded, 'no-overflow': inMaxRange }"
  >
    <div ref="to" class="text-overflow-content">
      <slot> </slot>
    </div>

    <div ref="ht" class="hide-text" v-if="!noShadow"></div>

    <div @click="toggle" class="button-read-more" v-if="!noButton">
      <slot name="more" v-bind:open="expanded"
        ><div class="read-more-button" :class="{ 'show-less': !noLess }">
          <span>{{ expanded ? textLess : text }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-read-more-smooth",
  props: {
    lines: {
      type: Number,
      default: 3
    },
    gLines: {
      type: Number,
      default: null
    },
    maxLines: {
      type: Number,
      default: null
    },
    text: {
      type: String,
      default: "Read more"
    },
    textLess: {
      type: String,
      default: "Read less"
    },
    noLess: {
      type: Boolean,
      default: false
    },
    openByDefault: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: null
    },
    noButton: {
      type: Boolean,
      default: false
    },
    noShadow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      readmore: false,
      expanded: false,
      inMaxRange: false,
      localMaxLines: 1
    };
  },
  watch: {
    open(v) {
      if (v !== this.expanded) {
        this.toggle(!v);
      }
    }
  },
  created() {
    if (this.lines && !this.maxLines) {
      this.localMaxLines = this.lines + 1;
    } else {
      this.localMaxLines = this.maxLines - 1;
    }

    if (this.open === true) {
      this.expanded = true;
    }
  },
  mounted() {
    const lh = this.getLineHeight(this.$refs.to);

    if (this.lines) {
      this.$refs.to.style.setProperty("--nlines", this.lines);
    }
    let gLines = 2;
    if (this.gLines) {
      gLines = this.gLines;
    } else if (this.lines > 12) {
      gLines = 4;
    } else if (this.lines > 6) {
      gLines = 3;
    }

    if (this.$refs.ht) {
      this.$refs.ht.style.setProperty("--nlines", gLines);
    }

    if (this.open === true) {
      this.$refs.to.style.setProperty("max-height", "100%");
    }

    setTimeout(() => {
      this.readmore = this.$refs.to.offsetHeight < this.$refs.to.scrollHeight;

      if (this.$refs.to.scrollHeight <= this.localMaxLines * lh) {
        this.inMaxRange = true;
      }

      this.$refs.to.style.setProperty("--lineHeight", lh + "px");
      if (this.$refs.ht) {
        this.$refs.ht.style.setProperty("--lineHeight", lh + "px");
      }

      if (this.open === true) {
        this.$refs.to.style.setProperty(
          "max-height",
          this.$refs.to.scrollHeight + "px"
        );
      }
    });
  },
  methods: {
    toggle(val) {
      const valExp = typeof val === "boolean" ? val : this.expanded;

      if (valExp) {
        if (!this.noLess) {
          this.$refs.to.style.removeProperty("max-height");
          this.expanded = false;
          this.$emit("update:open", false);
        }
      } else {
        this.expanded = true;
        this.$emit("update:open", true);
        this.$refs.to.style.setProperty(
          "max-height",
          this.$refs.to.scrollHeight + "px"
        );
      }
    },
    getLineHeight(element) {
      let temp = document.createElement(element.children[0].nodeName);
      const cpStyle = getComputedStyle(element.children[0]);
      temp.setAttribute(
        "style",
        "position:absolute;left:-999em;margin:0px;padding:0px;font-family:" +
          cpStyle.fontFamily +
          ";font-size:" +
          cpStyle.fontSize
      );
      temp.innerHTML = "test";
      temp = document.body.appendChild(temp);
      const ret = temp.clientHeight;
      temp.parentNode.removeChild(temp);
      return ret;
    }
  }
};
</script>

<style scoped lang="scss">
.text-overflow-content {
  --nlines: 3;
  --lineHeight: 1.5;
  max-height: calc(var(--nlines) * var(--lineHeight));
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.text-overflow {
  position: relative;
}

.no-overflow {
  .text-overflow-content {
    max-height: 100%;
    overflow: visible;
  }
  .hide-text,
  .button-read-more {
    display: none;
  }
}

.read-more-button {
  cursor: pointer;
  display: block;
  position: relative;
  border-top: 1px solid #dbdbdb;
  height: 0.1em;
  margin: 2em auto;
  width: 95%;
  text-align: center;

  span {
    background: #fff;
    color: #b5b5b5;
    display: inline-block;
    font-size: 0.75em;
    padding: 0.4em 0.8em;
    transform: translateY(-1.1em);
    text-align: center;
  }
}

.hide-text {
  --nlines: 6;
  --lineHeight: 1.5;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
  height: calc(var(--nlines) * var(--lineHeight));
  position: absolute;
  //noinspection CssInvalidFunction
  transform: translateY(calc(var(--nlines) * -1 * var(--lineHeight)));
}

.hide-text,
.read-more-button {
  transition: opacity 0.3s ease, margin 0.3s ease;
  opacity: 1;
}

.expanded {
  .hide-text,
  .read-more-button:not(.show-less) {
    opacity: 0;
    margin-top: 0;
    margin-bottom: 0;
    pointer-events: none;
  }
}
</style>

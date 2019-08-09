<template>
  <div id="app">
    <div class="version">
      <div class="demo version-section">
        <a
          href="https://github.com/DiCrEn/vue-read-more-smooth"
          class="github-corner"
          aria-label="View source on GitHub"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style="transform-origin: 130px 106px;"
              class="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              class="octo-body"
            ></path></svg
        ></a>
      </div>
    </div>

    <h1>Vue read more smooth</h1>

    <div class="container">
      <div class="example">
        <h4>Basic example</h4>

        <VueReadMoreSmooth>
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth>
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>No less</h4>

        <VueReadMoreSmooth no-less>
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth no-less>
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>Default expanded</h4>

        <VueReadMoreSmooth :open="true">
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth :open="true">
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>With more lines</h4>

        <VueReadMoreSmooth :lines="5">
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth :lines="5">
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>Big shadow</h4>

        <VueReadMoreSmooth :g-lines="8" :lines="5">
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth :g-lines="8" :lines="5">
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>Custom button text</h4>

        <VueReadMoreSmooth text="More!" text-less="Less!">
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth text="More!" text-less="Less!">
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>Custom maximum lines</h4>
        <h5>
          If your text has less than max-lines, the container acts as a normal
          div. The default value is lines - 1
        </h5>

        <VueReadMoreSmooth :lines="3" :max-lines="10">
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth :lines="3" :max-lines="10">
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>Custom button</h4>

        <VueReadMoreSmooth>
          <p>
            {{ lorem }}
          </p>

          <template v-slot:more="value">
            <div class="button">
              {{ value.open ? "Read less" : "Read more" }}
            </div>
          </template>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth>
  &lt;p>
    {{ lorem }}
  &lt;/p>

  &lt;template v-slot:more="value">
    &lt;div class="button">
      {{ value.open ? "Read less" : "Read more" }}
    &lt;/div>
  &lt;/template>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>

      <div class="example">
        <h4>
          Programmatically open. No button, no shadow.
          <span class="example-click-title" @click="exampleOpen = !exampleOpen"
            >Click here to {{ exampleOpen ? "close" : "open" }}</span
          >
        </h4>

        <VueReadMoreSmooth :open.sync="exampleOpen" no-button no-shadow>
          <p>
            {{ lorem }}
          </p>
        </VueReadMoreSmooth>

        <h5>code</h5>

        <pre><code v-pre class="language-html">
&lt;VueReadMoreSmooth :open.sync="exampleOpen" no-button no-shadow>
  &lt;p>{{ lorem }}&lt;/p>
&lt;/VueReadMoreSmooth>
        </code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import VueReadMoreSmooth from "./ReadMore";
export default {
  name: "app",
  components: { VueReadMoreSmooth },
  data() {
    return {
      lorem:
        "Lorem fistrum adipisicing apetecan elit diodeno torpedo al ataquerl incididunt quietooor fistro. Cillum consequat ese que llega aliqua esse veniam de la pradera. Aliquip aliquip qué dise usteer al ataquerl hasta luego Lucas. Benemeritaar ese hombree condemor ullamco veniam ese hombree fistro no puedor quietooor dolor apetecan. Pupita te voy a borrar el cerito diodenoo te va a hasé pupitaa fistro tempor duis caballo blanco caballo negroorl. Hasta luego Lucas no te digo trigo por no llamarte Rodrigor a wan commodo enim et et nisi nisi. Eiusmod voluptate nostrud exercitation ullamco. Magna incididunt la caidita pupita elit sit amet tiene musho peligro.",
      exampleOpen: false
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding: 1.5rem;
  max-width: 568px;
  margin: 0 auto;
}

p {
  text-align: left;
  margin: 0;
}

.example {
  margin-bottom: 4rem;
  padding: 0.5rem;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

.button {
  width: 100%;
  margin: 0.25rem;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  background-color: #8fa92a;
  color: #fff;
}

.example-click-title {
  font-size: 0.75rem;
  cursor: pointer;
}
</style>

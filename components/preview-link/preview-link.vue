<template>
  <div>
    <h4>Link</h4>
    <div class="margin--top-30">
      <x-link :as="currentAs" :size="currentSize" href="https://stylx.com" target="_blank">{{currentText}}</x-link>
    </div>
    <x-card size="sm" class="margin--top-20">
      <h5>Attributes</h5>
      <div class="margin--top-20">
        <x-tag as="secondary">href</x-tag> <em>*required</em>
        <div class="margin--top-10">
          <p>The URL that you're linking to.</p>
          <p>Also supports the Vue :to="{}" attribute.</p>
        </div>
      </div>
      <div class="margin--top-30">
        <x-tag as="secondary">as</x-tag>
        <div class="margin--top-10">
          <strong>default:</strong> <x-tag>link</x-tag>
        </div>
        <div class="margin--top-10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('standard'); setText();" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('hollow'); setText();" :selected="currentAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setAs('link'); setText();" :selected="currentAs === 'link'">link</x-button>
          <x-button size="sm" @click="setAs('plain'); setText();" :selected="currentAs === 'plain'">plain</x-button>
          <x-button size="sm" @click="setAs('icon'); setIcon();" :selected="currentAs === 'icon'">icon</x-button>
        </div>
      </div>
      <div class="margin--top-30">
        <x-tag as="secondary">size</x-tag>
        <div class="margin--top-10">
          <strong>default: </strong> <x-tag>md</x-tag>
        </div>
        <div class="margin--top-10">
          <strong>values: </strong>
          <x-button size="sm" @click="setSize('sm')" :selected="currentSize === 'sm'">sm</x-button>
          <x-button size="sm" @click="setSize('md')" :selected="currentSize === 'md'">md</x-button>
          <x-button size="sm" @click="setSize('lg')" :selected="currentSize === 'lg'">lg</x-button>
        </div>
      </div>
      <div class="margin--top-30">
        <strong>Other: </strong>
        <p>Use any standard HTML link attributes.</p>
        <x-button as="secondary" size="sm" @click="toggle('target')" :selected="!!optional.target">target</x-button>
        <x-button as="secondary" size="sm" @click="toggle('title')" :selected="!!optional.title">title</x-button>
        <x-button as="secondary" size="sm" @click="toggle('name')" :selected="!!optional.name">name</x-button>
        <x-link size="sm" href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">Other</x-link>
      </div>
    </x-card>
    <div class="margin--top-20">
      <h5>Code</h5>
      <x-code class="margin--top-10">
        &lt;x-link href="" as="{{currentAs}}" size="{{currentSize}}" {{optional.target}} {{optional.title}} {{optional.name}}&gt;{{currentText}}&lt;/x-link&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-link',
  data () {
    return {
      currentAs: 'link',
      currentSize: 'md',
      currentText: 'Sample Link',
      optional: {
        name: '',
        target: '',
        title: ''
      }
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setIcon: function () {
      this.currentText = '👍'
    },
    setText: function () {
      this.currentText = 'Sample Link'
    },
    toggle: function (key) {
      if (this.optional[key]) {
        this.optional[key] = ''
      } else {
        this.optional[key] = key === 'target' ? `${key}="_blank"` : `${key}=""`
      }
    }
  }
}
</script>

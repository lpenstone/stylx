<template>
  <div>
    <h4>Gallery (grid)</h4>
    <div class="margin--top-30">
      <x-grid :as="currentAs" :cols="currentCols" name="prints">
        <x-grid-item>
          <img src="~@/assets/images/sample1.png" alt="">
          <p class="secret">Newfoundland, Canada</p>
        </x-grid-item>
        <x-grid-item>
          <img src="~@/assets/images/sample2.png" alt="">
          <p class="secret">British Columbia, Canada</p>
        </x-grid-item>
        <x-grid-item>
          <img src="~@/assets/images/sample3.png" alt="">
          <p class="secret">Toronto, Ontario, Canada</p>
        </x-grid-item>
        <x-grid-item>
          <img src="~@/assets/images/sample4.png" alt="">
          <p class="secret">Alberta, Canada</p>
        </x-grid-item>
      </x-grid>
    </div>
    <x-card size="sm" class="margin--top-20">
      <h5>Attributes</h5>
      <div class="margin--top-20">
        <x-tag as="secondary">as</x-tag>
        <div class="margin--top-10">
          <strong>default:</strong> <x-tag>standard</x-tag>
        </div>
        <div class="margin--top-10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('gallery')" :selected="currentAs === 'gallery'">gallery</x-button>
        </div>
      </div>
      <div class="margin--top-30">
        <x-tag as="secondary">cols</x-tag>
        <div class="margin--top-10">
          <strong>default: </strong> <x-tag>3</x-tag>
        </div>
        <div class="margin--top-10">
          <strong>values: </strong>
          <x-button size="sm" @click="setCols('1')" :selected="currentCols === '1'">1</x-button>
          <x-button size="sm" @click="setCols('2')" :selected="currentCols === '2'">2</x-button>
          <x-button size="sm" @click="setCols('3')" :selected="currentCols === '3'">3</x-button>
          <x-button size="sm" @click="setCols('4')" :selected="currentCols === '4'">4</x-button>
          <x-button size="sm" @click="setCols('5')" :selected="currentCols === '5'">5</x-button>
          <x-button size="sm" @click="setCols('6')" :selected="currentCols === '6'">6</x-button>
        </div>
      </div>
      <div class="margin--top-20">
        <x-tag as="secondary">name</x-tag> <em>*required</em>
        <p class="margin--top-10">Choose a unique name for your gallery. No spaces, use hyphens.</p>  
      </div>
    </x-card>
    <div class="margin--top-20">
      <h5>Code</h5>
      <x-code class="margin--top-10">
        &lt;x-grid as="{{currentAs}}" cols="{{currentCols}}" name="unique-name"&gt;<br>
        &nbsp;&nbsp;&lt;x-grid-item&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="secret"&gt;Caption #1&lt;/p&gt;<br>
        &nbsp;&nbsp;&lt;/x-grid-item&gt;<br>
        &nbsp;&nbsp;&lt;x-grid-item&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="secret"&gt;Caption #2&lt;/p&gt;<br>
        &nbsp;&nbsp;&lt;/x-grid-item&gt;<br>
        &nbsp;&nbsp;&lt;x-grid-item&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="secret"&gt;Caption #3&lt;/p&gt;<br>
        &nbsp;&nbsp;&lt;/x-grid-item&gt;<br>
        &nbsp;&nbsp;&lt;x-grid-item&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="secret"&gt;Caption #4&lt;/p&gt;<br>
        &nbsp;&nbsp;&lt;/x-grid-item&gt;<br>
        &lt;/x-grid&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-accordion',
  data () {
    return {
      currentAs: 'gallery',
      currentCols: '4'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setCols: function (value) {
      this.currentCols = value
    }
  }
}
</script>

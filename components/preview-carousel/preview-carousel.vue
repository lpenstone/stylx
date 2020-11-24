<template>
  <div>
    <h4>Carousel</h4>
    <div class="margin-top--30">
      <x-element as="center" size="md">
        <x-carousel :as="currentAs">
          <x-carousel-item>
            <img src="~@/assets/images/sample1.png" alt="">
            <p>Newfoundland, Canada</p>
          </x-carousel-item>
          <x-carousel-item>
            <img src="~@/assets/images/sample2.png" alt="">
            <p>British Columbia, Canada</p>
          </x-carousel-item>
          <x-carousel-item>
            <img src="~@/assets/images/sample3.png" alt="">
            <p>Toronto, Ontario, Canada</p>
          </x-carousel-item>
          <x-carousel-item>
            <img src="~@/assets/images/sample4.png" alt="">
            <p>Alberta, Canada</p>
          </x-carousel-item>
        </x-carousel>
      </x-element>
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Attributes</h5>
      <div class="margin-top--20">
        <x-tag as="secondary">as</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>standard</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('standard')" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('cycle')" :selected="currentAs === 'cycle'">cycle</x-button>
          <x-button size="sm" @click="setAs('cycle-900')" :selected="currentAs === 'cycle-900'">cycle-900</x-button>
          <x-button size="sm" @click="setAs('cycle-2500')" :selected="currentAs === 'cycle-2500'">cycle-2500</x-button>
          <x-button size="sm" @click="setAs('cycle-5000')" :selected="currentAs === 'cycle-5000'">cycle-5000</x-button>
          <p class="margin-top--10">Set the length of the cycle with the format <span class="code-text">cycle-[time]</span> where <span class="code-text">[time]</span> can be any value, in milliseconds. (1 second = 1000 milliseconds)</p>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">height</x-tag>
        <p class="margin-top--10">Add a numeric value for a consistent carousel height.</p>  
      </div>
      <div class="margin-top--30">
        <h5>Children</h5>
        <p>Each group within the carousel needs to be wrapped in <span class="code-text">&lt;x-carousel-item&gt;&lt;/x-carousel-item&gt;</span> tags.</p>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-carousel as="{{currentAs}}" height=""&gt;<br>
        &nbsp;&nbsp;&lt;x-carousel-item&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Caption #1&lt;/p&gt;<br>
        &nbsp;&nbsp;&lt;/x-carousel-item&gt;<br>
        &nbsp;&nbsp;&lt;x-carousel-item&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Caption #2&lt;/p&gt;<br>
        &nbsp;&nbsp;&lt;/x-carousel-item&gt;<br>
        &nbsp;&nbsp;&lt;x-carousel-item&gt;<br>
        &lt;/x-carousel&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-carousel',
  data () {
    return {
      currentAs: 'standard'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    }
  }
}
</script>

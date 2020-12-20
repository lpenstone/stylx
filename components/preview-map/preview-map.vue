<template>
  <div>
    <h4>Map (beta)</h4>
    <div class="margin-top--30">
      <x-group size="md">
        <x-map :size="currentSize" url="https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,15z/data=!4m2!3m1!1s0x0:0x8ddca9ee380ef7e0?sa=X&ved=2ahUKEwjXyPHagt3tAhXjguAKHQQlDXQQ_BIwInoECEcQBQ"/>
      </x-group>
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Attributes</h5>
      <div class="margin-top--30">
        <x-tag as="secondary">size</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> <x-tag>md</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setSize('sm')" :selected="currentSize === 'sm'">sm</x-button>
          <x-button size="sm" @click="setSize('md')" :selected="currentSize === 'md'">md</x-button>
          <x-button size="sm" @click="setSize('lg')" :selected="currentSize === 'lg'">lg</x-button>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">url</x-tag> <em>*required</em>
        <p class="margin-top--10"><strong>Note:</strong> Does not alter preview above.</p>
        <x-group size="sm" class="margin-top--10">
          <x-form-input
            label="Add the google maps url."
            name="url-text"
            size="sm"
            @model="setUrl($event)"
            as="text"
            :placeholder="currentUrl"
            required/>
        </x-group>
        <div class="margin-top--20">
          <p>The map is in beta and can be quite finicky. If you're having trouble displaying your map, try the tips below:</p>
          <x-accordion as="minimal" label="How to get your map URL">
            <p>Follow these directions exactly if your map is failing to show up.</p>
            <ol>
              <li>Google the desired location.</li>
              <li>Click the map preview on the right-hand side. This will take you to Google Maps.<br>
                <img src="~@/assets/images/map1.png" alt="">
              </li>
              <li>Copy the url from the Google Maps page:<br>
                <img src="~@/assets/images/map2.png" alt="">
              </li>
              <li>Paste this in as your x-map url value</li>
            </ol>
            <p>If you continue to have issues, you are welcome to embed the map with HTML through the Google "Share" button.</p>
          </x-accordion>
        </div>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-map<span v-if="currentSize !== defaults.size"> size="{{currentSize}}"</span> url="{{currentUrl}}"/&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-map',
  data () {
    return {
      defaults: {
        size: 'md'
      },
      currentSize: 'md',
      currentUrl: 'https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,15z/data=!4m2!3m1!1s0x0:0x8ddca9ee380ef7e0?sa=X&ved=2ahUKEwjXyPHagt3tAhXjguAKHQQlDXQQ_BIwInoECEcQBQ'
    }
  },
  methods: {
    setSize: function (value) {
      this.currentSize = value
    },
    setUrl: function (value) {
      if (!value) {
        this.currentUrl = 'https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,15z/data=!4m2!3m1!1s0x0:0x8ddca9ee380ef7e0?sa=X&ved=2ahUKEwjXyPHagt3tAhXjguAKHQQlDXQQ_BIwInoECEcQBQ'
        return
      }
      this.currentUrl = value
    }
  }
}
</script>

<template>
  <div>
    <h4>Modal</h4>
    <div class="margin-top--30">
      <x-modal
        :size="currentSize"
        :buttonAs="currentButtonAs"
        :buttonSize="currentButtonSize"
        :label="currentLabel"
        :name="currentName">
        <img src="~@/assets/images/sample1.png" alt="">
        <p>Newfoundland, Canada</p>
      </x-modal>
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
          <x-button size="sm" @click="setAs('open')" :selected="currentAs === 'open'">open</x-button>
          <p v-if="currentAs === 'open'" class="margin-top--10">
            Setting this attribute to <span class="code-text">open</span> will open the modal on page visit.
          </p>
        </div>
      </div>
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
      <div class="margin-top--30">
        <x-tag as="secondary">buttonAs</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>link</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setButtonAs('link')" :selected="currentButtonAs === 'link'">link</x-button>
          <x-button size="sm" @click="setButtonAs('link-alt')" :selected="currentButtonAs === 'link-alt'">link-alt</x-button>
          <x-button size="sm" @click="setButtonAs('standard')" :selected="currentButtonAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setButtonAs('hollow')" :selected="currentButtonAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setButtonAs('plain')" :selected="currentButtonAs === 'plain'">plain</x-button>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">buttonSize</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> <x-tag>md</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setButtonSize('sm')" :selected="currentButtonSize === 'sm'">sm</x-button>
          <x-button size="sm" @click="setButtonSize('md')" :selected="currentButtonSize === 'md'">md</x-button>
          <x-button size="sm" @click="setButtonSize('lg')" :selected="currentButtonSize === 'lg'">lg</x-button>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">label</x-tag>
        <x-group size="sm" class="margin-top--10">
          <x-form>
            <x-form-input name="label-text" size="sm" @model="setLabel($event)" as="text" :placeholder="currentLabel"/>
          </x-form>
        </x-group>
        <p class="margin-top--10">The text that will appear on the button to open the modal. If left blank, there will be no button.</p>  
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">name</x-tag> <em>*required</em>
        <x-group size="sm" class="margin-top--10">
          <x-form>
            <x-form-input name="name-text" size="sm" @model="setName($event)" as="text" :placeholder="currentName"/>
          </x-form>
        </x-group>
        <p class="margin-top--10">Choose a unique name for your modal. No spaces, use hyphens.</p>  
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-modal
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>
        <span v-if="currentButtonAs !== defaults.buttonAs">buttonAs="{{currentButtonAs}}"</span>
        <span v-if="currentButtonSize !== defaults.buttonSize">buttonSize="{{currentButtonSize}}"</span>
        name="{{currentName}}"
        label="{{currentLabel}}"&gt;<br>
        &nbsp;&nbsp;&lt;!-- Your content --&gt;<br>
        &lt;/x-modal&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-modal',
  data () {
    return {
      defaults: {
        as: 'standard',
        size: 'md',
        buttonAs: 'link',
        buttonSize: 'md'
      },
      currentAs: 'standard',
      currentSize: 'md',
      currentButtonAs: 'link',
      currentButtonSize: 'md',
      currentLabel: 'Open modal',
      currentName: 'unique-name'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setButtonAs: function (value) {
      this.currentButtonAs = value
    },
    setButtonSize: function (value) {
      this.currentButtonSize = value
    },
    setLabel: function (value) {
      if (!value) {
        this.currentLabel = 'Open modal'
        return
      }
      this.currentLabel = value
    },
    setName: function (value) {
      if (!value) {
        this.currentName = 'unique-name'
        return
      }
      this.currentName = value
    }
  }
}
</script>

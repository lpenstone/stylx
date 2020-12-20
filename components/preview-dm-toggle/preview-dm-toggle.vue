<template>
  <div>
    <h4>Mode toggle (light/dark)</h4>
    <div class="margin-top--30">
      <x-mode-toggle></x-mode-toggle>
    </div>
    <div class="margin-top--20">
      <p>Allow users to choose their mode preference with this toggle.</p>
    </div>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-mode-toggle/&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-dm-toggle',
  data () {
    return {}
  }
}
</script>

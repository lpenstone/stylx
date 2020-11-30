<template>
  <div>
    <x-section>
      <p class="h3 text-align--center">Canadian Destinations</p>
      <x-card class="margin-top--30" size="sm">
        <x-grid cols="2">
          <x-grid-item>
            <x-combo as="circle" size="md">
              <x-combo-img>
                <img src="~@/assets/images/sample1.png" alt="">
              </x-combo-img>
              <x-combo-text>
                <p><strong>Newfoundland</strong></p>
                <p>Discover the beauty of the Canadian East coast. Explore quaint towns or walk along the Ocean.</p>
              </x-combo-text>
            </x-combo>
          </x-grid-item>
          <x-grid-item>
            <x-combo as="circle" size="md">
              <x-combo-img>
                <img src="~@/assets/images/sample2.png" alt="">
              </x-combo-img>
              <x-combo-text>
                <p><strong>British Columbia</strong></p>
                <p>Out on the West side of Canada, there are mountains to climb and forests with thousand year old trees.</p>
              </x-combo-text>
            </x-combo>
          </x-grid-item>
          <x-grid-item>
            <x-combo as="circle" size="md">
              <x-combo-img>
                <img src="~@/assets/images/sample3.png" alt="">
              </x-combo-img>
              <x-combo-text>
                <p><strong>Ontario</strong></p>
                <p>Visit Toronto, Ontario if you're looking for a multicultural hub with some of the best restaurants in the country.</p>
              </x-combo-text>
            </x-combo>
          </x-grid-item>
          <x-grid-item>
            <x-combo as="circle" size="md">
              <x-combo-img>
                <img src="~@/assets/images/sample4.png" alt="">
              </x-combo-img>
              <x-combo-text>
                <p><strong>Alberta</strong></p>
                <p>Offering some of Canada's most picturesque landscapes, Alberta is home to well known gems, such as Banff.</p>
              </x-combo-text>
            </x-combo>
          </x-grid-item>
        </x-grid>
      </x-card>
    </x-section>
  </div>
</template>

<script>
export default {
  name: 'demo',
  layout: 'minimal'
}
</script>

<style lang="stylus" scoped>

</style>


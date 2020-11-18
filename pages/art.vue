<template>
  <div>
    <x-section as="hero">
      <x-content class="text-align-center">
        <h1>Art & Printmaking</h1>
        <p>A blub about this and that whatever</p>
      </x-content>
    </x-section>
    <x-section>
      <x-content>
        <div class="text-align-center margin--top-30">
          <h2 class="h4">Printmaking</h2>
          <h3 class="heading--accent">Linocut, screenpringting, sewing</h3>
          <x-grid as="gallery" cols="4" name="prints">
            <x-grid-item>
              <img src="~@/assets/images/art/print1.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/print2.jpg" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/print3.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/print4.jpg" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/create1.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/create2.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/create3.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/create4.png" alt="">
            </x-grid-item>
          </x-grid>
        </div>
        <div class="text-align-center">
          <h2 class="h4">Animal portraits</h2>
          <h3 class="heading--accent">Watercolour</h3>
          <x-grid as="gallery" name="portraits" cols="4">
            <x-grid-item>
              <img src="~@/assets/images/art/portrait1.png" alt="">
              <p class="name secret">Piece name</p>
              <p class="secret">This is a description of the piece if nessesary</p>
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/portrait2.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/portrait3.png" alt="">
            </x-grid-item>
            <x-grid-item>
              <img src="~@/assets/images/art/portrait4.png" alt="">
            </x-grid-item>
          </x-grid>
        </div>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {}
</script>

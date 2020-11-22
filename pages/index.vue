<template>
  <div>
    <x-section as="hero" id="hero">
      <x-content>
        <div class="margin--top-40">
          <h1>Hello 👋</h1>
          <p>I'm Laura!</p>
          <p>A frontend developer with a wide range of artistic hobbies and interests.</p>
          <p>Currently living in Toronto, Canada 🇨🇦 with my dog Kipper.</p>
        </div>
      </x-content>
    </x-section>
    <x-section>
      <x-content class="text-align-center">
        <x-element as="center">
          <x-carousel items="2" height="240">
            <x-carousel-item>
              <h2 class="margin--bottom-20">Frontend Developer</h2>
              <p>3+ years of industry experience.</p>
              <p>Writing scalable, tested, component-based code.</p>
              <p>Developing UI's with a focus on accessibility and delight.</p>
              <div class="margin--top-10">
                <x-tag class="margin--top-10">HTML</x-tag>
                <x-tag class="margin--top-10">CSS/Stylus</x-tag>
                <x-tag class="margin--top-10">Javascript</x-tag>
                <x-tag class="margin--top-10">Vue.js</x-tag>
                <x-tag class="margin--top-10">Nuxt.js</x-tag>
                <x-tag class="margin--top-10">Web sockets</x-tag>
                <x-tag class="margin--top-10">Cypress</x-tag>
                <x-tag class="margin--top-10">Headless CMS</x-tag>
                <x-tag class="margin--top-10">Webpack</x-tag>
                <x-tag class="margin--top-10">Git</x-tag>
                <x-tag class="margin--top-10">Design systems</x-tag>
              </div>
            </x-carousel-item>
            <x-carousel-item>
              <h2 class="margin--bottom-20">Instructor</h2>
              <p>Delivering weekly lectures to students new to web development</p>
              <p>Fostering an inclusive and casual learning environment</p>
              <div class="margin--top-10">
                <x-tag class="margin--top-10">Development flows</x-tag>
                <x-tag class="margin--top-10">HTML</x-tag>
                <x-tag class="margin--top-10">CSS</x-tag>
                <x-tag class="margin--top-10">Ruby</x-tag>
                <x-tag class="margin--top-10">Sinatra</x-tag>
                <x-tag class="margin--top-10">Active Record</x-tag>
                <x-tag class="margin--top-10">Relational Databases</x-tag>
                <x-tag class="margin--top-10">Deployment</x-tag>
              </div>
            </x-carousel-item>
          </x-carousel>
        </x-element>
      </x-content>
    </x-section>
    <x-section>
      <x-content>
        <div class="row">
          <div class="col-sm-12 col-md-7 margin--bottom-50">
            <h3 class="heading--accent margin--bottom-20">Latest</h3>
            <h4>Experimenting with a component library</h4>
            <p>As an instructor for a web development class, I’ve entered a permanent headspace of asking "can this be simplified"? Mostly this has been in the context of breaking down difficult web concepts into familiar ideas or diagrams. Though, recently I’ve wondered how to simplify the website building process, without having to rely on a drag-and-drop tool. If I made a pre-styled component library, what would be the tradeoffs? If it becomes too flexible, the simplicity would get stripped away. However, if it’s too rigid, all resulting websites would look the same. Could I create a tool with simple syntax that would allow different websites to have a unique look and feel to suit its branding? This is what led me to create Stylx, which has been used to create this website as well.</p>
            <p class="margin--top-20">Website coming soon</p>
            <!-- <x-link href="test">Visit Stylx website</x-link> -->
          </div>
          <div class="col-sm-12 col-md-4 offset-md-1">
            <x-card as="standard" size="sm">
              <h3 class="heading--accent margin--bottom-20">Recent projects</h3>
              <div>
                <h4 class="h5">Stylx</h4>
                <p>A pre-styled component library & design system to help developers create websites (like this one) fast.</p>
                <x-see-more size="sm" label="More details">
                  <p>Customizations are made in the stylx.config file to suit your brand. The components do the rest.</p>
                  <p>Comes with <strong>dark mode, responsive styles, keyboard commands, and accessibility features</strong> out-of-the-box.</p>
                  <div>
                    <x-tag class="margin--top-10">Nuxt.js</x-tag>
                    <x-tag class="margin--top-10">Design systems</x-tag>
                    <x-tag class="margin--top-10">BEM</x-tag>
                    <x-tag class="margin--top-10">Documentation</x-tag>
                  </div>
                  <p class="margin--top-20">Website coming soon</p>
                  <!-- <ul class="margin--top-20">
                    <li><x-link href="https://www.notion.so">Vist docs & download</x-link></li>
                    <li><x-link href="https://www.github.com">Visit on Github</x-link></li>
                  </ul> -->
                </x-see-more>
              </div>
              <div class="margin--top-30">
                <h4 class="h5">Ditto</h4>
                <p>Video conferencing UI wrapper that allows guests to break off into smaller video call rooms, while maintaning context of the whole virtual event.</p>
                <x-see-more size="sm" label="More details">
                  <div>
                    <x-tag class="margin--top-10">Vue.js</x-tag>
                    <x-tag class="margin--top-10">Websockets</x-tag>
                    <x-tag class="margin--top-10">JAM Stack</x-tag>
                  </div>
                  <ul class="margin--top-20">
                    <li><x-link href="https://www.dittoevent.com" target="_blank">Visit webapp</x-link></li>
                  </ul>
                </x-see-more>
              </div>
            </x-card>
          </div>
        </div>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

>>>#hero
  padding-top: 0
  padding-bottom: 0
  height: 90vh
  max-height: 600px

  @media(max-width: 991px)
    padding-top: 40px
    padding-bottom: 60px
    height: auto
    max-height: auto

  .section__inner
    height: 100%

  .container
    height: 100%
    background-image: url('~@/assets/images/index/hero.png')
    background-size: 700px
    background-repeat: no-repeat
    background-position: bottom right
    display: flex
    align-items: center

    @media(max-width: 991px)
      background-image: none

.mode--dark
  #hero
    .container
      background-image: url('~@/assets/images/index/hero-dm.png')

      @media(max-width: 991px)
        background-image: none

</style>

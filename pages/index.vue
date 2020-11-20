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
                <x-tag as="light" class="margin--top-10">HTML</x-tag>
                <x-tag as="light" class="margin--top-10">CSS/Stylus</x-tag>
                <x-tag as="light" class="margin--top-10">Javascript</x-tag>
                <x-tag as="light" class="margin--top-10">Vue.js</x-tag>
                <x-tag as="light" class="margin--top-10">Nuxt.js</x-tag>
                <x-tag as="light" class="margin--top-10">Web sockets</x-tag>
                <x-tag as="light" class="margin--top-10">Cypress</x-tag>
                <x-tag as="light" class="margin--top-10">Headless CMS</x-tag>
                <x-tag as="light" class="margin--top-10">Webpack</x-tag>
                <x-tag as="light" class="margin--top-10">Git</x-tag>
                <x-tag as="light" class="margin--top-10">Design systems</x-tag>
              </div>
            </x-carousel-item>
            <x-carousel-item>
              <h2 class="margin--bottom-20">Instructor</h2>
              <p>Donec vehicula suscipit risus, sed congue purus viverra et.</p>
              <p>Duis sit amet purus vel quam tincidunt bibendum in quis eros.</p>
              <div class="margin--top-10">
                <x-tag as="light" class="margin--top-10">Development flows</x-tag>
                <x-tag as="light" class="margin--top-10">HTML</x-tag>
                <x-tag as="light" class="margin--top-10">CSS</x-tag>
                <x-tag as="light" class="margin--top-10">Ruby</x-tag>
                <x-tag as="light" class="margin--top-10">Sinatra</x-tag>
                <x-tag as="light" class="margin--top-10">Active Record</x-tag>
                <x-tag as="light" class="margin--top-10">Relational Databases</x-tag>
                <x-tag as="light" class="margin--top-10">Deployment</x-tag>
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
            <h4>Something something</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <x-link href="test" class="margin--top-20">Design Systems</x-link> adipiscing elit. Duis sit amet purus vel quam tincidunt bibendum in quis eros. Donec vehicula suscipit risus, sed congue purus viverra et. Nam maximus, massa id ultricies scelerisque, ex libero blandit sapien, non dignissim nibh diam eu lacus. Aliquam ullamcorper rutrum sapien, at egestas lacus. Nulla facilisi. Morbi in orci pharetra, porta nisl non, malesuada purus. Mauris consequat est eget lectus scelerisque, ac vestibulum arcu vulputate. Proin rutrum sem id odio convallis tincidunt. Maecenas vitae metus imperdiet, lobortis odio eget, ultrices lorem.</p>
            <x-link href="test">Read more</x-link>
            <x-accordion label="this is the label" class="margin--top-5">
              <p>This is the content</p>
              <p>whats up sucker</p>
            </x-accordion>
            <x-accordion label="this is the label" class="margin--top-5">
              <p>This is the content</p>
              <p>whats up sucker</p>
            </x-accordion>
            <x-accordion label="this is the label" class="margin--top-5">
              <p>This is the content</p>
              <p>whats up sucker</p>
            </x-accordion>
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
                    <x-tag as="light" class="margin--top-10">Nuxt.js</x-tag>
                    <x-tag as="light" class="margin--top-10">Design systems</x-tag>
                    <x-tag as="light" class="margin--top-10">BEM</x-tag>
                    <x-tag as="light" class="margin--top-10">Documentation</x-tag>
                  </div>
                  <ul class="margin--top-20">
                    <li><x-link href="https://www.notion.so">Vist docs & download</x-link></li>
                    <li><x-link href="https://www.github.com">Visit on Github</x-link></li>
                  </ul>
                </x-see-more>
              </div>
              <div class="margin--top-30">
                <h4 class="h5">Ditto</h4>
                <p>Video conferencing UI wrapper that allows guests to break off into smaller video call rooms, while maintaning context of the whole virtual event.</p>
                <x-see-more size="sm" label="More details">
                  <div>
                    <x-tag as="light" class="margin--top-10">Vue.js</x-tag>
                    <x-tag as="light" class="margin--top-10">Websockets</x-tag>
                    <x-tag as="light" class="margin--top-10">JAM Stack</x-tag>
                  </div>
                  <ul class="margin--top-20">
                    <li>
                      <x-modal name="test" label="See screenshots">
                        Test!
                      </x-modal>
                    </li>
                    <li><x-link href="https://www.dittoevent.com">Visit webapp</x-link></li>
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

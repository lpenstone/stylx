<template>
  <div>
    <x-section as="hero">
      <x-content class="text-align--center">
        <h1>Stylx Documentation</h1>
        <p>Learn how to get Stylx setup in your project.</p>
      </x-content>
    </x-section>
    <x-section>
      <x-content >
        <h2 class="h3">Getting started</h2>
        <p>Learn how to get Stylx setup in your project.</p>
        <p>If you are just starting out and don't have a dev environment set up on your local machine, try <x-link href="#fork">forking the Stylx skeleton</x-link>.
        <div class="margin-top--60">
          <h3 class="h4">Installation with npm</h3>
          <p>Coming soon.</p>
        </div>
        <div class="margin-top--60">
          <h3 class="h4">Use the skeleton project</h3>
          <p>If you are starting from scratch, you can make a copy of the Stylx skeleton project. It includes Stylx and all the necessary tools for you to create a great website right away.</p>
          <p>The Skeleton is built with Nuxt.js. </p>
          <p><x-link as="link-alt" href="https://nuxtjs.org/" target="_blank" icon="external-link-alt">Learn more about Nuxt.js</x-link></p>
          <div class="margin-top--30" id="clone">
            <x-card>
              <h4 class="h5">Clone the Github repo</h4>
              <p>If you have a development environment setup locally, clone the Github repo onto your machine:</p>
              <x-group size="md">
                <div class="margin-top--20">
                  <strong>SSH</strong>
                  <x-code>
                    git clone git@github.com:lpenstone/stylx.git
                  </x-code>
                </div>
                <div class="margin-top--20">
                  <strong>HTTPS</strong>
                  <x-code>
                    git clone https://github.com/lpenstone/stylx.git
                  </x-code>
                </div>
                <div class="margin-top--30">
                  <p>Install the dependencies:</p>
                  <x-code>
                    npm install
                  </x-code>
                </div>
                <div class="margin-top--30">
                  <p>Start the dev server:</p>
                  <x-code>
                    npm run dev
                  </x-code>
                </div>
                <div class="margin-top--30">
                  <h4 class="h5">Building for production</h4>
                  <p>The build command:</p>
                  <x-code>
                    npm run generate
                  </x-code>
                </div>
              </x-group>
            </x-card>
          </div>
          <div class="margin-top--30" id="fork">
            <x-card>
              <h4 class="h5">Fork the Github repo</h4>
              <p>If you are new to development, you can use a cloud editor. These steps use Gitpod, which is connected to Github:</p>
              <x-group size="md">
                <div class="margin-top--20">
                  <ol>
                    <li>If you don't have one already, <x-link href="https://github.com/join" icon="external-link-alt">Create a Github account</x-link></li>
                    <li>Fork the <x-link href="https://github.com/join" icon="external-link-alt">Stylx Skeleton</x-link>. The <x-tag as="#555555"><x-icon size="sm" icon="code-branch"/> Fork</x-tag> button is in the top right corner of the window. You will be redirected to your cloned version of the Stylx repo. Copy the URL of this page.</li>
                    <x-form class="margin-top--10 margin-bottom--20">
                      <x-form-input name="url-text" size="sm" @model="setUrl($event)" as=text label="Paste the URL:" :placeholder="currentUrl"></x-form-input>
                    </x-form>
                    <li>Visit <x-link href="https://github.com/join" icon="external-link-alt">Gitpod</x-link> and sign in by authorizing your Github account.</li>
                    <li>Copy the URL below into your browser window. It will take a few moments to load, but will ultimately open up your workspace.</li>
                    <x-code class="margin-top--10">
                      https://github.io/#{{currentUrl}}
                    </x-code>
                  </ol>
                </div>
              </x-group>
              <div class="margin-top--40 margin-bottom--40">
                <x-card as="shadow">
                  <p class="heading--title">Having trouble?</p>
                  <p>If you were unable to complete steps 1-4 or if the Gitpod workspace seems daunting, you are encouraged to sign up for one of our Workshops that helps new and experienced developers create a beautiful, production-ready website in 4 hours.</p>
                  <div class="margin-top--20 text-align--center">
                    <x-link :to="{name: 'workshop'}" as="standard" icon="code">View Workshop</x-link>
                  </div>
                </x-card>
              </div>
              <x-group size="md" class="margin-top--30">
                <div>
                  <p>Once on Github, you can finish setting up the project.</p>
                  <p>Install the dependencies by running this command in your terminal window:</p>
                  <x-code>
                    npm install
                  </x-code>
                </div>
                <div class="margin-top--30">
                  <p>Also in the terminal, start the dev server:</p>
                  <x-code>
                    npm run dev
                  </x-code>
                </div>
                <div class="margin-top--30">
                  <h4 class="h5">Building for production</h4>
                  <p>The build command:</p>
                  <x-code>
                    npm run generate
                  </x-code>
                </div>
              </x-group>
            </x-card>
          </div>
        </div>

      </x-content>
    </x-section>
    <x-section as="alt">
      <x-content >
        <h2 class="h3">Configuring your project</h2>
        <p>Customize the look of your project with the config file.</p>
      </x-content>
    </x-section>
  </div>
</template>

<script>

export default {
  name: 'docs',
  components: {
  },
  data () {
    return {
      currentUrl: 'https://github.com/[YOUR_GITHUB_USERNAME]/stylx'
    }
  },
  mounted: function () {},
  methods: {
    setUrl: function (value) {
      if (!value) {
        this.currentUrl = 'https://github.com/[YOUR_GITHUB_USERNAME]/stylx'
        return
      }
      this.currentUrl = value
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables'


</style>
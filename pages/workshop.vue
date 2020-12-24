<template>
  <div>
    <x-section as="hero" size="lg" class="section--swoosh-bottom" top>
      <x-content class="text-align--center">
        <x-group as="center" size="md">
          <h1 class="margin-bottom--30">Stylx Workshops</h1>
          <p>Learn how to <strong>build &amp; deploy</strong> a clean, beautiful website with free tools in this 4-hour course. Your website will be ready to share with friends and family by 2pm.</p>
          <p>Workshops are capped at 10 people so each student can get the help they need.</p>
          <!-- <p>View sample websites that have been made with Stylx: ____, _____, _____</p> -->
        </x-group>
      </x-content>
    </x-section>
    <x-section>
      <x-group as="center" size="md">
        <div class="text-align--center">
          <h2 class="h4">Upcoming Workshops</h2>
          <p>Not currently taking registrations.</p>
          <p>The next Workshop will be on January 16, 2021 (Saturday)</p>
        </div>
        <div class="margin-top--40">
          <x-form as="submit" name="notify" netlify action="/workshop">
            <x-form-input as="email" name="email" label="Get notified when registration opens" placeholder="Email" required/>
          </x-form>
        </div>
      </x-group>
    </x-section>
    <x-section>
      <x-content>
        <x-group as="center" size="md">
          <x-card as="shadow">
            <h2 class="h4 text-align--center">Details</h2>
            <div class="margin-top--20">
              <p>
                <strong><x-icon icon="hand-holding-usd" size="sm"/> Cost:</strong>
                $30
              </p>
              <!-- <x-see-more label="About the fee">
                <p>The fee goes towards:</p>
                <ul>
                  <li>Ensuring that the instructors get an industry-standard wage</li>
                  <li>Zoom license fee</li>
                  <li>Compensate the Stylx team so that it can remain as a maintained, open source (free) tool beyond the course.</li>
                  <li>Domain and other fees to keep the Stylx site running</li>
                </ul>
              </x-see-more> -->
              <p class="margin-top--10">
                <strong><x-icon icon="map-marker-alt" size="sm"/> Location:</strong>
                Remote via Zoom
              </p>
              <p class="margin-top--10">
                <strong><x-icon icon="clock" size="sm"/> Time:</strong>
                11am-2pm with 30 minute break for lunch
              </p>
              <p class="margin-top--10">
                <strong><x-icon icon="graduation-cap" size="sm"/> Topics:</strong>
                Getting setup with Github &amp; Gitpod, intro to Nuxt.js, building pages with Stylx, setting up &amp; managing forms, and deploying with Netlify!
              </p>
              <p class="margin-top--10">
                <strong><x-icon icon="chalkboard-teacher" size="sm"/> Instructor(s):</strong>
                Laura P.
                <!-- <x-see-more label="About Laura">
                  <ul>
                    <li>Laura has over 3 years experience as a frontend developer, working on websites seen by 100k+ people daily.</li>
                    <li>She also has over a year's experience teaching at one of Canada's leading tech education companies.</li>
                    <li>(She also built Stylx)</li>
                  </ul>
                </x-see-more> -->
              </p>
              <div class="margin-top--20">
                <x-accordion as="minimal" label="More about the workshop fee">
                  <p>The fee goes towards:</p>
                  <ul>
                    <li>Ensuring that the instructors get an industry-standard wage</li>
                    <li>Zoom license fee</li>
                    <li>Compensate the Stylx team so that it can remain as a maintained, open source (free) tool beyond the course.</li>
                    <li>Domain and other fees to keep the Stylx site running</li>
                  </ul>
                  <p class="margin-top--10">
                    The makers of Stylx believe building websites should be accessible to everyone. If you are unable to pay the $30 door fee, please reach out and we will accommodate.
                  </p>
                </x-accordion>
                <x-accordion as="minimal" label="Learn more about the instructor">
                  <ul>
                    <li>Laura has over 3 years experience as a frontend developer, working on websites seen by 100k+ people daily.</li>
                    <li>She also has over a year's experience teaching at one of Canada's leading tech education companies.</li>
                    <li>(She also built Stylx)</li>
                  </ul>
                </x-accordion>
              </div>
            </div>
          </x-card>
          <div class="margin-top--50">
            <h2 class="h3">Schedule</h2>
            <div class="margin-top--20">
              <div class="margin-top--10">
                <p class="heading--title">Welcome and introduction</p>
                <p class="heading--accent">10-10:10am</p>
                <ul>
                  <li>Brief introductions</li>
                  <li>Overview of what the day will look like</li>
                </ul>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">Getting Setup</p>
                <p class="heading--accent">10:10-10:40am</p>
                <ul>
                  <li>An introduction to our tools for the day (Github, Gitpod, Nuxt.js, Netlify, Stylx)</li>
                  <li>Time for everyone to get their workspace setup and running</li>
                  <li>Demo of the Stylx library and projects built with Stylx</li>
                </ul>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">Building a page</p>
                <p class="heading--accent">10:40-11:10am</p>
                <ul>
                  <li>Learn more about Stylx and how to use it to build our websites quickly!</li>
                  <li>Walkthrough of making an actual page.</li>
                </ul>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">Time to code!</p>
                <p class="heading--accent">11:10am-12:10pm</p>
                <ul>
                  <li>Start building out your pages</li>
                  <li>The instructor will be available to give advice to the group or in a 1-on-1 setting.</li>
                </ul>
              </div>
              <div class="margin-top--30 text-align--center">
                <p class="heading--title">Lunch break</p>
                <p class="heading--accent">12:10 - 12:40pm</p>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">Deployment</p>
                <p class="heading--accent">12:40 - 1pm</p>
                <ul>
                  <li>Learn how to deploy our websites for free with Netlify</li>
                  <li>Time for everyone to deploy their sites</li>
                </ul>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">Forms</p>
                <p class="heading--accent">1-1:50pm</p>
                <ul>
                  <li>Adding Stylx forms and connecting them to Netlify</li>
                  <li>How to manage your forms in Netlify</li>
                  <li>Time for everyone to create a contact form</li>
                </ul>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">Continuing beyond the workshop</p>
                <p class="heading--accent">1:50-2pm</p>
                <ul>
                  <li>What you can do beyond this course. How to customize your pages further with CSS.</li>
                </ul>
              </div>
              <div class="margin-top--30">
                <p class="heading--title">[Optional] Show off projects &amp; keep working</p>
                <p class="heading--accent">2pm+</p>
                <ul>
                  <li>Demo what you've built.</li>
                  <li>The instructor will linger for an additional ~45 minutes to help with questions or issues.</li>
                </ul>
              </div>
            </div>
          </div>
        </x-group>
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

.color-preview
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono, Courier New, sans-serif
  position: relative
  display: inline-block
  line-height: 1.2em
  padding-left: 25px
  margin: 0 10px
  
  &:before
    position: absolute
    display: block
    content: ''
    width: 16px
    height: 16px
    left: 0px
    border: 1px solid $standard-xxdark
    border-radius: 3px

.color-preview--brand
  &:before
    background-color: $brand

.color-preview--secondary
  &:before
    background-color: $secondary

.expand__wrap
  width: 100%
  height: auto
  max-height: 90vh
  position: fixed
  top: 60px
  left: 0px
  z-index: 3
  overflow: visible
  transform: translate(0, -110%)
  transition: transform 0.6s ease-in-out
  display: flex
  justify-content: center

  &.expand__wrap--lowered
    transform: translate(0, -100%)

  &.expand__wrap--expanded
    transform: translate(0, 0)

    .expand__btn
      transform: translate(0, -23px) scaleY(-1)

    .screen
      display: block

  .expand__btn
    position: absolute
    bottom: -22px
    display: block
    width: 46px
    height: 22px
    background-color: white
    border-bottom-right-radius: 22px
    border-bottom-left-radius: 22px
    z-index: 10
    transform: translate(0, 0)
    transition: transform 0.6s ease-in-out
    box-shadow: none

    &:focus
      box-shadow: none

    .expand__caret
      position: absolute 
      top: 7px
      left: 15px
      content: ''
      width: 0
      height: 0
      display: inline-block
      border: 8px solid transparent
      border-top-color: grey

  .screen
    position: absolute 
    top: 0
    left: 0
    width: 100%
    height: 100vh
    display: none

.contents__wrap
  width: 100%
  max-height: 80vh
  overflow: auto
  background-color: white
  border-bottom: 1px solid $brand
</style>
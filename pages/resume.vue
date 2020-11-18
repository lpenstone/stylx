<template>
  <div>
    <x-section as="brand-highlight">
      <x-content class="text-align-center">
        <h1>Laura Penstone</h1>
        <h2 class="heading--title margin--bottom-30">Frontend Developer</h2>
        <p>In sit amet nulla in massa auctor vehicula non in libero.</p>
        <p>Maecenas eu quam at nunc tempor malesuada in sed ligula.</p>
        <x-link as="standard" class="margin--top-20" href="https://linkedin.com">Let's connect</x-link>
      </x-content>
    </x-section>
    <x-section>
      <x-content>
        <div class="row">
          <div class="col-sm-12 col-md-7 margin--bottom-50">
            <h3 class="heading--accent margin--bottom-20">Experience</h3>
            <div>
              <h4 class="heading--title">Software Engineer (web)</h4>
              <h5 class="h6">TunnelBear LLC - <em>November 2017 to Present</em></h5>
              <p></p>
              <ul>
                <li>Introduced Cypress e2e testing coverage.</li>
                <li>Streamlined development workflows with Slack integrations and Github actions.</li>
                <li>Integrated TunnelBear landing pages with a headless CMS to enable the marketing team to edit and create pages independently.</li>
                <li>Rebuilt and refreshed UI of the TunnelBear for Teams web app.</li>
                <li>Completed the execution of a website re-brand.</li>
                <li>Assisted in framework migration from Angular to Vue, reducing technical debt and creating a component-based project.</li>
                <li>Created delightful and interactive animations.</li>
                  <x-link href="https://help.tunnelbear.com/hc/en-us">Typing animation</x-link>,
                  <x-link href="https://www.tunnelbear.com/account/login">Login form animation</x-link>
                <li>Advocate for documentation and knowledge sharing.</li>
              </ul>
            </div>
            <div class="margin--top-30">
              <h4 class="heading--title">Instructor & Mentor</h4>
              <h5 class="h6">Lighthouse Labs - <em>October 2017 to Present</em></h5>
              <ul>
                <li>Delivering weekly lectures to students new to web development. Topics include: Git & development workflow, HTML, CSS, Ruby, Sinatra, Active Record, relational databases, sessions, cookies, and deployment.</li>
                <li>Fostering an inclusive and casual learning environment.</li>
                <li>Providing live demos, encouraging student input and suggestions.</li>
                <li>Putting together breakout activities for students to practice their learnings with free tools sush as Codepen and repl.it.</li>
                <li>Helping students understand error messages and debug their code.</li>
              </ul>
            </div>
            <div class="margin--top-30">
              <h3 class="heading--accent margin--bottom-20">Skills</h3>
              <div class="margin--top-20">
                <h4 class="h6">Tools</h4>
                <x-tag as="light" class="margin--top-10">HTML</x-tag>
                <x-tag as="light" class="margin--top-10">CSS/Stylus</x-tag>
                <x-tag as="light" class="margin--top-10">Javascript</x-tag>
                <x-tag as="light" class="margin--top-10">Vue.js</x-tag>
                <x-tag as="light" class="margin--top-10">Nuxt.js</x-tag>
                <x-tag as="light" class="margin--top-10">Web sockets</x-tag>
                <x-tag as="light" class="margin--top-10">Cypress</x-tag>
                <x-tag as="light" class="margin--top-10">Headless CMS</x-tag>
                <x-tag as="light" class="margin--top-10">Webpack</x-tag>
              </div>
              <div class="margin--top-20">
                <h4 class="h6">Workflow</h4>
                <x-tag as="light" class="margin--top-10">Git</x-tag>
                <x-tag as="light" class="margin--top-10">Netlify</x-tag>
                <x-tag as="light" class="margin--top-10">Figma</x-tag>
                <x-tag as="light" class="margin--top-10">Agile</x-tag>
                <x-tag as="light" class="margin--top-10">Design systems</x-tag>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 offset-md-1">
            <h3 class="heading--accent margin--bottom-20">Recent projects</h3>
            <div>
              <h4 class="h5">Stylx</h4>
              <p>A pre-styled component library & design system to help developers create portfolio websites (like this one) <strong>fast</strong>.</p>
              <p>Customizations are made in the stylx.config file to suit your brand. The components do the rest.</p>
              <p>Comes with <strong>dark mode, mobile responsive, keyboard commands, and accessibility</strong> out-of-the-box.</p>
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
            </div>
            <div class="margin--top-30">
              <h4 class="h5">Ditto</h4>
              <p>Video conferencing UI wrapper that allows guests to break off into smaller video call rooms, while maintaning context of the whole virtual event.</p>
              <div>
                <x-tag as="light" class="margin--top-10">Vue.js</x-tag>
                <x-tag as="light" class="margin--top-10">Websockets</x-tag>
                <x-tag as="light" class="margin--top-10">JAM Stack</x-tag>
              </div>
              <ul class="margin--top-20">
                <li><x-link href="https://www.dittoevent.com">View screenshots</x-link></li>
                <li><x-link href="https://www.dittoevent.com">Visit webapp</x-link></li>
              </ul>
            </div>
          </div>
        </div>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {}
</script>

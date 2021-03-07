import React from "react"
import BuiltWith from "../components/builtWith"
import Layout from "../components/layout"
import Screenshots from "../components/screenshots"
import SEO from "../components/seo"
import "../css/global.css"
import logos from "../images/logos/logos"
import chromeExtAfterGIF from "../images/screenshots/chromeext-after.gif"
import chromeExtBeforeGIF from "../images/screenshots/chromeext-before.gif"
import psFrontEnd1 from "../images/screenshots/peppsnipp/ps-frontend1.png"
import psFrontEnd3 from "../images/screenshots/peppsnipp/ps-frontend3.png"
import psTests from "../images/screenshots/peppsnipp/ps-testscripts.png"




const ProjectsPage = () => (
  <Layout title="My work.">
    <SEO title="Projects" />
    <h3>
      <a href="https://github.com/paxcodes/peppsnipp">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The Pepperplate Snipper
      </a>
    </h3>
    <BuiltWith
      items={[
        {
          href: "https://www.python.org/",
          description: "Python",
          src: logos.python,
        },
        {
          href: "https://docs.pytest.org/en/latest/",
          description: "PyTest",
          src: logos.pytest,
        },
        {
          href: "https://selenium-python.readthedocs.io/",
          description: "Selenium",
          src: logos.selenium,
        },
        {
          href: "https://pypi.org/project/PyQt5/",
          description: "PyQt5",
          src: logos.qt,
        },
      ]}
    />
    <p>
      The Pepperplate Snipper exports recipes in someone's Pepperplate account as
      JSON and/or PNG screenshots through web-scraping.
    </p>
    <Screenshots
      images={[
        {
          src: psTests,
          description: "Tests for the Pepperplate Crawler",
        },
        {
          src: psFrontEnd1,
          description: "Initial process",
        },
        {
          src: psFrontEnd3,
          description: "Exporting recipes",
        },
      ]}
    />

    <h3>
      <a href="https://babysleep.app">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The Baby Schedule Maker
      </a>
    </h3>
    <BuiltWith
      items={[
        {
          href: "https://www.python.org/",
          description: "Python",
          src: logos.python,
        },
        {
          href: "https://docs.pytest.org/en/latest/",
          description: "PyTest",
          src: logos.pytest,
        },
        {
          href: "http://cypress.io/",
          description: "Cypress—for E2E testing",
          src: logos.cypress,
        },
        {
          href: "https://vuejs.org/",
          description: "Vue.js",
          src: logos.vue,
          width: 40,
        },
      ]}
    />
    <p>
      This page provides a sample nap schedule but unlike most—if not all—baby
      schedule generators, the time and length of naps or awake times can be
      adjusted.
    </p>

    <h3>SoundCloud Chrome Extension</h3>
    <BuiltWith
      items={[
        {
          href: "#",
          description: "Javascript",
          src: logos.js,
        },
        {
          href: "https://developer.chrome.com/extensions",
          description: "Chrome extension",
          src: logos.chrome,
        },
      ]}
    />
    <p>
      A private chrome extension that integrates with the SoundCloud API to check
      whether broadcasts are properly uploaded to SoundCloud.
      Before this chrome extension, someone logs into SoundCloud
      and manually checks 30+ broadcasts one by one to make sure it has the correct
      permalink and title. The chrome extension turned a tedious, error-prone task into
      something that can be done accurately in a few seconds.
    </p>
    <Screenshots
      label="animation showing how the extension works"
      images={[
        {
          src: chromeExtBeforeGIF,
          description: "before the broadcasts were uploaded",
        },
        {
          src: chromeExtAfterGIF,
          description: "after the broadcasts were uploaded",
        },
      ]}
    />
  </Layout>
)

export default ProjectsPage

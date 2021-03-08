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
import screenshot_images from "../images/screenshots/screenshots"




const ProjectsPage = () => (
  <Layout title="My work.">
    <SEO title="Projects" />
    <h3>
      Weekly Email Roundup Generator
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
          href: "https://www.pyinstaller.org/",
          description: "PyInstaller",
        },
        {
          href: "https://typer.tiangolo.com/",
          description: "Typer",
          src: logos.typer,
        },
      ]}
    />
    <p>Automatically create and schedule newsletters in Mailchimp using their API; Newsletters contain new articles, videos, and broadcasts published by the organization (collected by parsing RSS feeds); and top posts in the Facebook page (calculated using Facebook’s API). It is designed to run by crontab on CentOS 7 server every Friday at 1am.</p>
    <Screenshots
      images={[
        {
          src: screenshot_images.reg_cli,
          description: "CLI app",
        },
      ]}
    />
    <Screenshots
      images={[
        {
          src: screenshot_images.reg_test_a,
          description: "Tests without real HTTP calls",
        },
        {
          src: screenshot_images.reg_test_b,
          description: "More tests",
        }
      ]}
    />
    <h3>
      Weekly Web Report Generator
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
          href: "https://vuejs.org/",
          description: "Vue.js",
          src: logos.vue,
          width: 40,
        },
      ]}
    />
    <p>Generates a report on the organization’s website, Facebook page, and SoundCloud account activity by integrating with Google Analytics and Facebook API; Data is stored in a JSON file so current week’s data can be compared with last week’s. A web form is provided for the user to enter SoundCloud data not available in their API.</p>
    <Screenshots
      images={[
        {
          src: screenshot_images.wr_tests,
          description: "Tests",
        },
        {
          src: screenshot_images.wr_web,
          description: "Web app",
        }
      ]}
    />
    <h3>Store Switchover</h3>
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
          href: "https://www.pyinstaller.org/",
          description: "PyInstaller",
        },
        {
          href: "https://typer.tiangolo.com/",
          description: "Typer",
          src: logos.typer
        },
      ]}
    />
    <p>
      Automatically adds products to the `Featured Products` category and removes `expired` products on the first day of the month by integrating with the DonorDirect’s StudioEnterprise API; Built with Python (Typer, PyTest, PyInstaller) and designed to run by crontab on CentOS 7 server every first day of the month at midnight.
    </p>
    <Screenshots
      images={[
        {
          src: screenshot_images.ss_help,
          description: "cli",
        }
      ]}
    />
    <h3>
      <a href="https://github.com/paxcodes/peppsnipp/releases">
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
      JSON and/or PNG screenshots through web-scraping &middot;&nbsp;
      <a href="https://github.com/paxcodes/peppsnipp" class="linkRegular">
        GitHub
      </a>
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
      adjusted &middot;&nbsp;
      <a href="https://github.com/paxcodes/babynaps" class="linkRegular">
        GitHub
      </a>
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

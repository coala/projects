---
collaborating_projects:
  - coala
desc: "This project aims to intensify usage of coala by developing well organised web interfaces."
developers_involved: []
difficulty: medium
status: completed
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/12"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/35"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/36"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/37"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/38"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/39"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/40"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/41"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/190"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/191"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/194"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/195"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/196"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/197"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/198"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/199"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/204"
markdown: coala-web.md
mentors:
  - sils
  - fneu
name: "Improve coala website & supporting tools"
requirements:
  - "At least one patch to each of coala-landing and coala-html should be accepted and merged."
  - "The student should be familiar with web design tools & trends."
tags:
  - Web
  - Blog
---

This project aims to increase the user base of coala and provide a web based
interface to use coala on their projects. The project is conceptually built upon
various previous projects (coala-gui, coala-html) which have helped us refine, 
redefine and revisit our GUI approach.

By providing first time users a one click interface to obtain a coafile online
and to run coala at coala.io on their projects by two means, by pasting the code
in the given editor box, and by pasting the link to their GitHub repository in 
a link box. This will help them to get started with coala very easily.

The next thing where the project will help us is that it will provide an
effective bear search mechanism on coala.io by improving the current one, and
this will benefit first time users and developers alike. Its this one tool
where we will type the name of language or aspect on which the user wants to do
analysis, and the appropriate bears would be filtered and displayed.

For the community, having all the web interfaces and UI elements in one place
will provide a great headstart to any web project in the community. Apart from
that, this project will help projects.coala.io become configurable. With these
implemented, those who have their use cases similar to ours will easily be able
to integrate these UI components with just one link, and get a projects page of
their own in seconds.

This project will also create a coafile bot. Users will be able to 'mention' the
bot name in the issues section of their GitHub repositories, and then this bot
will comment back with a coafile for their project. Additionaly it will also
make a Pull Request with that coafile. The prototype can be found
[here](https://github.com/hemangsk/gh-node-bot-prototype) and an example issue
is [here](https://github.com/rahulcode22/Hackerrank/issues/6). 

#### Milestones

##### [PREPARATION/BONDING](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/3)

* Decouple CSS from web projects and create unified library.
* Make code coala compliant in landing-frontend, projects and webServices.
* Add ```analytics``` endpoint in webServices to obtain bear click data.
* Finalize enhanced UI mockups for coala Online and coala-html.

##### [CODING PHASE 1](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/7)

* Add ```--dir``` and ```--sections_only``` option in coala-quickstart.
* Add backend support for coala Online module on webServices.
* Add backend support for GitHub repository linting on webServices.
* Create frontend for coala Online by creating a JS library using directives
from coala-html.

##### [CODING PHASE 2](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/8)

* Add frontend support for GitHub repository linting on coala.io.
* Implement a coafile bot.
* Make projects repo easily configurable so that other orgs can use it.
* Improve coala Online and GH linting UI based on user feedback.

##### [CODING PHASE 3](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/9)

* Add CI on landing-frontend, projects and webServices.
* Enhance coala-html UI and Add searching and filtering functionality.
* Solve [coala-html#34](https://github.com/coala/coala-html/issues/34) and 
[coala-html#33](https://github.com/coala/coala-html/issues/33)
* Revisit code in landing-frontend, projects and webServices and add tests.

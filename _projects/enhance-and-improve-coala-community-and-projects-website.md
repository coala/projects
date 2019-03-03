---
collaborating_projects:
  - coala
desc: "Enhance and Improve the architecture of coala Community and Projects
website with new API Endpoints in webservices."
difficulty: hard
initiatives:
  - GSoC
issues:
  - "https://github.com/coala/projects/issues/691"
markdown: enhance-and-improve-coala-community-and-projects-website.md
mentors:
  - sks444
  - margobra8
name: "Enhance websites architecture"
requirements:
  - "At least one patch accepted to coala community, projects and webservices
  repository."
  - "The applicant should be familiar with AngularJS, Django and Python."
tags:
  - community
  - projects
  - webservices
  - Django
  - AngularJS
  - Python
---
### Overview
The motivation here, is to enhance and improve the websites ([community](https://community.coala.io) and
[projects](https://projects.coala.io)) for the coala community, for newcomers
who wish to start contributing to coala open-source organization and for other
organizations. The hurdle that newcomers mainly come across is the invitation
to the organization before making any contributions, so this project adds a
form for newcomers who wish to join the coala community. Also, to give a
motivation to existing contributors, coala has created a `Promotion form` which
will promote them to `coala Developer` status. To reduce the workload for
maintainers, this project includes the development of form with some
rudimentary checks that will promote the coala-newcomer to coala-developer.
Moreover, this project adds major enhancements to websites that will help
newcomers as well as developers to know more about this community and about
what they have contributed to it.

### Goals

* Add calendar app to show timeline for various events
* Add a one-stop tab for all google forms
* Add contributors geolocation
* Add *Login/SignUp* using GitHub/GitLab
* Add organization teams
* Advanced filters
* Automate welcoming process for newcomer
* Automate newcomer promotion
* Create new database models to manage data
* Ease navigability in websites
* Improve the **UI/UX of websites** to make more interactive
* Motivating newcomers & developers with -
  * modifications in Gamification Leaderboard
  * adding a tab of **GSoC** in projects website
* Contributors profile page

### Milestones

#### PREPARATION/BONDING

* Detailed research on what **new cron jobs** or **API endpoints** need to be
  added in [coala webservices](https://gitlab.com/coala/landing/).
* Discussion on improvements to be made in coala [community website](http://community.coala.io/) and
  [projects website](http://projects.coala.io/)
* Discussion on new models to be created and adding new fields to existing db
  models in coala community website **db models**.
* *Created* and *Merged* a cEP of how the new enhancements will be implemented
  and how will it be beneficial to [coala community](https://github.com/orgs/coala/teams/coala-newcomers).
* Some Pre-GSoC tasks:

  * Create new **[Community Logo](https://github.com/coala/community/issues/55) + Header Image of README.md**
  * FIX Build failure for more than one remote [#235](https://github.com/coala/community/issues/235)
  * FIX Netlify build failure for fork [#232](https://github.com/coala/community/issues/232)

#### CODING PHASE 1

1. Implementation of methods in **coala [webservices](https://gitlab.com/coala/landing)**
2. Implementation of listed enhancements in coala [community website](http://community.coala.io/)

    a. Add information about new endpoints on coala-webserivces homepage.

    b. Add [contributor's Geolocation](https://github.com/coala/community/issues/18)

    c. Add [Organisation Teams](https://github.com/coala/community/issues/12)

    d. Add [Mentors](https://github.com/coala/community/issues/11)

    e. Add **Newcomer Invitation** [form](https://github.com/coala/community/issues/89#issuecomment-468955279)

    f. Add **Promotion to Developer** [form](https://github.com/coala/community/issues/89)

    g. Fetch members contributions details using there respective access tokens

    h. Add more data fields in **Contributors** database model

    i. Add **Login** using GitHub/GitLab

#### CODING PHASE 2

1. Implementation of listed enhancements on coala [community website](http://community.coala.io/)

    a. Display contributor **Statistics** fetching data from Webservices

    b. Leaderboard's on **[Homepage](https://coala-community.netlify.com/)**

    c. Enhancement in **[Gamification Leaderboard](https://coala-community.netlify.com/gamification/)**

2. Implementation of listed enhancements in [projects website](https://projects.coala.io)

    a. Add **[Filters](https://github.com/coala/projects/issues/559)** for searching projects

3. Make Improvements in coala [community website](https://community.coala.io/)

    a. **[Gamification Leaderboard](https://coala-community.netlify.com/gamification/)**

    b. **[UI](https://coala-community.netlify.com/)**
      * [Re-designing of the website](https://github.com/coala/community/issues/44) and making it responsive.
      * [Inactive Issue](https://coala-community.netlify.com/static/inactive-issues.json) and [unassigned issues activity](https://coala-community.netlify.com/static/unassigned-issues.json) web pages shows
        just JSON response, it should be displayed in proper format with some
        extra important information.
      * [Meta-Review data](https://coala-community.netlify.com/meta-review/) web pages should be redesigned to make it look good.

#### CODING PHASE 3

1. Implementation of listed enhancements in [projects website](https://projects.coala.io)

    a. [Improve](https://github.com/coala/projects/issues/394) the projects website for use by other GSoC orgs

    b. Create [tab for all the google forms](https://github.com/coala/projects/issues/284)

    c. Add [posts / calendar app](https://github.com/coala/projects/issues/560) to projects website

    d. Create a tab for **GSoC Students**

2. Implementation of listed enhancements in coala [community website](http://community.coala.io/)

    a. Create a feedback form

    b. Create a database model for feedback entries

    c. Automating the process of assigning issues

3. Make Improvements (and fix bugs) in coala [projects website](https://projects.coala.io/)

    a. **UI**
      * Re-designing of `Index` Page
      * Add UI to reports page that lists all previous year GSOC projects.
      * Improve responsive UI of user reports page.

    b. **Various bug fixes -**
      * [Mark issues - Open, Merged or Closed](https://github.com/coala/projects/issues/298)
      * Remove completed projects or ["Completed" tags](https://github.com/coala/projects/issues/342) for projects

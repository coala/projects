---
collaborating_projects:
  - WeField
  - Hofly.
  - coala
desc: "Make sustainable farming available for everyone."
developers_involved: []
difficulty: medium
initiatives:
  - GSoC
markdown: django-microfarm.md
mentors:
  - Finn-1
  - sils
  - JuliaRahn
name: "django-microfarm"
tags:
  - WeField
  - django
---

WeField e.V.  is an german NGO that takes regenerative and climate actions on
monocultural used / Wasteland.

One of our project fields is a pilot for a self sufficient microfarm in a
regenerative design. The aim of this project is to create a tool that allows
anyone to become a market gardener, given some space.

As a first step, a user will merely sign up and enter the amount of space that
(s)he wants to use. The system will then trigger tasks the user has to do in
order to efficiently farm on his space. Those tasks are triggered by simple
rules and may depend on weather events, date and later also other triggers.

The aim of this project is to build a django project that is interfaced via
the autogenerated django-admin. A proper frontend can be built later and is an
optional goal of this project.

#### Getting Started

If you are interested in working on this project, contact <info@wefield.org>
via email.

#### Milestones

##### BONDING

 * Do a virtual farm tour and 2 workshops on market garden and farm
   organisation with Finn/Julia
 * Define task triggers and database layouts with Finn/Julia
 * Decide on weather API
 * Decide on how to put rule logic into the database

##### CODING PHASE 1

 * Create a basic django project on a new GitLab project
 * Set up CI for tests
 * Set up deployment
 * Implement user system and login
 * Implement weather API
 * Implement daily chore tasks
 * Implement mail notifications

##### CODING PHASE 2

 * Implement watering tasks
 * Implement unit tests for all important tasks
 * Create django admin view and filters for tasks for a specific user
 * (Optional) Create a frontend app for users to use on mobile

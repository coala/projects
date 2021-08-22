---
categories:
  - GSoC
  - 2021
  - Work Report
date: 2021-08-22
student: Prashant Dodiya
organisation: coala
organisation_link: https://coala.io
project: Microfarm For Everybody
project_link: https://summerofcode.withgoogle.com/projects/#6093515215339520
mentors: >
  [Finn Peters](https://github.com/finn-1),
  [KV Garg](https://github.com/kvgarg) &
  [Abhinav Kaushlya](https://github.com/abhishalya)
phase:
  - Bonding: https://gitlab.com/coala/GSoC/gsoc-2021/-/milestones/11
  - Phase 1: https://gitlab.com/coala/GSoC/gsoc-2021/-/milestones/6
  - Phase 2: https://gitlab.com/coala/GSoC/gsoc-2021/-/milestones/10
bio: >
  I am a pre-final year student (expected graduation month - May 2023)
  studying Electronics and Communication Engineering at [Sardar Vallabhbhai
  National Institute of Technology](https://www.svnit.ac.in), Surat, India. I
  have participated in GSoC'21 with [WeField e.V.](https://www.wefield.org)
  under the umbrealla of [coala Association e.V.](https://coala.io) open-source
  organization.

  My project, Microfarm For Everybody (Django-Microfarm), aims to create a
  tool that allows anyone to become a market gardener, given some space. As a
  first step, a user will merely sign up and enter the amount of space that
  they wants to use. The system will then trigger tasks the user has to do to
  farm on his space efficiently. Those tasks are triggered by simple rules and
  may depend on weather events, date, and later also other triggers. Thus,
  anyone can be a market gardener, and this tool will be beneficial and easy
  to use.

social:
  - GitHub:
      - username: pra17dod
      - link: https://github.com/pra17dod
  - GitLab:
      - username: pra17dod
      - link: https://gitlab.com/pra17dod
  - Gitter:
      - username: pra17dod
      - link: https://gitter.im/pra17dod
  - Linkedin:
      - username: Prashant Dodiya
      - link: https://www.linkedin.com/in/pra17dod/
email: pra17dod@gmail.com
blog: https://pra17dod.medium.com/

activity:
   - 1:
      - repo: GSoC/GSoC-2021
      - link: https://gitlab.com/coala/GSoC/gsoc-2021/-/issues/2
      - details: >
          Business Model Canvas of Django Micorfarm

   - 2:
      - repo: GSoC/GSoC-2021
      - link: https://gitlab.com/coala/GSoC/gsoc-2021/-/issues/1
      - details: >
          Deciding project requirements and database handling

   - 3:
      - repo: GSoC/GSoC-2021
      - link: https://gitlab.com/coala/GSoC/gsoc-2021/-/issues/44
      - details: >
          Create Wireframe of the application

   - 4:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/7bb8deed141787a7a5b4c0e1f21bd44ea83955d0
      - details: >
          proposal.md: Add Django Microfarm Proposal

   - 5:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/01238b59ec3ef4b3deaaf40b6fae09d0acde6f99
      - details: >
          Add django-microfarm setup

   - 6:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/aaebe721cbbd372c43fe99003847990976ca5982
      - details: >
          settings.py: Setup environment variables and test-requirements

   - 7:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/60263178b166f715a10ccd420933b3db9852e035
      - details: >
          gitlab-ci.yml: Add CI for `black` linter

   - 8:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/dc55abe5a0c551afad3b7a052ab024f9ca638ef3
      - details: >
          Add User Authentication System

   - 9:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/d7996efdcc1290fec8aa8fc764a2c18dab729eb0
      - details: >
          Add market-garden schemas
   - 10:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/7531640968c065e632e46f7f379919c302e5945b
      - details: >
          Add market-garden cropmap script
   - 11:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/901a03d0a757cc0304b387b44873c599c89d7b25
      - details: >
          Add watering script using Weather and Forecast API
   - 12:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/ffaa59e6cd82166bdb52b62ec3ba70eeff70e5c4
      - details: >
          Implement watering tasks

   - 13:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/fc927e02c443ee733a7ebe9ac432e18d6a3e3bd7
      - details: >
          Create Section and Bed objects

   - 14:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/ee392894b6b3309e8251d7944550be0074eca11c
      - details: >
          Create todo tasks objects

   - 15:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/b8c3051e34d5f614b161a5ec6319a82903c063e3
      - details: >
          Create all the endpoints for the Application
   - 16:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/d805b64bf7f7210308b0451977e5da5175fbf5c1
      - details: >
          Implement APIs Documentation

   - 17:
      - repo: django-microfarm
      - link: https://gitlab.com/coala/django-microfarm/-/commit/461a1111f36720cef10efefd67bc4bfe7046cb87
      - details: >
          Creating single migration file for each model
---

### Microfarm For Everybody

#### Work Done

1. Designed Business Model Canvas
2. Created Wireframe for the application
3. Project setup and CI for `black` linter
4. Setted up a User Authentication System
5. Implemented database and schemas
6. Implemented script to calculate the crop map and compost required
7. Implemented weather and forecast API and script to check if watering is required or not?
8. Implemented watering tasks
9. Implemented daily tasks
10. Setted up `django-signals` and `celery` to automatically create objects such
    Section and Bed objects, periodic tasks and todo objects.
11. Implemented Todo task objects.
12. Implemented APIs fetching the details, rules and tasks of the currently
    logged in user.
13. Added APIs documentation using drf-yasg

#### Challenges

The biggest challenge was writing the codebase from scratch such that it can
become the strong foundation of the application in the future. It took time to
design the project structure and deciding on the schemas of database. I learnt a
lot during the journey, so learning new things also consumed time. The hurdles
were:

1. Designing the database and setting up `JWT(Json Web Token)` Authentication and Social
   Authentication.
2. Writing the script calculating all the Cropmap parameters which should work
   in all the cases.
3. Deciding on Watering Rules and writing the script that will check if we need
   to water our garden or not, on the basis of the rules.
4. Setting up periodic tasks to check hourly weather to update the time when the
   garden was watered by the rain.
5. Using `django-signals`, to automatically create objects and run scripts. For
   e.g., on saving a Market-Garden, a function to calculate cropmap and to
   create sections and beds objects should be executed.
6. Implementing `celery`, to queue up these tasks and also to implement periodic
   tasks.
7. Creating a task objects, such that it holds the status of the task to be
   done and its details.
8. Automatic creation of all the tasks related to the Market-Garden and get the
   list of ToDo for the day.
9. Creating APIs of the application and setting the permission such that every
   API return the objects that are owned by the user and if objects are public
   then they can only view the object.
10. Fetching user details from the `JWT` Access token by decoding it.

#### Work left to be done

Unit tests for the models and functions, deployment of the application
and some improvised documentation are required to be done.

---
categories:
  - GSoC
  - 2021
  - Work Report
date: 2021-08-20
student: Sanchit Gupta
organisation: coala
organisation_link: https://coala.io
project: GitMate for coala
project_link: https://summerofcode.withgoogle.com/projects/#6263057774280704
mentors: >
  [Abhinav Kaushlya](https://github.com/abhishalya),
  [KV Garg](https://github.com/kvgarg) &
  [Vaibhav Singh](https://github.com/vaibhavsingh97)
phase:
  - Bonding
  - Phase 1: https://gitlab.com/coala/GSoC/gsoc-2021/-/milestones/1
  - Phase 2: https://gitlab.com/coala/GSoC/gsoc-2021/-/milestones/5
bio: >
  I am a pre-final year student (expected graduation month - June 2023)
  studying Computer Science and Engineering at Indian Institute of
  Technology (BHU), Varanasi, India. I participated in GSoC'21 with
  [coala](https://coala.io) open-source organization.

  My project, GitMate for coala, aimed to improve and upgrade the GitHub and
  GitLab workflow bot, [GitMate](https://gitmate.coala.io/). The major focus
  of this project was to upgrade dependencies for GitMate and the underlying
  Git abstraction library IGitt, activate GitMate for community use, fix CI/CD
  pipelines, improve and enhance documentation, improve the frontend of the
  GitMate webapp and lastly, introduce new plugins in GitMate.

social:
  - GitHub:
      - username: pilgrim2308
      - link: https://github.com/pilgrim2308
  - GitLab:
      - username: pilgrim2308
      - link: https://gitlab.com/pilgrim2308
  - Gitter:
      - username: pilgrim2308
      - link: https://gitter.im/pilgrim2308
email: sanchitgupta.072@gmail.com
blog: https://sanchitgupta-072.medium.com/
activity:
  - 1:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/c9286fdb2ba6d6cbd9c49a49f6a1fa3af3ffa44b
      - details: >
         cEP-0036: GitMate for coala

  - 2:
      - repo: IGitt
      - link: https://gitlab.com/coala/gitmate/IGitt/-/commit/e02735b6b043709c675a99f84d5d051f47063507
      - details: >
         Upgrade IGitt dependencies

  - 3:
      - repo: IGitt
      - link: https://gitlab.com/coala/gitmate/IGitt/-/commit/8ca84a15a8a450415d41c4148212870a0ed05c11
      - details: >
         Change build config to coala

  - 4:
      - repo: IGitt
      - link: https://gitlab.com/coala/gitmate/IGitt/-/commit/cfd6950282ece5a14f90491b124d03f7455791e1
      - details: >
         Update twine version

  - 5:
      - repo: IGitt
      - link: https://gitlab.com/coala/gitmate/IGitt/-/commit/5597f3861790864b92331b1e78f600b0259435e6
      - details: >
         Add netlify.toml file

  - 6:
      - repo: IGitt
      - link: https://gitlab.com/coala/gitmate/IGitt/-/commit/4fcefb9de52f2e5d28fec7b630213f79f54410ca
      - details: >
         Add cron jobs for all supported python versions

  - 7:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/42dd75f4e5ed90916482d40f2f3cabf897277a22
      - details: >
         Run jobs on all branches
  - 8:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/dca3938810eab2b62149d407392013e0f6b8e707
      - details: >
         Upgrade GitMate to django 3.2

  - 9:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/72993062e19488c04d3b6fcb2d14cf8d09238849
      - details: >
         Run jobs on merge requests

  - 10:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/38ca484c6093326ed874b5e22349f0a99e0c9c33
      - details: >
         Upgrade dependencies for GitMate backend

  - 11:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/80896596bb96c7f20ef62425d2c5786463a0cb3b
      - details: >
         Install IGitt from master branch

  - 12:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/255cd3aecf6e61071e777053b92dcac7fde03c2f
      - details: >
         Add reviewer plugin

  - 13:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/417b9ea8b132b57fdbd0f9577ab0b828dc86a63f
      - details: >
         Add tests for reviewer plugin

  - 14:
      - repo: gitmate-2
      - link: https://gitlab.com/coala/gitmate/gitmate-2/-/commit/76489c85e0a94bdf9b12853fb7e23b7859817ca0
      - details: >
         wsgi.py: Read env vars from .env file

  - 15:
      - repo: gitmate-2-frontend
      - link: https://gitlab.com/coala/gitmate/gitmate-2-frontend/-/commit/ac643810e48e732afb9e354de15eb96392bc684d
      - details: >
         Dockerfile: Update node version

  - 16:
      - repo: gitmate-2-frontend
      - link: https://gitlab.com/coala/gitmate/gitmate-2-frontend/-/commit/08c7e59f66f5ff82abb2a969a5d2047c5b9f6a71
      - details: >
         Remove pricing details

  - 17:
      - repo: gitmate-2-frontend
      - link: https://gitlab.com/coala/gitmate/gitmate-2-frontend/-/commit/a4c81aa607e02a091a6039c5976103b5aee7f313
      - details: >
         Remove calls to '/home' path

  - 18:
      - repo: gitmate-2-frontend
      - link: https://gitlab.com/coala/gitmate/gitmate-2-frontend/-/commit/58035a45c90b909b15483f837972e26a389a5c6b
      - details: >
         Remove german and reference to companies

  - 19:
      - repo: gitmate-2-frontend
      - link: https://gitlab.com/coala/gitmate/gitmate-2-frontend/-/commit/a9a5b4bcb0c5405f28b5efd93f0d28a016504894
      - details: >
         change URLs to coala subdomain

  - 20:
      - repo: gitmate-frontend-react
      - link: https://gitlab.com/coala/gitmate/gitmate-frontend-react/-/commit/ba039a1a53f986fecac0b240b84b1ef861226f43
      - details: >
         Create react app

  - 21:
      - repo: gitmate-frontend-react
      - link: https://gitlab.com/coala/gitmate/gitmate-frontend-react/-/commit/2af3e6918b6c5569ff3ec9f39708b826ec6a536a
      - details: >
         Add repositories page

  - 22:
      - repo: gitmate-frontend-react
      - link: https://gitlab.com/coala/gitmate/gitmate-frontend-react/-/commit/06e31c13f623034859dfcaf4632c4e4a235eeef4
      - details: >
         Repositories.jsx: Add/remove repos

  - 23:
      - repo: gitmate-frontend-react
      - link: https://gitlab.com/coala/gitmate/gitmate-frontend-react/-/commit/cc541f2da8212dc59807457d3a901fc5905e6968
      - details: >
         Plugins.jsx: Add plugins component

---

### GitMate for coala

#### Work Done

1. Upgrades to IGitt:
    1. Upgraded dependencies
    2. Fixed and improved CI/CD pipelines
    3. Deployed IGitt documentation

2. Upgrades to GitMate backend
    1. Upgraded dependencies
    2. Fixed and improved CI/CD pipelines
    3. Added reviewer plugin

3. Gitmate Angular frontend enhancements:
    1. Improved UI
    2. Fixed URLs and routing

4. Created new frontend app in React

#### Challenges

Almost everything went smoothly. This was my first time working on
issues related to deployment, so figuring out how to solve these was
both a challenge and a great learning opportunity. Writing the reviewer
plugin, especially the tests, was also a little tough.

#### Work left to be done

GitMate backend still needs to be deployed so that GitMate can be activated
for the community. Also, documentation still need to be improved.

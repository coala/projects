---
categories:
  - GSoC
  - 2019
  - StatusReport
date: 2019-08-25
student: Akshat Karani
organisation: coala
organisation_link: https://coala.io
project: Next Generation Action System
project_link: https://summerofcode.withgoogle.com/projects/#5450946933424128
tarball: https://github.com/akshatkarani/GSoC/raw/master/akshatkarani.tar.gz
sha256sum: 5460a8042082690c2353f487ff9a6fd0a2d4ade1597baaf7e2b74b1633dcd5f6
mentors: >
  [Abhinav Kaushlya](https://github.com/abhishalya) &
  [Vamshi Krishna](https://github.com/Vamshi99)
phase:
  - Bonding : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/19
  - Phase 1 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/20
  - Phase 2 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/21
  - Phase 3 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/22
bio: >
 I'm a third year student of Computer Science & Engineering at
 Indian Institute of Technology, Dharwad. I am enthusiastic about
 contributing to open source and working on my own projects.
 I participated in GSoC and worked with [coala](https://coala.io) to provide
 support for bears to define their own custom actions. I also provided support
 for bears to suggest multiple patches for a problem.
social:
  - GitHub:
      - username: akshatkarani
      - link: https://github.com/akshatkarani
  - GitLab:
      - username: akshatkarani
      - link: https://gitlab.com/akshatkarani
  - Gitter:
      - username: akshatkarani
      - link: https://gitter.im/akshatkarani
  - Openhub:
      - username: akshatkarani
      - link: https://www.openhub.net/accounts/akshatkarani
email: akshatkarani@gmail.com
blog: http://akshatkarani.github.io/blog
activity:
 - 1:
      - repo: cEP
      - link: https://github.com/coala/cEPs/pull/182/
      - details: >
         cEP for the Project
 - 2:
      - repo: coala
      - link: https://github.com/coala/coala/pull/6039
      - details: >
          Fixing color_letter function in ConsoleInteraction module
 - 3:
      - repo: coala
      - link: https://github.com/coala/coala/pull/6029
      - details: >
         Adding actions attribute to Result class
 - 4:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2927
      - details: >
         EditCommitMessageAction and AddNewlineAction for GitCommitBear
 - 5:
      - repo: coala
      - link: https://github.com/coala/coala/pull/6046
      - details: >
         Tutorial for writing bear specific actions
 - 6:
      - repo: coala
      - link: https://github.com/coala/coala/pull/6057
      - details: >
         Implementing AlternatePatchAction and support for bears to provide multiple patches
 - 7:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2947
      - details: >
         DeleteFileAction for DuplicateFileBear
 - 8:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2948
      - details: >
         Providing multiple patches for FilenameBear
 - 9:
      - repo: coala
      - link: https://github.com/coala/coala/pull/6060
      - details: >
         Update the docs to explain how bears can suggest multiple patches
---

### Next generation action system

#### Work Done

1. Made some changes to `action_dict`, now the key of the dictionary
   is `id` of the object rather than the name of the class.

2. Updated the `color_letter` function in ConsoleInteraction module to display
   the action on console properly.

3. I added two new attributes to `Result` class:

   1. `actions` attribute which is a list of action instances and
      allows bears to define their own actions.

   2. `alternate_diffs` attribute which is a list of dictionaries
      where each element is an alternate patch.

4. Implemented some bears specific actions:

   1. `EditCommitMessageAction` for `GitCommitBear` which opens an editor
      in which user can edit the commit message.

   2. `AddNewlineAction` for `GitCommitBear` which adds a newline between
      shortlog and body of commit message when applied.

   3. `DeleteFileAction` for `DuplicateFileBear` which deletes one of the duplicate files.

5. Wrote a tutorial which describes how to write bear specific actions.

6. Updated FilenameBear to provide multiple patches whenever it cannot guess the naming convention to use.

7. Updated the docs to briefly explain how bears can suggest multiple patches.

#### Challenges

It was a great learning experience overall, and I did face a few problems
throughout but I was able to tackle/work around them with the help of my mentors.
The first problem I faced was allowing bears to define their own actions without
affecting the default actions. There were many possible options to implement
this and selecting one which would be feasible and which would work was a difficult task.
Also allowing multiple patches without making huge changes in existing
framework was challenging. Writing tests for some of the actions implemented
which involved deleting a file or amending commit messages was tricky.

#### Work to be done

1. Main advantage after this project is that now many useful custom actions can
   be implemented for bears. Identifying where custom actions can be useful
   and implementing them will be a community driven process.
2. Another thing which can be done is extending some of the existing bears to
   provide multiple patches.
3. Also allowing actions to be initialized with a custom description would be
   really helpful. Currently actions have a default description and with
   feature like above it will be possible to display an action specific description
   which would be helpful to the user particularly incase of AlternatePatchAction,
   which is currently displayed as `Show AlternatePatch`.

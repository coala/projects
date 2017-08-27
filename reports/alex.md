---
layout: report
permalink: /GSoC/2017/StatusReport/AlexMaxim
student: Alexandru-Sorin Maxim
organisation: coala
organisation_link : https://coala.io
project: Improve the coala CLI
project_link: https://summerofcode.withgoogle.com/projects/#4940869170888704
tarball: https://rawgit.com/Nosferatul/GSoCReport/master/Nosferatul_coala.tar
mentors: >
 [Adrian Zatreanu](https://github.com/Adrianzatreanu) & [Muhammad Kaisar Arkhan](https://github.com/yukiisbored)
phase:
 - Bonding : https://gitlab.com/coala/GSoC-2017/milestones/16
 - Phase 1 : https://gitlab.com/coala/GSoC-2017/milestones/17
 - Phase 2 : https://gitlab.com/coala/GSoC-2017/milestones/18
 - Phase 3 : https://gitlab.com/coala/GSoC-2017/milestones/19
bio: >
 I'm a 3rd year student of Computer Science & Engineering at Politehnica University of Bucharest. I participated in GSoC and worked with [coala](https://coala.io) to improve coala CLI experience. Most of the people who use a CLI program do not read the whole output, only a small part of it. Also, a large output from a command could tire them and could make them stop using our application. Remove the redundant information, keeping only the necessary information.  
social:
 - GitHub:
   - username: Nosferatul
   - link: https://github.com/Nosferatul
 - GitLab:
   - username: Nosferatul
   - link: https://gitlab.com/Nosferatul
 - Gitter:
   - username: Nosferatul
   - link: https://gitter.im/Nosferatul
email: alexandrus.maxim@gmail.com
blog: https://gsocsite.wordpress.com/category/gsoc/
activity:
 - 0:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4369/commits/d75d10ab7bb9be4abe7d14f201afc748fb1b96d6
   - details: >
      Change output for user.
 - 1:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4370/commits/3e590f5e34f019103f98f0ea9b32c94d01e05472
   - details: >
      Change the coafile warning/output.
 - 2:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4390/commits/2f0f3116aea7e2933322d4cc2a44a9fef61981a4
   - details: >
       Change the actions name.
 - 3:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4390/commits/8a25983187966a60a810756c200ece1d9bb59607
   - details: Change the input
 - 4:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4420/commits/0eb0be9e7bf4765dd829d0aeb5a6918fb00d05e1
   - details: Fix the ouput
 - 5:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4429/commits/45a7369dfcc7af78c0844f0203a1deb1a17a3c75
   - details: Add Chain Action
 - 6:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4462/commits/65feb308706c77ca5aac10123f757600cc639c1a
   - details: Add apply-single-action
 - 7:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4481/commits/149d59d28318954d4035c7e8f639cc344af061c0
   - details: Add Show Applied Action
 - 8:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4603/commits/0911078532a49c42afb06effec750be24a7b4139
   - details: Make Chain Action default
 - 9:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4626/commits/360a6245d88260631c8a9019de026e835e43df3d
   - details: Add line number for the diff ouput
 - 10:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4504/commits/fbb71a11b7475c9a1c61659f43ad44450104664a
   - details: Add docs for apply single action
 - 11:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4647/commits/530bcd777fadf7d120ceb2611e4e5f92edbe436b
   - details: Rename DoNothinActionTest.py
 - 12:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4626/commits/2bd16a5d44d93edc211da3faf4cb17e93296cd70
   - details: Change Severity line from the ouput
 - 13:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4627/commits/377585d14cac6522546c9dc0a94f2890304eb7a5
   - details: Add line number inside “[ ]” in diffs
 - 14:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4627/commits/d03303c00d5e6afa543cb173288b3908a8945428
   - details: Fix color from the ouput
 - 15:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4629/commits/a6c376f054da150e2d29a90997a03ddd3ec7dba0
   - details: Add Do (N)othing action
 - 16:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4638/commits/f43bd5e7cb908c5d3a7b384924bc5f282a2e625a
   - details: Fix --no-color flag
 - 17:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4634/commits/25e019cdd944532f969d5cf1079afd7d62f41e19
   - details: Add Generate Patches Action
 - 18:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4600/commits/693592393a3ca35cedfccaec260ba1ba6a4db0cf
   - details: Add "Executing section <section>..."

---

### Improve the coala CLI


#### Work Done

With this project we’ve tried to improve the user experience of coala in CLI. Many hours were spend trying to improve the design of it and we hope it’s better. Of course, anything can be improved over and over again.
Chain Actions is right now by default. You can now apply multiple actions in a single input
Apply single actions was added. You can use flag -A and choose an action to apply for every result
Show applied actions print the latest actions that a user has done in a run of coala
Generate patch action generates a patch for a file based on bears depending on what language did you used in the file.

<br>

I worked just in coala repository from github. Most of the work was done in ConsoleInteraction.py file were I did major changes. Other changes were made by adding new files for every new action and tests for all of them.

<br>

Now, `--no-color` flag works properly. This was an old bug that we solved.

<br>

No more background green color when coala shows the results and the diffs.

#### Challenges

It was a great learning experience overall. I think that the most dificult think was to have 100% coverage from tests. Also I tried to wrote good, clean code that new people could understand it. The most interesting part was when I tried to think the needs of the user so I can write useful new actions. Thanks to both of my mentors [Adrian Zatreanu](https://github.com/Adrianzatreanu) & [Muhammad Kaisar Arkhan](https://github.com/yukiisbored). Thank you for everything!


#### Work to be done

I think we should have something like a special day, every release, when we try to receive feedback from users. Make a list of good questions
that we can ask them.

<br>

I think the design of the ouput can be improved more for a better experience. New actions can be added based on the needs of our users and
actions that are already implemented can be improved to cover the interests of the users.

<br>

---
layout: report
permalink: /GSoC/2017/StatusReport/adhikasp
student: Adhika Setya Pramudita
organisation: coala
organisation_link : https://coala.io
project: Implement Aspect
project_link: https://summerofcode.withgoogle.com/projects/#5847850440196096
tarball: https://rawgit.com/adhikasp/GSoC-2017-Report/master/adhikasp_tarball.tar.gz
mentors: >
 [John Vandenberg](http://github.com/jayvdb),
 [Stefan Zimmermann](https://github.com/userzimmermann),
 [Steven Myint](https://github.com/myint)
phase:
 - Bonding : https://gitlab.com/coala/GSoC-2017/milestones/36
 - Phase 1 : https://gitlab.com/coala/GSoC-2017/milestones/37
 - Phase 2 : https://gitlab.com/coala/GSoC-2017/milestones/38
 - Phase 3 : https://gitlab.com/coala/GSoC-2017/milestones/39
bio: >
 Hi! I am Dhika, a 3rd Information Technology student in University of Gadjah
 Mada, Indonesia. I like coding and play video games in ~~not only~~ my
 freetime. I choose coala as my GSoC project because I think it's very cool,
 and it can stop me from annoying my friends because their code style is
 ~~horrible~~ different than me, instead coala will do it for me.
social:
 - GitHub:
   - username: adhikasp
   - link: https://github.com/adhikasp
 - GitLab:
   - username: adhikasp
   - link: https://gitlab.com/adhikasp
 - Gitter:
   - username: adhikasp
   - link: https://gitter.im/adhikasp
email: hello@adhikasetyap.me
blog: https://adhikasp.github.io
activity:
 - 0:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4412
   - details: >
      aspectModule: Add ``get()`` method
 - 1:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4392
   - details: >
      AspectList: Add ``get()`` method
 - 2:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4395
   - details: >
      Aspects: Create exception for aspects lookup
 - 3:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4389
   - details: >
      AspectList: Overload __init__ to accept strings
 - 4:
   - repo: autoflake
   - link: https://github.com/myint/autoflake/pull/18
   - details: >
      Add option to expand single star import
 - 5:
   - repo: autoflake
   - link: https://github.com/myint/autoflake/pull/22
   - details: >
      Bump Pyflakes to 1.1.0

 - 6:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4427
   - details: >
      aspectbase: Recursively instance aspect children
 - 7:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4439
   - details: >
      AspectList: Add ``exclude`` attribute
 - 8:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4397
   - details: >
      Processing: Preprocess and pass aspects to bear
 - 9:
   - repo: coala
   - link: https://github.com/coala/coala/issues/4490
   - details: >
      AspectList: Connect with holder bear
 - 10:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4532
   - details: >
      Implement basic bear collection by aspect
 - 11:
   - repo: autoflake
   - link: https://github.com/myint/autoflake/pull/23
   - details: >
      Add exclude parameter

 - 12:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4657
   - details: >
      Collectors: Warn unfulfilled aspects
 - 13:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4662
   - details: >
      Aspect: Create ``map_setting_to_aspect`` decorator
 - 14:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4582
   - details: >
      Aspects: Add more robust setting checks
 - 15:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4685
   - details: >
      Aspect: Bugfixes
 - 16:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4687
   - details: >
      Bear: Add `language` for non_optional params
 - 17:
   - repo: coala
   - link: https://github.com/coala/coala/pull/4689
   - details: >
      Fix Language missing default import and aliases
 - 18:
   - repo: coala-bears
   - link: https://github.com/coala/coala-bears/pull/2023
   - details: >
      MypyBear: Use ``language`` correctly
 - 19:
   - repo: coala-bears
   - link: https://github.com/coala/coala-bears/pull/2017
   - details: >
      PyUnusedCodeBear: Aspectization
 - 20:
   - repo: demo-aspect
   - link: https://github.com/adhikasp/demo-aspect
   - details: >
      Repo for the showcase that aspect configuration works.

---

### Implement Aspect

This project is about implementing aspect feature into coala. coala, for those
unfamiliar with it, is a linter/fixer tools for *dozens* of language, providing
unified API to *over 100* different linters.

**`Aspect`** itself is a category of analysis that should be run over a code.
Each aspect have a **`taste`**, which is a measurable metric on how a
"*correct*" code should look like.

The main goal of aspect is providing abstraction for users (especially new
users) by avoiding getting overwhelmed of trying to pick and configure some of
over 100 tools provided by coala. Instead the coala will intelligently pick
and configure those tools according to aspects and taste choosen by users.
This also make configuration more language agnostic and could easily used by
project written in different programming language.

#### Work Done

This GSoC project implement a working aspect framework and its already possible
to run a analysis on a project with aspect configuration (see showcase project
at <https://github.com/adhikasp/demo-aspect>).

The works consist of: expanding `aspects` library on [coala/coala](https://github.com/coala/coala)
to have a sufficient API to make the core `aspects` class usable for the use
case in coala, patching a bear in [coala/coala-bears](https://github.com/coala/coala-bears)
to use the `aspects` feature, creating new feature in [autoflake](https://github.com/myint/autoflake)
to expand bear capabilities, and update the relevant documentation.

#### Challenges

The challenges of this project is designing aspect configuration behaviour and
the final integration process of exposing the coala aspect API to the
coala-bears. Because of the experimental nature of aspect, it may still have
some unintuitive behaviour and not tested in real world yet. Thus the
configuration behaviour could change according to use case response. In the
final integration process, we broke coala-bears because of introduced changes
on how coala setting works, especially related to `language` setting.
Fortunately all of this has been fixed.

#### Work to be done

Lack of aspect definition and aspectized bear. The root problem, lack of
aspect defintion is very crucial. Current aspect definition only support 1-3
small bear to *almost* be migrated and even that still lack some detail. This
will became the main hindrance of using aspect as the main configuration
method for coala.

Beside that, the current bear collection by aspect strategy is very basic.
This could be improved by implementing some kind of prioritazion for choosing
the bear like choosing bear that could fix problem rather than only detect,
minimalizing number of individual bear (1 super bear is more efficient to run
rather than 10 smallish bear, with the same feature set) or choosing bear based
on the runtime similiarity (like nodejs, python, or ruby).

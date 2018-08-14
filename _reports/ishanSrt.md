---
categories:
  - GSoC
  - 2018
  - StatusReport
date: 2018-08-14
student: Ishan Srivastava
organisation: coala
organisation_link: https://coala.io
report_year: 2018
project: Quickstart Green Mode
project_link: https://summerofcode.withgoogle.com/projects/#5792652830703616
tarball: https://cdn.rawgit.com/ishanSrt/ishanSrt.github.io/d859b05e/ishanSrt.tar.gz
sha256sum: 4dcee0f017d832965ca44a76d0a8b20f92d68fd2fb820975984a51b4ff34806a
mentors: >
  [Satwik Kansal](https://github.com/satwikkansal) &
  [Adhityaa Chandrasekar](https://github.com/adtac) &
phase:
  - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/46
  - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/56
  - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/70
  - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/72
bio: >
  I am a third year student (expected graduation date: May 2020) of Computer
  Science and Engineering at Indian Institute of Technology Dharwad. I
  participated in GSoC and worked with [coala](http://coala.io) to implement
  the coala-quickstart Green Mode for the repository
  [coala-quickstart](https://github.com/coala/coala-quickstart) to generate
  project dependent configuration files for the coala project, which make
  coala show no inconsistencies in the code base and are helpful in detecting
  inconsistencies in future commits. I also solved and contributed small
  patches to other coala repositories during the time period of GSoC.
social:
  - GitHub:
      - username: ishanSrt
      - link: https://github.com/ishanSrt
  - GitLab:
      - username: ishanSrt
      - link: https://gitlab.com/ishanSrt
  - Gitter:
      - username: ishanSrt
      - link: https://gitter.im/ishanSrt
  - OpenHub:
      - username: ishanSrt
      - link: https://www.openhub.net/accounts/ishanSrt
email: ishan.srt@gmail.com
blog: https://www.dowhatucant.com/gsoc_archive.html
activity:

  - 1:
      - repo: projects
      - link: https://github.com/coala/projects/commit/e5724fa9b0be71304277e508c2f317318aeed1c4
      - details: >
         [Bonding Period Work] quickstart_green_mode.md: Add Quickstart Green Mode Project

  - 2:
      - repo: projects
      - link: https://github.com/coala/projects/commit/ea3f0ac7e8d98cdf1afa5d6e99345a760f83dc39
      - details: >
         [Bonding Period Work] .gitignore: Add .DS_Store

  - 3:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/0daa94289919d5dff171ce771b24f057c64f33d5
      - details: >
         README.md: Add green mode cEP

  - 4:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/e58b935be77459b9323a80ef9b47267d445d8c5c
      - details: >
         cEP-0022.md: Add cEP for quickstart green mode

  - 5:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/f423227b4868376496f2280ee5e69aeb2db66724
      - details: >
         CODEOWNERS: Add a list of developers

  - 6:
      - repo: coala-quickstart
      - link: https://github.com/coala/coala-quickstart/commit/a725f019c898a3422c856e1deae9cca906594883
      - details: >
         green_mode.py: Run BEAR_DEPS bears while testing

  - 7:
      - repo: coala-quickstart
      - link: https://github.com/coala/coala-quickstart/commit/9e91285ac87cd36ee846743f1c9d891c324f8c18
      - details: >
         bear_settings.yaml: Fix wrong bear for settings

  - 8:
      - repo: coala-quickstart
      - link: https://github.com/coala/coala-quickstart/commit/6bf20749002220d134fe775cf978ff5b2e2e9da2
      - details: >
         Project.py: Fix bug while printing languages

  - 9:
      - repo: coala-quickstart
      - link: https://github.com/coala/coala-quickstart/commit/8bbd4dab13853e61a1cd1a2634d0c6da72b09716
      - details: >
         green_mode_core.py: Fix a bug

  - 10:
      - repo: coala-quickstart
      - link: https://github.com/coala/coala-quickstart/commit/94e9eda139234e8b9183ce5462bd7c9a9d97e197
      - details: >
         Aggregate green mode per file results


---

### Quickstart Green Mode


#### Work Done

During the first phase my main objective was to collect metadata from the
various bears for coala to know about the type of values they accept for
their settings. I grouped the settings into various types eg the ones
which accept bool values, the one which accept int or float i.e infinite
set of values or the ones which accept some discrete set of strings like the
error codes for pycodestyle. I then collected these settings as a dict
with all possible acceptable values as values to the dict, and made all
combinations of setting values as those bears. I then ran coala again and
again until i got a set of settings which produce no errors. I also added
some bears like the QuickstartBear which aided me i guessing the values
of those settings which can potentially take an infinite set of values.
The last phase was involved with creating coala configuration files i.e.
`.coafile`s out of the collected green (i.e. non erroneous data)

#### Challenges

Seperating the bear settings was a challenge in itself as it was not scalable
due to missing type annotations in many bears. It was impossible to guess
whether a setting would take infinite values or a discrete set of values just
from the type annotations. For eg tab spaces don't take infinite values but
maximum line lengths for files on a particular project can.

The next challenge was launching the bears in a multiprocessing environment
and to decrease the run time of the coala-quickstarts's `--green-mode` as
much as possible.

The last challenge was creating configuration files out of the green results
and aggregating various settings into config file sections. Various tree
data structues and Trie data structures were involved to aggregate the per
file results (as we needed to config files to be as specific as possible)
into globs and sections.

#### Work to be done

`coala-quickstart` can use a `--lite-mode` to decrease its run time where
it selects only a set of files from all the files in the directory and
run checks only on those smaller number of files.

Various files are ignored and the user can be asked a question whether
they would like to fix their inconsistencies using coala and all the ignored
files can be placed in the files field with all the section settings for
them to run coala with just a single command: `coala`.

Tests should be improved by actually devising a way to clone a repo and run
`--green-mode` on it to increase the project's test coverage.

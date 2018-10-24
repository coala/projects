---
categories:
  - GSoC
  - 2018
  - StatusReport
date: 2018-08-12
student: Vaibhav Kumar Rai
organisation: coala
organisation_link: https://coala.io
project: Debug and Profile Bears
project_link: https://summerofcode.withgoogle.com/projects/#6109762077327360
tarball: https://rawgit.com/RaiVaibhav/GSoC-Report/master/project.tar.gz
sha256sum: d61862f8f8be5ec168b07741c09781ef2dcc991e44d87edc05e6d237044052b0
mentors: >
  [Mischa Krüger](https://github.com/Makman2),
  [Fabian Neuschmidt](https://github.com/fneu),
  [Arjun Singh Yadav](https://github.com/arjunsinghy96)
phase:
  - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/18
  - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/52
  - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/53
  - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/54
bio: >
  I am third year student of B.Tech Computer Science Engineering at Shri Mata
  Vaishno Devi University, Katra, Jammu and Kashmir. I participated in GSoC and
  worked with [coala](https://coala.io) to create better quality Bears by
  creating a tool which has the ability to jump directly into Bear code and
  move through it using a debugger interface such as pdb and make debugging
  of Bears as easy as writing the Bear.
  A Debugger also has a ability to investigate the settings passed to the
  Bear.
  I also implemented a Profiler Interface which provides abilities to profile
  Bear code to optimize its performance.
social:
  - GitHub:
      - username: RaiVaibhav
      - link: https://github.com/RaiVaibhav
  - GitLab:
      - username: RaiVaibhav
      - link: https://gitlab.com/RaiVaibhav
  - Gitter:
      - username: RaiVaibhav
      - link: https://gitter.im/RaiVaibhav
  - Openhub:
      - username: RaiVaibhav
      - link: https://www.openhub.net/accounts/RaiVaibhav
email: raivaibhav08@gmail.com
blog: https://raivaibhav.github.io
activity:
  - 1:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/d7de1896ed3e9370a431987a210a82751e211066
      - details: >
         cEP-0021.md: Proposed implementation of `Profiling Interface`.
  - 2:
      - repo: coala
      - link: https://github.com/coala/coala/commit/d6186cd1bc3f4e049acac21c657b5a21c55393de
      - details: >
         Removed the `filter_raising_callables` function and inline it, to
         decrease the complexity of code for future modification in
         Debugger<br>Interface pull request.
  - 3:
      - repo: coala
      - link: https://github.com/coala/coala/commit/c1184ca58a9cca30afc144e7ad7a1bf7c5fe5f55
      - details: >
         Added Debugger Interface with `--debug-bears` argument and debug bears
         process so that pdb work in single process environment and<br>bear
         developer can debug specified bear.
  - 4:
      - repo: coala
      - link: https://github.com/coala/coala/commit/4cb1a6c5bb85bc42a315d118a2f66123465ab4ed
      - details: >
         Debug_Bears.rst: Added Debugger Interface document with demo.
  - 5:
      - repo: coala
      - link: https://github.com/coala/coala/commit/89833995c1380b813f30bf2048e3f63d495dd71a
      - details: >
         Prevent bear test from failing, replaced httpstat with Google teapot
         because of SSL certification error.
  - 6:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/commit/8faa08ef573105a75cf31c57298d6b6ba9201d8e
      - details: >
         Debugged PySafetyBear to get the cause of upstream problem and failure
         of appveyor CI, updated PySafetyBear to support lastest version<br>of
         safety.
  - 7:
      - repo: coala
      - link: https://github.com/coala/coala/commit/e9e7e3770791b6df41b414a01c5a956c2b8b356f
      - details: >
         Added Settings inspection toolset through which user can access the
         settings of a Bear in Debug environment.
  - 8:
      - repo: coala
      - link: https://github.com/coala/coala/commit/80f8bc955bf4db2892d52262396d824f3050fb71
      - details: >
         Debug_bears.rst: Added Settings inspection toolset document with demo.
  - 9:
      - repo: coala
      - link: https://github.com/coala/coala/commit/3cb58246351ecbabd9768151cb6b9fe28c3790fc
      - details: >
         Removed `debugger` flag from `init` of bear Base class because of the
         API breakage issue for the existing users.
  - 10:
      - repo: coala-utils
      - link: https://gitlab.com/coala/coala-utils/commit/ba2e0789d0f1c405af93e313e692087077b45954
      - details: >
         Enhance TRUE and FALSE STRINGS in coala-utils `constants` so that
         settings like debugger and profiler can be enable and disable
         with<br>the value like `ok`, `positive`, `none`, `negative` etc.
  - 11:
      - repo: coala
      - link: https://github.com/coala/coala/commit/fea6e01bd0b5300b0f46c3528981c1e6558e1867
      - details: >
         Added Profiler Interface on coala with `--profile` argument to profile
         execution of bear.
  - 12:
      - repo: mobans
      - link: https://gitlab.com/coala/mobans/commit/b2d62db0e7bd8879843879974f2168cc3600bfa2
      - details: >
         Add `prof/` to `coala.gitignore` template. Ignored profiled data
         directory created by `pytest-profiling`.
  - 13:
      - repo: coala
      - link: https://github.com/coala/coala/commit/0e075217ea1bc5732d9deac57355431db00ef4ee
      - details: >
         Profile_Bears.rst: Add Profiling Interface document with demo.
  - 14:
      - repo: pytest-plugins
      - link: https://github.com/manahl/pytest-plugins/pull/89/commits/6f8d598b210da0f76e09ff86811d4538a1bc6c43
      - details: >
         pytest_profiling.py: Add additional argument to configurable profile
         output directory. (Not merged; approved by GSoC admin)
---

### Debug and Profile Bears

#### Work Done

1. Debugger Interface added in coala.
   1. Step into the `run()` method of a bear move through it using a debugger
      interface such as `pdb` and exits as soon as `run()` is left.
   2. Pdb's quit-command (`q`) remapped so coala continues its normal execution
      without aborting. So, `quit` or `q` will first clear all breakpoints and
      then continue execution.
   3. Users can specify the bear they want to debug using `--debug-bears`.
   4. Users can specify to debug bears using a `.coafile`.

2. A new command `settings` is included in coala's Debugging Interface to
   inspect Bear settings in the debugging environment. It displays all passed
   settings of a Bear and their values so bear developer can quickly inspect
   them.

3. Profiler Interface added in coala.
   1. The profiler will start by profiling the `run()` method of bears because
      this is the part where bear writers will spend time on, as rest of the
      part like loading the files, collecting the settings, etc. are done by
      coala itself.
   2. `--profile-bears` or `profile_bears` (using .coafile) is the main argument
      to enable profiling.
   3. Accept an additional parameter `directory_path` through which bear
      developers can specify where to store the profiled data files.

#### Challenges

I had difficulties with testing of Debugger interface. With the help of `Mock`,
test for debugger interface was created, though code coverage was 100% but
`mock` test was not the ideal test, so after hours of discussion with Mischa we
decided to capture the `pdb stdout` and assert the the output with the real
output but problem arised, the ideal tests passes but somehow it didn't showed
the code coverage to 100% not only that it also removed the coverage of the
previous tests, at first I thought created test have some problem but seems
like `pytest-cov` had a problem, so to confirm that I created a
[test repo](https://github.com/RaiVaibhav/test_repo) and enable the
[CI](https://travis-ci.org/RaiVaibhav/test_repo) on that repo to check the
coverage report, it also showed same failure. So, I created a issue on
`pytest-cov` repo but actual problem was, both coverage and debugger use the
same trace feature, so it was not possible to run coverage and debugger in
parallel or say it is not possible to chain the trace functions, so Mischa gave
a idea to restore the trace callbacks and then run test, it worked finally so I
included both ideal and `Mock` test so that the coverage remain 100, but in all
of these I lagged around 3 week from my schedule. So I couldn't implement one of
the proposed feature.

#### Work to be done

A tool which will provide the ability to inspect result instances like
`origin`, `diffs`, `file`, `severity`, `message`, `aspects` and several other
attributes in debugging environment or in a seperate python console where all
where user can easily access there values. Information about result will help
bear developer in creating a better performant Bears.

Result inspection tool will not only help in debugging the bear results but
also help in testing the bear by asserting the various attributes of expected
result with actual result.

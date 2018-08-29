---
categories:
  - GSoC
  - 2018
  - StatusReport
report_year: 2018
date: 2018-08-12
student: Palash Nigam
organisation: coala
organisation_link: https://coala.io
project: Optimize Caching for the NextGen-Core
project_link: https://summerofcode.withgoogle.com/projects/#6434190552203264
tarball: https://rawgit.com/palash25/gsoc-18-report/master/project.tar.gz
sha256sum: 11072a232d80160a6142e822b1ab66c28ccd4a72d6ea3762111ecdc922bb8479
mentors: >
  [Mischa Krüger](https://github.com/Makman2),
  [Shreyans Doshi](https://github.com/shreyans800755),
  [Fabian Neuschmidt](https://github.com/fneu)
phase:
  - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/32
  - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/33
  - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/34
  - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/35
bio: >
  I am second year student of B.Tech Computer Science and Engineering at
  International Institute of Information and Technology, Bhubaneswar,
  Odisha, India. I worked as a GSoC student under coala to improve coala's
  I/O mechanism using `FileFactory` class and adding features to provide
  more support for NextGen-Core's caching mechanism.
social:
  - GitHub:
      - username: palash25
      - link: https://github.com/palash25
  - GitLab:
      - username: palash25
      - link: https://gitlab.com/palash25
  - Gitter:
      - username: palash25
      - link: https://gitter.im/palash25
  - Openhub:
      - username: palash25
      - link: https://www.openhub.net/accounts/palash25
email: npalash25@gmail.com
blog: https://medium.com/gsoc-with-coala/
activity:
  - 1:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/7272ff6b9463a5cff33c431f73a416e5a999f4ac
      - details: >
         cEP-0026.md: Adds optimize caching cEP.
  - 2:
      - repo: projects
      - link: https://github.com/coala/projects/commit/a228c2b39ef17b3c6d3572853601dfa05b938173
      - details: >
         Updated the details of Optimize Caching project.
  - 3:
      - repo: projects
      - link: https://github.com/coala/projects/commit/759f74f88206c58ac80dd7acd12cadbae13f28cb
      - details: >
         optimize_caching.md: Changed primary mentor from adtac to Makman2.
  - 4:
      - repo: devops
      - link: https://github.com/coala/devops/commit/e309383bc5aacb007c4986bd74197238a4fcc96d
      - details: >
         planet.ini: Add palash25 gsoc blog feed.
  - 5:
      - repo: coala
      - link: https://github.com/coala/coala/commit/b06dfe44fa99ffeb997f6f0a4bf302938fb9734c
      - details: >
         Added `FileFactory` class. Objects of this class are used
         to represent files and replace file contents in the file dict.
  - 6:
      - repo: coala
      - link: https://github.com/coala/coala/commit/77c1dca15dc82d1753aa0962017899392d0033ec
      - details: >
         Added `Directory` class. This class will act as an interface
         to directories providing useful information about them. The
         objects of this class can be used by bears that operate only
         on directories and perform analysis based on the things like
         directory structure.
  - 7:
      - repo: coala
      - link: https://github.com/coala/coala/commit/fc568a01ba489376b4d6efac12ea772cb3cb1573
      - details: >
         Added `memoized_property`. `memoized_property` is a decorator
         that caches the properties of `FileFactory` class.
  - 8:
      - repo: coala
      - link: https://github.com/coala/coala/commit/81bbca42f82319aed22ba7f90781d886d559d4dd
      - details: >
         NextGen_Core.rst: Update caching section. 
  - 9:
      - repo: coala
      - link: https://github.com/coala/coala/commit/87d3dffd1a52c42ac60da0199ee34bd95827b8ff
      - details: >
         IO.rst: Add FileFactory docs.
  - 10:
      - repo: coala
      - link: https://github.com/coala/coala/commit/7bc5d7f7b84e91da9f6aa2f77d40f92e66c850d5
      - details: >
         NextGen_Core.rst: Add link to IO docs.
  - 11:
      - repo: coala
      - link: https://github.com/coala/coala/commit/54622c2b03e1b84bb122130af182424d706d3de4
      - details: >
         `FileFactory`: Use `cached_property` instead of `memoized_property`.
  - 12:
      - repo: coala
      - link: https://github.com/coala/coala/commit/415361f5a4c12cd65dd4cc171d2a8ebbba3bc92c
      - details: >
         A new attribute `newline` was added to `FileFactory` to force
         newlines on the file content.
  - 13:
      - repo: coala
      - link: https://github.com/coala/coala/commit/fbe8452360eb39340ace4334c2df133a1ee6de97
      - details: >
         Processing: Add middleware `FileDict` that provides the bears
         with the actual file contents instead of the `FileFactory` objects.
  - 14:
      - repo: coala
      - link: https://github.com/coala/coala/commit/e138e4875fc6d1474a93758881f550e05df8e329
      - details: >
         Processing: Modify tests to use actual files instead of hard coded
         tuples as file content.
  - 15:
      - repo: coala
      - link: https://github.com/coala/coala/commit/3ae03bec665943aa6173047245ca929a0a754c69
      - details: >
         Added support for collection types like `dict` and `set` for
         `persistent_hash`.
---

### Optimize Caching for the NextGen-Core

#### Work Done

1. Improved I/O mechanism for coala.
   1. Added a class `FileFactory` to interface with files and to provide file
      contents in different forms like string, binary data or as a tuple.
   2. Added a `Directory` class to interface with directories and provide
      useful information about them such as the directory path, parent
      directory and timestamps. This will be later used to implement ignore
      directories functionality.
   3. Added documentation for `FileFactory` and improved the NextGen-Core
      docs.

2. Caching support.
   1. Cached the properties of `FileFactory` which turned out to be a
      significant performance boost in consecutive coala runs.
   2. Added support for unordered collection types in `persistent_hash`
      which improved the NextGen-Core's ability to hash much more
      complex task objects (which are used in NextGen caching).

3. Integrated `FileFactory` with the core.
   1. Added line endings support for `FileFactory`.
   2. Implemented a middleware `FileDict` that mimics a dictionary
      and provides the bears in the old core with the actual file
      contents instead of the `FileFactory` objects thereby maintaining
      backwards compatibility with the old core.
   3. Modified the tests to use actual files and the `FileFactory` objects
      instead of hard-coded file contents.

#### Challenges

One of the first challenges I faced was designing the `FileFactory`.
But with my mentors help we were able to come up with a design that
could be used for the NextGen-Core and also maintained compatibility
with the old core.

The biggest challenge that I faced these three months for the integration
of the aforementioned `FileFactory` with the core. Initially about thirty
tests were failing but after discussing the idea of using a middleware
(`FileDict`) to maintain backwards compatibilty with the old core the test
failures were significantly reduced to just six. After a while I discovered
that `FileFactory` was somehow removing line-endings from the file contents
which was fixed by adding support for newlines in `FileFactory` which in turn
led to a successful integration.

#### Work to be done

Two major features were left out because of time constraints:
1. Ignore directories functionality for the NextGen-Core.
2. Cache control flags for the NextGen-Core (which was
   already mentioned as a stretch issue in my GSoC proposal).

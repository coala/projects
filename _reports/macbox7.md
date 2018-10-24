---
categories:
 - GSoC
 - 2018
 - StatusReport
date: 2018-08-13
student: Ankit Joshi
organisation: coala
organisation_link: https://coala.io
project: Integrate pyflakes-enhanced AST into coala
project_link: https://summerofcode.withgoogle.com/projects/#5549789140221952
tarball: https://rawgit.com/MacBox7/GSoC-Report/master/project.tar.gz
mentors: >
 [John Vandenberg](https://github.com/jayvdb),
 [Adhika Setya Pramudita](https://github.com/adhikasp),
 [Steven Myint](https://github.com/myint)
phase:
 - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/8
 - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/25
 - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/26
 - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/27
bio: >
  A senior student at National Institute Of Technology, Kurukshetra major
  in Information Technology. For GSoC, I worked on
  [coala-pyflakes](https://gitlab.com/coala/bears/coala-pyflakes) and
  [pyflakes](https://github.com/PyCQA/pyflakes). The project was to
  integrate pyflakes-enhanced AST into coala as a metabear which was
  then used to develop various plugins. The second part of the project
  was to write plugin bears using the developed `PyFlakesASTBear`.
social:
 - GitHub:
    - username: macbox7
    - link: https://github.com/macbox7
 - GitLab:
    - username: macbox7
    - link: https://gitlab.com/macbox7
 - Gitter:
    - username: macbox7
    - link: https://gitter.im/macbox7
 - OpenHub:
    - username: macbox7
    - link: https://www.openhub.net/accounts/macbox7
email: ajankit2304@gmail.com
blog: https://macbox7.github.io/Blog-GSOC18/
activity:
 - 0:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/684f1a958dd66fa781e7f03777ffa96b7e6a2ca7
    - details: >
       Initial commit
 - 1:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/9484d8af901153c490812d86809760b14c46d9af
    - details: >
       PyFlakesASTBear.py: Add PyFlakesASTBear
 - 2:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/43af824f1ea202ea1a94fb9e01a8e6f570e7c614
    - details: >
       coafile: Add .coafile
 - 3:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/97532ae4bf975b0c6b609da471d327ac31c23022
    - details: >
       PyFlakesASTBearTest.py: Add PyFlakesASTBearTest
 - 4:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/eeed23b3fd5a0842964c116abf60b4616fd8cf6e
    - details: >
       pyflakesbears: Package renamed
 - 5:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/a0b03763a744c1e111d7858105151e99c22a4143
    - details: >
       NoFutureImportBear.py: Add NoFutureImportBear
 - 6:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/da0e61b9b582d3647f97cfbd3720a91f079eeed1
    - details: >
       .gitignore: Remove test cache
 - 7:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/3ddac9c8bcb2a7b64e618c3dbee19fc7605db628
    - details: >
        coala-pyflakes: Add requirements
 - 8:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/8437c4d788be2fa2c3c46d5dc5ee17ee78d9b3c2
    - details: >
        coala-pyflakes: Add circleci
 - 9:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/5d10c92fafd0a2098cebe5cacfcbaa5704035ed6
    - details: >
        requirements.txt: Add coala-bears
 - 10:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/9b45124b5aa70afddd25aa338d4a7449be1b83ef
    - details: >
        requirements.txt: Update coala version
 - 11:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/161840791070bfe7afb430ae42b0a82536193ff1
    - details: >
        pyflakes_bears: Rename pyflakesbears
 - 12:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/7df6da767d589b41086688946c9f44dd155f92be
    - details: >
        .config.yml: Run coala
 - 13:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/f46e4f0cf9885c4222a686d46615843b56d2900a
    - details: >
        NoFutureImportBear.py: Add NoFutureImportBear
 - 14:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/67b365fe9e320103c7292d67d8080556585e22a9
    - details: >
        Integrate moban
 - 15:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/f3b396a1a9268e836d2187228686c36b79604724
    - details: >
        pyflakes_generic_plugins: Add generic plugins
 - 16:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/1394dbd7585ef309eb7f4e2594c142d4d65d4b36
    - details: >
        Sync moban
 - 17:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/09c133a20fc5740d0c295b54311565a32ab69560
    - details: >
        coala-pyflakes: Sync moban
 - 18:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/4c02c2e2b1aac5b8a21de1a86ccebe0e6d24e2c3
    - details: >
        coala-pyflakes: Sync moban
 - 19:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/e589f2ca11832a4c00b007f457d363d06d605be8
    - details: >
        docs: Add documentation
 - 20:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/ff562505fb92962e1698e3d77a2cedf1063d55ed
    - details: >
        .ci: Restructure ci in repo
 - 21:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/f0cbea5d167e17c37f4a2b87d63fe1e08a5c8f53
    - details: >
        Sync moban
 - 22:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/816bd249de4b4111ef6280326b491cfea504d0f7
    - details: >
        Sync moban
 - 23:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/76b420fa37190ffb69dd22c1bce9bb92f0d6cce8
    - details: >
        PEP8DoctestNamingBear.py: Add bear
 - 24:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/33f26248187e5dcb7ef134f5429f315c58f11b9c
    - details: >
        PEP8DoctestNamingBear: Rename to PEP8NamingBear
 - 25:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/50c64588b7ade70c131b61c625b4b12449c144e3
    - details: >
        PyFlakesASTBear.py: Remove ARGUMENT handler
 - 26:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/2e4248b1254bafa3cf906e32dfeef85a4d7db631
    - details: >
        PyFlakesASTBear.py: Track scope nodes
 - 27:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/b88ec7bfa62dc2e760818f2812a7684e11503d48
    - details: >
        coala-pyflakes: Sync moban
 - 28:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/1f85ba9fe4888367de2aa1cc9f155ca92bf63a71
    - details: >
        PyFlakesASTBear.py: Override checker handler
 - 29:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/9662e4161cace3cb66d4720f3bcbf0528ab0d2d9
    - details: >
        setup.py: Add entrypoint for coala
 - 30:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/dfd7a11563d75ba8c6ccae4e9a1d5ac0fde82d05
    - details: >
        coala-pyflakes: Add LICENSE
 - 31:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/7f195ae3c7c9d76edb37b03b58c50923276e697e
    - details: >
        coala-pyflakes: Add CONTRIBUTING.rst
 - 32:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/a427ca382b8d32c28ce8db40e9d01a65f3cd6962
    - details: >
        coala-pyflakes: Update LICENSE
 - 33:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/9cd4a6fc2ff790ee9d2702bfb2a1c89b9660c257
    - details: >
        coala-pyflakes: Add README.rst
 - 34:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/8c7efdb9a251616ec533c4c7663e10d95d5c8c14
    - details: >
        .coafile: Add bandit bear
 - 35:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/edcd049ff08d38000b4b50e45efa7361d4b7388b
    - details: >
        .coafile: Add PyCommentedCodeBear
 - 36:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/707d6486fec22614a1b7508ed21b913fa1a76744
    - details: >
        .coafile: Add PyImportSortBear
 - 37:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/8a63f65b23bf9135a7532063c9606d5707c2792c
    - details: >
        .coafile: Add PyDocStyleBear
 - 38:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/bf99e5e5f67a7d1ac6e1bf612f91549cc5fe9072
    - details: >
        coala-pyflakes: Fix import order
 - 39:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/7cdf489468fa6cf60bd3338bded663989355e524
    - details: >
        PEP8NamingBear: Set col offset 0 to 1
 - 40:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/b176d39c56f879f5d3b58c2324192229b5599906
    - details: >
        .gitlab-ci.yml: Use moban template
 - 41:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/5e2e8a803639e2796745ff62ac1e871f471fadbb
    - details: >
        NoFutureImportBear: Sort FutureImportation
 - 42:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/7661b4d928c2f5b5d77b78447667396b320ab4fe
    - details: >
        coala-pyflakes: Sync moban
 - 43:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/cb053a3fb63874e4174cb00120e95787a315ff71
    - details: >
        PyFlakesASTBear: Allow sorting of nodes
 - 44:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/a2d2f9b8d57d2edf891732416daf287c8cafb097
    - details: >
        .ci: Remove travis and appveyor
 - 45:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/d552b3dba8d8ca555054d0eb2ce8f4d9206b9c3c
    - details: >
        .moban.yaml: Point setup.py to gitlab repo
 - 46:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/64c50726b1597b924c82f3df45338f7da1958cc2
    - details: >
        pyflakes_bears: Change LICENSE to MIT
 - 47:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/7035b40cd5395b917892921cd131fc73181f1a33
    - details: >
        BuiltinsBear.py: Add BuiltinsBear
 - 48:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/fbe64ed0b193eb425cdc9f4847b7d106c81beed9
    - details: >
        coala-pyflakes: Sync moban
 - 49:
    - repo: coala-pyflakes
    - link: https://gitlab.com/coala/bears/coala-pyflakes/commit/87dddfa0709591d2925df849fc16f542d08e8e88
    - details: >
        requirements.txt: Use bears master
 - 50:
    - repo: pyflakes
    - link: https://github.com/PyCQA/pyflakes/commit/9dd73ec54411a563410872b47e76f0f89f34ecfe
    - details: >
        Handle subtrees as input to checker
 - 51:
    - repo: pyflakes
    - link: https://github.com/PyCQA/pyflakes/commit/fb1f223ac2141772f140be6f1108d02009c1d658
    - details: >
        checker.py: Handle UnboundLocal error for builtins
 - 52:
    - repo: pyflakes
    - link: https://github.com/PyCQA/pyflakes/commit/45fc732466056fe35c85936ff25491df7905c597
    - details: >
        checker.py: Check for invalid print syntax
 - 53:
    - repo: coala
    - link: https://github.com/coala/coala/commit/9a485b6bce04b1efd87224b0803a7490376406cc
    - details: >
        Collectors.py: Sort bear list
 - 54:
    - repo: coala
    - link: https://github.com/coala/coala/commit/313b19f88b2507cdea99e721c78097bb90d83e6a
    - details: >
        Collectors.py: Document functions
 - 55:
    - repo: coala
    - link: https://github.com/coala/coala/commit/5edaf9c4e139d4e05ede71ade43db75f8a097b67
    - details: >
        ConfigurationGathering.py: Document functions
 - 56:
    - repo: coala
    - link: https://github.com/coala/coala/commit/8a1b093802517b4ee0dbf6a84e0ef238789c807e
    - details: >
        Sync moban
 - 57:
    - repo: coala-bears
    - link: https://github.com/coala/coala-bears/commit/45de414b58f87a247ddab69ea569f81aaaae86a5
    - details: >
        PEP8Bear.py: Add asciinema
 - 58:
    - repo: coala-bears
    - link: https://github.com/coala/coala-bears/commit/f8b779f1c33e4db41e184dc2b9df1ee5e969698c
    - details: >
        tests/go/test_files: Change go test files
 - 59:
    - repo: coala-bears
    - link: https://github.com/coala/coala-bears/commit/8343eeab7a940a4b9a90cd9986dd9cfeeefdd550
    - details: >
        RadonBear.py: Change bears settings
 - 60:
    - repo: coala-bears
    - link: https://github.com/coala/coala-bears/commit/fc26c13537997c835f20bc870df20568136c72f3
    - details: >
        Sync moban
 - 61:
    - repo: coala-bears
    - link: https://github.com/coala/coala-bears/commit/559c953e1b5787df9dddf96ece8449e50c945716
    - details: >
        netlify.toml: Add netlify
 - 62:
    - repo: coala-bears
    - link: https://github.com/coala/coala-bears/commit/e46d352d30f5895b4deead2bcc174a50f480aade
    - details: >
        PyFlakesBear: Bump pyflakes to 2.0.0
 - 63:
    - repo: cEPs
    - link: https://github.com/coala/cEPs/commit/95bc075d25b5603b3a0d5c2ab291c73f0e858897
    - details: >
        Sync moban
 - 64:
    - repo: cEPs
    - link: https://github.com/coala/cEPs/commit/87ae1ac46c45cac007d450b086c4134b30d0ff64
    - details: >
        .coafile: Set max_line_length
 - 65:
    - repo: cEPs
    - link: https://github.com/coala/cEPs/commit/8eff469dd2c6ce4a491c7f3d1f393ddec39329e3
    - details: >
        README.md: Add entry for cEP-0025
 - 66:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/88c309b549a1fae990e9e710623e8a3c073c0a03
    - details: >
        test-requirements.txt: Ignore pip 18.0
 - 67:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/60fb13714a32ebf3e7ef7714de219c58195cef9c
    - details: >
        coala-setup.py.jj2: Fix zip_safe condition check
 - 68:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/a478c6661bf836c98a5f8e6afa5e5793e03c4dc3
    - details: >
        coala-setup.py.jj2: Add zip_safe option
 - 69:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/8c8c69dcab4b8c3811175a9785c7169dc158fb91
    - details: >
        coala-setup.py.jj2: Add yaml variable for docs_dir
 - 70:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/421fd040b9f841468719086cf291e9fe052434c3
    - details: >
        .moban.yml: Fix paths in copy
 - 71:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/dafc87e7a27d466f87fd4af6f90cac930dd6ae19
    - details: >
        assets/docs: Add docs-requirements.txt
 - 72:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/2bf51c46f7335ba4d80c51cceac9355a0a5111eb
    - details: >
        JetBrains.gitignore: Update with upstream
 - 73:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/38d225d431241d18eadcc34590bfac19fe0a1da7
    - details: >
        coala-setup.py.jj2: Add multi package docs support
 - 74:
    - repo: mobans
    - link: https://gitlab.com/coala/mobans/commit/fe41a4d05cab1717e75ec3100981399d7562eacd
    - details: >
        appveyor.yml.jj2: Set path to python
 - 75:
    - repo: coala-utils
    - link: https://gitlab.com/coala/coala-utils/commit/2912bbbab18e25ac9643c4c4c589a24674bc3b44
    - details: >
        Sync moban
 - 76:
    - repo: PyPrint
    - link: https://gitlab.com/coala/PyPrint/commit/7edfedff34fb1daf3dac7359403f7501b2aaa453
    - details: >
        Sync moban
 - 77:
    - repo: PyPrint
    - link: https://gitlab.com/coala/PyPrint/commit/04303805c3f2e9fee7eb216e7fffcf3733f8639d
    - details: >
        .coafile: Add NoFutureImport bear
---

### Integrate Pyflakes-Enhanced-AST into coala

#### Work Done

There has not been an option to use the pyflakes-enhanced-AST based
checker API to create custom linters. Thus, the full potential of
enhanced AST isn't utilized, a whole lot of rework is required to do
the basic traversing and collection of important nodes. Pyflakes provides
with a basic API that does the traversing. So, if a developer uses enhanced
AST he just needs to work on the implementation of the new logic that his/her
plugin provides and not about the fidelity of the basic node handlers.

**Major tasks of the project:**

1. Create a separate repository `coala-pyflakes` to house all
   pyflakes based plugins.
2. Create package `pyflakes_bears` to hold `PyFlakesASTBear` and all the
   coala bears developed using it.
3. Create package `pyflakes_generic_plugins` that consists generic plugins
   which can be integrated with `flake8` and other such similar wrappers.
4. Design and develop `PyFlakesASTBear` that provides helper functions
   that can be used to traverse pyflakes AST of the input python module.
5. Establish the proof of concept by creating `NoFutureImportBear` that
   detects and fixes any usage of `__future__` imports in a python file.
6. Add handlers for `ARGS` and `ARGUMENTS` and provide the functionality
   of partial code analysis in `pyflakes`.
7. Create a `PEP8NamingBear` that detects all pep8 naming violations
   in a python file. Special handling is also done to detect violations
   in doctests which other similar plugins fail to perform.
8. Create a `BuiltinsBear` that is capable of detecting redefinition
   of python builtins in a module.

#### Challenges

The challenge of the project was to implement the `PyFlakesASTBear` in
such a way that a plugin developer need not worry about writing his own
traversing logic and need to have much no more than the knowledge of
PyFlakesASTBear nodes to write the bears. However, designing the logic
first by writing cEP(coala enhancement proposal) for
[coala-pyflakes](https://github.com/coala/cEPs/blob/master/cEP-0025.md) helped
me a lot to understand the problem to a deep level and come out with a logic
to tackle it.

#### Future prospects of the projects

The `PyFlakesASTBear` now allows bear developers to detect codesmells
and anti-patterns in python programs allowing to create more bears and an
equivalent generic plugin. `coala-pyflakes` can be used to safe house
checks which are more strict hence can't be directly incorporated in
`pyflakes`. The bear framework can be further enhanced to include the
functionality of executing flake8 plugin as is.

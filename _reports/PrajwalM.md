---
categories:
  - GSoC
  - 2019
  - StatusReport
date: 2019-08-19
title: PrajwalM2212
student: PRAJWAL M
organisation: coala
organisation_link : https://coala.io
project: Support TOML as a configuration format
project_link: https://summerofcode.withgoogle.com/projects/#6388671438127104
tarball: https://github.com/PrajwalM2212/GSoCReport/raw/master/PRAJWAL-M_coala.tar.gz
sha256sum: 4cb9a32d50fc664fbaf8b51964983e52381391be151d3c10089951b6c15019af
mentors: >
 [Vaibhav Rai](https://github.com/RaiVaibhav) & [Alexandru-Sorin Maxim](https://github.com/Nosferatul) & [Kilari Teja](https://github.com/ksdme) & [Marcos Gómez](https://github.com/margobra8)
phase:
 - Bonding : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/32
 - Phase 1 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/33
 - Phase 2 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/34
 - Phase 3 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/35
bio: >
 I'm a second year student of Computer Science at Dr. Ambedkar Institute of Technology, Bangalore. I participated in GSoC and worked with [coala](http://coala.io) to support TOML as a configuration format. I have worked on the coala repo to implement this functionality. I have also extended this feature to coala-quickstart repo. Apart from this, I have created a set of bears that lints TOML files. I have also created a tool for automatically generating configuration files based on style guides. In all I have worked to make the configuration system easier to use.
social:
 - GitHub:
   - username: PrajwalM2212
   - link: https://github.com/PrajwalM2212
 - GitLab:
   - username: prajwalm2212
   - link: https://gitlab.com/prajwalm2212
 - Gitter:
   - username: PrajwalM2212
   - link: https://gitter.im/PrajwalM2212
 - LinkedIn:
   - username: Prajwal M
   - link: https://www.linkedin.com/in/prajwalm/
email: prajwalmmath@gmail.com
blog: https://medium.com/@bhavaneuler
activity:
 - 0:
   - repo: cEPs
   - link: https://github.com/coala/cEPs/pull/180/commits/1518c3a2f480080d0de64c779703292276982a42
   - details: >
      coala enhancement proposal for support toml project
 - 1:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6027/commits/66daa9ebf2fc444b37c3e94568f1abe26d0decfc
   - details: >
      TomlConfParser and loading system for running toml files

 - 2:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6032/commits/b01598ffab4d680eebd4f2ed64e87ebe6cf14a77
   - details: >
      Langauge definition for TOML

 - 3:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6043/commits/82211d7f2d9b345390c8ffa4fbd5eca5e6c0671a
   - details: >
      TomlConfWriter for saving functionality.
      ConfigConverter for converting toml to .coafile and vice versa

 - 4:
   - repo: documentation
   - link: https://github.com/coala/documentation/commit/7ce97cd390826d21a9459a091093f47c5711578b
   - details: >
      Documentation on writing configuration files in TOML

 - 5:
   - repo: coala-quickstart
   - link: https://github.com/coala/coala-quickstart/pull/335/commits/06ebf384650d888f83cad74d41d5b8331b4ac394
   - details: >
      Support coala-quickstart to generate config files in TOML

 - 6:
   - repo: coala-antlr
   - link: https://gitlab.com/coala/bears/coala-antlr/commit/7ebedc199ec5205fd58c1b61c23a885cc11db956?merge_request_iid=46
   - details: >
      A set of bears for linting TOML files

 - 7:
   - repo: toml
   - link: https://github.com/uiri/toml/commit/7963467bc3ac9c9834d33d303efb4fdb94858b38
   - details: >
      Support for toml library to store comments

 - 8:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6049/commits/f6db044006fcb487f6730d77551fe0db8b11b60c
   - details: >
      ConfigGenerator for generating coafiles

 - 9:
   - repo: coala-mobans
   - link: https://gitlab.com/coala/mobans/commit/431719a49f5c6e45a63272684bfda8d2bd915bb4?merge_request_iid=136
   - details: >
      coala-setup.py.jj2: Add system_coafile.toml

 - 10:
   - repo: coala-styles
   - link: https://github.com/PrajwalM2212/coala-styles/commit/069d088516be25dc2e6d093bb9fec014698b34f9
   - details: >
      Repository for style guide configurations

 - 11:
   - repo: documentation
   - link: https://github.com/coala/documentation/pull/599/commits/14ba354de44333db5d84c3a6824966bd1725ae3a
   - details: >
      Documentation on using ConfigGenerator
---

### Support TOML as a configuration format


#### Work Done

1. coala can now run on configuration files written in TOML. The method to write
configuration files has also been well documented.

2. coala has the functionality to create TOML configuration files from sections.

3. A tool to convert .coafile to TOML configuration file and vice versa has been created.

4. coala-quickstart can now generate configuration files in TOML as well.

5. A set of bears namely TomlExpressionBear, TomlArrayBear, TomlInlineTableBear
and TomlIndentBear have been created that will take care of linting various
aspects of a TOML file.

6. A new tool has been created to allow users to quickly run coala without having to
write their own configuration files. This tool will allow the user to generate
config files based on style guides. To make this possible a repo containing
config files for style guides for various languages has been created.

#### Challenges

I faced a few challenges during my project. I had to create bears for TOML,
but I had no clue of how to do that. For creating the bear I needed
a good set of lexer and parser. I then found coala-antlr which uses antlr4
for creating bears. I learnt how to use antlr4 during the project and finally
developed the bears.

#### Work to be done

The ConfigGenerator currently supports only a few languages and style-guides.
This can be improved by adding configuration files for different languages
and style guides in the coala-styles repo.


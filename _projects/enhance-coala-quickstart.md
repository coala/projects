---
collaborating_projects:
  - coala
desc: "Extract useful data from a project's configuration files to build a relevant `.coafile`."
developers_involved: []
difficulty: medium
status: completed
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/21"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/56"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/58"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/59"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/150"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/60"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/61"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/62"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/63"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/64"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/65"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/66"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/67"
markdown: enhance-coala-quickstart.md
mentors:
  - adtac
  - Adrianzatreanu
name: "Enhance coala-quickstart"
requirements:
  - "At least one patch to coala core and coala-quickstart each should be accepted and merged."
  - "The student should be familiar with ongoing technical [cEPs](https://coala.io/cep)."
tags:
  - "Information Extraction"
  - CLI
  - CI
---
[coala-quickstart](https://github.com/coala/coala-quickstart) is a tool that
helps users to quickly get started with coala. It generates a `.coafile`
(coala's configuration file) that is tailored to the project. Currently,
coala-quickstart automatically identifies relevant bears for the project
based on the languages used and has a clean and simple command-line interface
for taking user’s input when required.

However, there’s scope for improvement in the following areas:

- Utilizing information from common configuration files: Some projects have
  configuration files like `Gruntfile.js`, `Gulpfile.js`, `rakefile`,
  `package.json`, etc., which may contain useful data that's relevant to
  coala-quickstart. For example, if a project's Gulpfile.js specifies which
  files are to be linted with csslint, we could use this information to target
  CSSLintBear at exactly these files.
- Improving the interface:
	- Removing non user-friendly warnings.
	- Increasing automation.
	- Validate user input before writing to the generated coafile.
- Continuous Integration: Like other coala repositories, add Appveyor
  (Windows) and Travis (OSX) integartions.


#### Milestones

##### [PREPARATION/BONDING](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/6) 4th May - 29th May
* [X] Identified all the kinds of configuration files to be worked
  on in the project.
* [X] Figure out all the useful information that could be
  extracted from these files.
* [X] Get the cEP https://github.com/coala/cEPs/issues/80 merged.

##### [CODING PHASE 1: Extracting Information](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/20) 30th May - 26th June

* [ ] The basic structure of the information extraction system is implemented.
* [ ] Extract information from `Gruntfile.js`, `package.json` and `Gemfile`.

##### [CODING PHASE 2: Utilizing the Information](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/21) 30th June - 24th July

* [ ] CLI: Add autocomplete feature, add prompts for "detect" and "fix" capabilities.
* [ ] Collect and organize bears' metadata.
* [ ] Filter and recommend bears after utilizing extracted information.

##### [CODING PHASE 3: CLI enhancements](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/22) 28th July - 21st August

* [ ] Validate user input.
* [ ] Fix warning and formattings on the CLI.
* [ ] Continuous Integration.
* [ ] Complete Pending tasks (if any).

##### [Stretch Goals](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/4)

* [ ] Implement `.editorconfig` parser and extract information from `.editorconfig`
* [ ] Extract information from other meta-files.
* [ ] Smart update of generated `.coafile` w.r.t. changes in meta-files.
* [ ] Installing required bear-dependencies using cib.


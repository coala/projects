---
collaborating_projects:
  - coala
desc: "Provide support for writing configurations using
       a standardised file format(TOML)"
difficulty: hard
initiatives:
  - GSoC19
markdown: standardised-file-format.md
mentors:
  - Nosferatul
  - RaiVaibhav
  - ksdme
  - Marcos Gómez
name: "Support TOML for writing configurations"
requirements:
  - "The applicant should have at least one patch merged to
    coala"
  - "The applicant should be familiar with Python."
  - "The applicant should be familiar with coala configuration system"
status: completed
tags:
  - Core
  - Configuration
  - TOML
---

This project aims to support writing configuration files using a
standardised file format like TOML.
Currently coala has a INI style config. It has `LineParser` and `ConfParser`
classes to parse the settings into sections. These sections are later executed
by running the appropriate bear. coala also a `ConfWriter` class to write
sections back into settings file like `.coafile`

This approach has certain limitations. Custom sub-level parsing in
INI style config is tough and error prone. It makes `LineParser` and
`ConfParser` more complex and bug prone and also would slow down the speed of
development. A solution would be to use standardised file format like TOML.
Using `toml.load` on the config file will return a dictionary. This makes
custom sub-level parsing not only easy and accurate but also less error prone.
Also more importantly completely removes the need for `LineParser`.

TOML provides flexibility, consistency, backwards compatibility and standard.
It has widespread acceptance, documentation and robust parsers. TOML has been
recommended as the configuration file for software packages to specify their
build dependencies. Due to its popularity it offers a reduced learning curve
compared to INI style config.

This project aims to provide Toml support for coala-quickstart as well. Also
it will create a tool to convert coafile to TOML files and vice versa.
TomlLintBear will be created as part of this project. Also a repository of
good configuration files will be created to allow users to easily bootstrap
their projects.

As a stretch goal, the project aims to standardise the present coafile syntax
to provide more flexibility.

#### Milestones

##### PREPARATION/BONDING

- The applicant has created and merged a cEP for this project.
- The applicant should be familiar with the codebase.
- The applicant should know how to work with the community.
- The mappings between `.coafile` to `TOML` must be finalised

##### CODING PHASE 1

- Create the mechanism to load TOML config files.
- Create a class named `TomlConfParser` to load settings from TOML
  file into sections.
- Begin work on `TomlConfWriter`.

##### CODING PHASE 2

- Complete `TomlConfWriter` to be able to write sections into
  TOML file.
- Create a tool to convert coafile to TOML file and vice versa
- Provide TOML support to coala-quickstart

##### CODING PHASE 3

- Create TomlLintBear
- Create a repository of good configuration files for major languages
- Create user facing documentation on how to write config files in TOML

Apart from these core milestones, the project shall also try to
fix issues like comment support at https://github.com/uiri/toml.
This will help improve the overall capacity/quality of this project.

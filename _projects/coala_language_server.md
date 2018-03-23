---
collaborating_projects:
  - coala
desc: "Offer coala languager server."
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/coala-vs-code/issues/3"
  - "https://github.com/coala/coala-vs-code/issues/4"
markdown: coala_language_server.md
mentors:
  - gaocegege
name: "coala Language Server"
requirements:
  - "The applicant should have at least one patch accepted to any of the coala repositories."
  - "The applicant should be familiar with language server protocol."
tags:
  - Language Server
  - Plugins
---

The [Language Server Protocol](https://langserver.org/) was created by Microsoft
to define a common language for programming language analyzers to speak.
Today, several companies have come together to support its growth, including
Codenvy, Red Hat, and Sourcegraph, and the protocol is becoming supported by
a rapidly growing list of editor and language communities:

- VS Code
- Eclipse Che
- Eclipse IDE(Eclipse LSP4E)
- IntelliJ / JetBrains IDEs
- Vim
- Atom (WIP)
- Emacs (WIP)

We have a state-of-art implementation in
[coala-vs-code](https://github.com/coala/coala-vs-code) but it is designed
for VS Code only. We need to design and implement a general mechanism for
multiple editors/IDEs support.

The project is divided into two parts:

1. Offer a basic languager server.
2. Implement a plugin based on the language server.

#### Features

- Support linting for multiple programming languages.
- Support 'textDocument/publishDiagnostics', 'textDocument/didChange' and 'textDocument/didSave' requests.
- (Advanced) Multiple plugins Support (e.g. Eclipse Che).

#### Milestones

##### PREPARATION/BONDING

- Design documentation about the language server exists.
  - Architecture of the language server
  - Mechanism to support multiple languages.

##### CODING PHASE 1

- A basic language server for coala exists.
  - Support linting for python.
- Basic test suite exists.
- Basic Documentation exists including asciinema showing the
  functionality working in any LS editor client.

##### CODING PHASE 2

- A basic language server for coala exists.
  - Support multiple kinds of requests.
- Basic test suite exists.
- Basic Documentation exists including asciinema showing the
  functionality working in any LS editor client.

##### CODING PHASE 3

- A language server for coala exists.
  - Support multiple languages.
- A full covering test suite exists.
- Basic Documentation exists including asciinema showing the
  functionality working in any LS editor client.
- PR to add the language server to http://langserver.org opened.

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
markdown: coala-language-server.md
mentors:
  - gaocegege
  - gatesn
  - sadovnychyi
  - stevepeak
name: "coala Language Server"
requirements:
  - "The applicant should have at least one patch accepted to any of the coala repositories."
  - "The applicant should be familiar with language server protocol."
status: completed
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
multiple editors/IDEs support. We also need clients written to support coala
langserver for most if not all the supported editors. This is not because of
the server's inability, but rather the need to configure the front end of the
editor plugin such as defining how to start the server, communicate with it etc.

The project is divided into three parts:

1. Offer a basic language server.
2. Implement a plugin based on the language server.
3. Optimize the coala entry point and language server.

#### Features

- Support linting for multiple programming languages.
- The current language server has implementations for:
  - 'initialize'
  - 'textDocument/didSave'
  - 'textDocument/didChange'
  - 'textDocument/publishDiagnostics'
  - 'shutdown'
  and this project will improve and extend the support to at least
  the following request types:
  - 'exit'
  - 'textDocument/didOpen'
  - 'textDocument/didClose'
  - 'textDocument/formatting'
  - 'window/showMessageRequest'
- (Advanced) Multiple plugins Support (e.g. Eclipse Che).
- Some additional request types that are either out of the scope
  of this project or are marginally redundant to build but which would
  improve the user friendliness or functionality  of this language
  server are:
  - 'textDocument/willSaveWaitUntil'
  - 'workspace/didChangeConfiguration'
  - 'workspace/configuration'
  - 'textDocument/codeAction'
  - 'workspace/executeCommand'
  - 'workspace/applyEdit'
  - 'window/showMessage'

#### Interface Optimizations

The current implementation suffers from massive performance
problems. This is primarily due to the mode in which the
language server interacts with coala. Currently it works by
executing coala via cli and redirecting stdout to language server.
This is not an efficient mechanism because of all the involved
overhead. This projects aims to provide a practical language server
with performance improvements. Some ideas currently under consideration
to achieve the said improvements are:

  - Runtime coala configurations
  - Language Server specific parameters in coafiles
  - Custom entry point into coala

Specific details about each method will be expanded upon
once they are discussed with the community.

#### Milestones

##### PREPARATION/BONDING

- Design documentation about the language server exists.
  - Architecture of the language server.
  - Mechanism to support multiple languages and requests.
- Evaluation on various ways to optimize coala and language
  server interface complete and a related cEP is submitted
  for review.

##### CODING PHASE 1

- A basic language server for coala exists.
  - Support linting for python.
  - Supports initial set of request types:
    - 'initialize'
    - 'textDocument/didOpen'
    - 'textDocument/didSave'
    - 'textDocument/didClose'
    - 'textDocument/publishDiagnostics'
    - 'shutdown'
    - 'exit'
- Test suite exists with 100% coverage.
- Basic Documentation exists including video showing the
  functionality working in any LS editor client.
- Performance metrics of the standalone language server
  exists against a combination of:
  - All the initial set of request types.
  - Various .coafile (bear) configurations.
  - Codebase sizes.

##### CODING PHASE 2

- The Language server now supports:
  - All mentioned request types.
  - Multiple programming languages (at least JS, Java, C, C++, C#).
- Basic langserver client plugin exists.
  - Supports all requests types supported by server.
  - Supports all languages supported by server.
- Basic test suite exists for the client plugin.
- Basic Documentation exists including a video showing the
  functionality working in any LS editor client.
- Performance metrics against all supported request types, languages
  and the supported coala-ls client with langserver exists.

##### CODING PHASE 3

- An optimized language server for coala exists.
  - Optimized entry point into coala.
  - Optimized runtime config filtering.
- A language server client exists.
- Documented performance improvements compared to the previous phases exists.
- A full covering test suite exists for both the client and the server.
- Documentation exists including a video showing the complete
  functionality working in any LS editor client.
- PR to add the language server to http://langserver.org opened.

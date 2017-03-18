ANTLR (ANother Tool for Language Recognition) is a powerful parser generator
for reading, processing, executing, or translating structured text or binary
files. It's widely used to build languages, tools, and frameworks. From a
grammar, ANTLR generates a parser that can build parse trees and also
generates a listener interface (or visitor) that makes it easy to respond to
the recognition of phrases of interest.

Thus ANTLR allows us to create an AST for any programming language we have a
grammar for. Having an abstract syntax tree allows us to write advanced
algorithms for static analysis. What we are looking for in this project is to
have an AST interface within the Bear class. Basically, the Bear writer
provides a flag which lets them traverse the AST of any language source code
they provide.

Hence this project has two targets:

- Successful integration of ANTLR into the coala core providing the user with an AST interface when writing a Bear.
- Writing a basic Bear which tests this functionality using the AST.

References:

- [ANTLR](https://github.com/antlr/antlr4)
- [Grammars](https://github.com/antlr/grammars-v4)

#### Milestones

##### PREPARATION/BONDING

- A clear understanding of ANTLR python endpoints and conceptual knowledge of
how ANTLR works.
- A cEP of how the AST API inside a bear will work and be accessible to the
developer writing the bear.
- A plan for a caching mechanism of language grammars from the
[Grammars](https://github.com/antlr/grammars-v4) repository.

##### CODING PHASE 1

- Bear API for ASTs is done and well documented.
- Testing of the API has begun and most of the areas have been covered.
- A proposal for the sample Bear that is going to implemented.

##### CODING PHASE 2

- The API is merged into coala.
- The implementation for the sample bear is completed and testing has begun.

##### CODING PHASE 3

- The Bear is merged and documented.
- A tutorial is merged which contains instructions on how to write a Bear
using the AST API.



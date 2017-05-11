Vulture is a tool that finds unused classes, functions and variables in your
code.
This information is useful as unused code can be removed without changing the
behavior of a program while making it easier to maintain the remaining code
and slimming down a codebase.
Using the information from vulture, one would normally remove the dead code
manually.
But similar to auto formatting tools it would save a lot of work if there was
a way to remove the code automatically.

This project's aim is to provide such an auto removal feature via a coala bear,
using the information vulture offers.

To reach this goal the VultureBear should be modified to support removing a
source range that vulture declared dead code.

To realize this, some work has to be done upstream at vulture. Namely:

- Make vulture available as a library for easier use for the bear
- Implement a confidence value for results. This is necessary as vulture
  produces false positives so a threshold has to be set what to accept for auto
  removal.
- Make vulture offer source ranges for the dead code. Right now vulture only
  offers the beginning of the dead code, which makes removal hard. This could
  possibly be done by removing everything up to the next node in the python AST.
  Another possibility is that the enhanced AST of pyflakes could offer the
  necessary information.
- In case no way to offer source ranges is found, additional detection cases
  can be implemented for vulture. For example identifying `if False` cases.

References:

- [vulture](https://bitbucket.org/jendrikseipp/vulture)

#### Milestones

##### PREPARATION/BONDING

- A concept for the source range acquisition is finalized.
- Use vulture to report dead code for popular Python projects on Github
- Refine default whitelists for vulture

##### CODING PHASE 1

- Vulture offers its functionality as a library
- The VultureBear uses the new vulture library
- Confidence values are implemented for vulture results

##### CODING PHASE 2

- Create whitelist files for popular Python frameworks like Django
- If a way was found to offer source ranges, the removal of dead code is
  implemented for the VultureBear using a confidence value as threshold.

##### CODING PHASE 3
- Implement additional detection cases for unreachable code
- Update the API to easily transmit newly created data (confidence values, unreachable code, source range, etc.)
- Integrate the resulting API with the VultureBear
- All implemented code is fully tested and documented.

#### Overview
The motivation, here, is to extend the functionality of vulture as a library, and to pass on all metadata through the API
and then to harness this utility in VultureBear for auto removing dead code, which would greatly optimise the bear. The
second part of this project focuses on offering the source range of the dead code which would make auto-removal much
easier. As of now, vulture only supplies the beginning of the dead code. Also, it proposes to enhance vulture in order to
detect unreachable code (like `if False`, `if True else`, any code written after return statements, etc). - this shall help
the user in trimming down their codebase without affecting usability. Also, the third part would be to implement a
confidence value for every result, this shall be helpful when tackling false positives.

![coala-VultureBear-Integration-picture](https://cloud.githubusercontent.com/assets/15556382/26275557/580cae2c-3d81-11e7-89ed-ac1ccbf9dc26.png)

#### Goals
- Modify vulture, such as to extend its core functionality as a library.
- Refactor VultureBear accordingly for ensuring optimal performance.
- Implement a method to acquire the source range of dead code and make suitable changes in the API and Bear.
- Detect the instances of unreachable code, like `if False` statements
- Analyse and implement a confidence value for results.

#### Specifications
##### 1.) Realise vulture’s API in VultureBear

- Extending vulture’s API: This would allow the user to find all the unused code through a single abstract layer: ```get_unused_code```.

	* This can be easily implemented, given the already existing Vulture.scan(), Vulture.report() , Vulture.unused_funcs(), etc. with minimal changes in vulture's code base.

- Enhance VultureBear

	- Refactor VultureBear to directly fetch results through get_unused_code (API), thus making it more efficient- we would have memory files passing (An extra layer of parsing would then be removed) 
	- Further enhancements in vulture (detect unreachable code and reporting ranges of dead code)  would influence the API, which would also need refactoring of the Bear.


##### 2.) Improving default whitelist
The first step here would be to make the whitelist default. The important thing would be to identify possible cases which might cause vulture to report a false positive. This can be achieved through extensive testing with major projects - trending python projects on github would cater to our need for the purpose. This approach would serve us many benefits:

- We can identify instances of what should ideally be in our whitelist file - as we may find any lesser known constructs.
- We can test vulture for any unreported bugs.
- We can find many projects which use/might want to use vulture - they may further collaborate with us in making the whitelists together. (As proposed by [@jendrikseipp](https://github.com/jendrikseipp))
- We can also make whitelists for popular python frameworks like Django, etc.


##### 3.) Acquiring source range and implementing auto-removal
Analyse and discuss with the community the utilities of ast or enhanced pyflake ast for what would better cater to our problem and would offer simplicity for source-range acquisition and arrive at a concrete conclusion. Also, there was another proposal by [@m0hawk](https://bitbucket.org/m0hawk) to get everything until the next node starts. Dialogue here - [#25](https://github.com/jendrikseipp/vulture/issues/25) 

Also, if able to fetch the source range successfully, implement the pathway through which  the metadata flows in and out of API, this would not require much work because  we can easily change item.lineno (int) to item.dead_range (tuple of ints) and can parse them over in the VultureBear.

##### 4.) Detecting unreachable code
We would first need to identify cases where code cannot be reached. Some of the common ones are:

- `If False`
- `If True; else`
- Any code after `return` statement in the block containing return itself.
- `raise` statement  in `try` block.

Similar constructs would have to be looked onto. The crude form of this would be:

- Analyse the ast’s
- Look for the if nodes
- Check the boolean affiliated to it, tracking previous arguments.


##### 5.) Implementing a confidence value for  results
We would need to analyse every construct individually on a case by case basis. For example, we already know that import statements can be predicted with 100% surety (except for * imports, where it would be 0%), but functions often have false-positives.

The confidence value will be alike the ones given below: (The finer grained distinctions will need further discussion)

- `import` -->  `100%`
- `from foo import *` --> `0%`
- `variable` --> `<100%`
- `function` --> `<100%`
- `class` --> `<100%`
- `if False` --> `100%`

References:

- [vulture](https://github.com/jendrikseipp/vulture)
- [Project Proposal](https://docs.google.com/document/d/1gzRH-rdJsiAD-TOEB0O4OqtcnTp0zotcNl6agAuXGHw/edit?usp=sharing)

#### Milestones

##### PREPARATION/BONDING

- A concept for the source range acquisition is finalized.
- Use vulture to report dead code for popular Python projects on Github

##### CODING PHASE 1

- Vulture offers its functionality as a library
- The VultureBear uses the new vulture library
- Confidence values are implemented for vulture results

##### CODING PHASE 2

- Refine default whitelists for vulture
- Create whitelist files for popular Python frameworks like Django
- Refine default whitelists for vulture
- If a way was found to offer source ranges, the removal of dead code is
  implemented for the VultureBear using a confidence value as threshold.

##### CODING PHASE 3
- Implement additional detection cases for unreachable code
- Update the API to easily transmit newly created data (confidence values, unreachable code, source range, etc.)
- Integrate the resulting API with the VultureBear
- All implemented code is fully tested and documented.

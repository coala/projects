Develop an efficient strategy that allows coala to maintain a number of plugins
for different editors.

We consider any bit of code *supported* only if we have regular continuous
integration and tests running to ensure it's functionality.

coala features quite some editor plugins already, none of which are *supported*
according to the above definition. The goal of this project is to plan,
introduce and configure a testing routine that allows coala to ensure the
functioning of it's editor plugins at all times.
A viable approach might be to set up weekly tests for the current editor
plugins. For some editors like sublime and gedit, running tests is not easy and
there is no api to do it. In such cases we  would want to use dogtail
(a GUI tester) or a similar tool to do this.


#### MILESTONES

##### GSOC 2017 CODING STARTS

* A cEP for the testing, documentation and maintaining strategy has been merged.

##### GSOC 2017 MIDTERM

* The testing strategy has been set up for coala.
* At least one of coala's editor plugins is continually tested.

##### GSOC 2017 FINAL

* At least three of coala's editor plugins are continually tested.
* Documentation is available to easily set up testing for future editor plugins.

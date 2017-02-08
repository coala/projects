coala features quite a few editor plugins already, none of which are
*supported* by the definition of having regular continuous integration and
tests running to ensure its functionality. The goal of this project is to
plan, introduce and configure a testing routine that allows coala to ensure
the functioning of its editor plugins at all times. Presently, the lack of a
proper testing environment leads to the breakdowns of plugins going unnoticed.
A viable approach might be to set up weekly tests for the current editor
plugins.

The goal is to develop an efficient strategy that allows coala to maintain a
number of plugins for different editors. This would not only benefit coala by
attracting more developers as the plugins across various platforms will be
widely used, but it would also benefit the end-users by giving them a working
linter plugin across their favourite editors which are easily maintained and
tested regularly with the latest build of coala.

For sublime, we'll be using the
[unittest plugin](https://github.com/randy3k/UnitTesting)
which is a plugin by itself.
For atom, we have the apm testing architecture
which does not require a GUI.
For VI and emacs, we will most likely use a testing framework such as
[Vimcasts](https://github.com/kana/vim-vspec).
For some editors like gedit, running tests is not easy and
there is no api to do it. In such cases we  would want to use
[dogtail](https://fedorahosted.org/dogtail/)
(a GUI tester) or a similar tool to do this.

We will have to explore the possibility of having a single git repository for
atom, sublime-text and vim as it will ultimately be easier to maintain in the
long run and will have a proper CI, which can be easily managed. Issues will
be raised more frequently as a result of this.

Documentation which isn't available at the moment will have to describe the
usage details of existing plugins, we can have asciicinemas or gifs of the
entire process from installation to examples of the plugins in action.
Documentation can also be created for future plugins, and on the basis of the
tests which will be written for the existing ones, it'll be easier to test
the future plugins. This will result in a clear cut path of creating plugins
for coala.


#### MILESTONES

##### PREPARATION/BONDING

* A cEP for the testing, documentation and maintaining strategy has been merged.

##### CODING PHASE 1

* The testing strategy has been set up for coala.
* At least one of coala's editor plugins is continually tested.

##### CODING PHASE 2

* Documentation and tutorials showing the usage of existing plugins is
  available.
* Maintaining strategy is placed into effect.

##### CODING PHASE 3

* At least three of coala's editor plugins are continually tested.
* Documentation is available to easily set up testing for future editor plugins.

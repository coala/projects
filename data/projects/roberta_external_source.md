For children and students, learning to program becomes increasingly accessible
through programming platforms like the Open Roberta Lab and Code.org, etc..
While these platforms provide resources and an environment for novices to explore
and learn, the browser-centric nature of the exercises and toolchain makes it hard to retrieve
content, learn about proper project structure, and use third party tools that
are increasingly used by developers, like static code analysis and code generation.

This proposed project is about loading online resources instead of inserting local files
into the one-click linter on the coala homepage. This will give students the chance
to check the coding style and other interesting properties of their projects in
the browser, without jumping through hoops to retrieve their work from a remote
source, and installing and learning to use coala's command line interface.

The project should allow, for example, for a student to load and check NEPO-programs from the
Open Robert Lab directly from the browser. This can later be extended to
allow for other remote sources, like code.org, 5code, or github/bitbucket projects
to be checked according to the language hints provided by the respective APIs.

Open Roberta is a platform for students of any age to program consumer-grade
robotics-hardware in a visual manner, using a blockly-like language called `NEPO`.
Roberta is a long established international project initiated by the Fraunhofer IAIS
that aims at nurturing interest in STEM and robotics in young women and students.
Using Open Roberta as an extensible platform instead of proprietary programmers
specific to certain robotics hardware is an important part of Roberta's main goal
of accessibility and outreach for young women and students of all ages.

The student will work with members from the coala team, and members from
Fraunhofer IAIS and other Roberta-related projects. The student may acquire
additional certification through Fraunhofer IAIS in Sankt Augustin, Germany.

#### Milestones

##### PREPARATION/BONDING

* Familiarity with the OpenRoberta partner project is established and a method for external access is designed and implemented in a basic fashion
* A design goal is reached with the coala project on how to integrate external data sources into the coala web page, including mock-ups and a prototype implementation for the UI

##### CODING PHASE 1

* A bear for downloaded NEPO-programs is created that checks for certain simple properties of the program, like nesting depths and whether any part of the program tree is undefined. The specific properties shall be defined in the GSoC application.
* The infrastructure for downloading external resources through the web interface is established and working in a basic fashion

##### CODING PHASE 2

* A NEPO program stored on the Open Roberta Lab can be checked from the web interface
* The infrastructure for downloading external resources through the web interface is well documented and loaders for other resource locations can easily be added
* All necessary changes to the webpage UI are implemented

##### CODING PHASE 3

* A NEPO program stored on the Open Roberta Lab can be checked from the web interface and a user receives useful advice about the quality of their project
* A github repository can be checked from the web interface. A useful collection of bears is chosen using github's project language hints.

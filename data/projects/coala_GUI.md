The main aim of this project is to create a GUI for coala to make code Analysis even easier for users. A GUI would be the easiest way for users to get familiar with coala and it's functionalites. With more and more bears and other functionalites that may be added to coala, the number of commands will increase, and hence the user has to get more accustomed. Because GUI is much more visually intutive as compared to CLI, it would be very easy for user to explore coala's functionalities without worrying about any commands. This project basically requires intergration of current features of coala into coala GUI.

What features can GUI provide?

* Currently multiple files are being selected either by file names or using glob patterns. With GUI, user can manually select single/multiple files (without learning glob patterns).
* User will be able to manually select bears. There can be two options quick-select and just select. In quick-select, it is assumed that user knows the functionality of bear and needs no detailed description of bear and in other case, detailed description of bear would be provided.
* The user would be able to control the output format (json, html or a dedicated window/part for resulting the output in app itself). 
* The user can view/edit/run .coafile with options of executing single/multiple sections manually.
* GUI can suggest best suited configuration file for the selected files (Basically integration of coala-GUI with coala-quickstart)

Apart from above mentioned features, it depends on applicant's creativity to add new features.

#### Milestones

#### GSOC 2017 CODING STARTS

* The applicant is familiar with core coala codebase.
* The applicant is familiar with the library which is to be used (preferably PyQt5).
* Basic layout of GUI is ready.

#### GSOC 2017 MIDTERM

* The GUI is working with minimum functionalities. (user is able to load files and select the required bears and gets option for atleast one output format).
* The GUI is able to execute sections and display its results in a specific format.

#### GSOC 2017 FINAL

* The GUI is fully integrated with coala-quickstart (user has the option of generating automatic configuration file).
* The GUI is fully functional with mentioned features.
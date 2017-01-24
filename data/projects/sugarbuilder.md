
##### Rationale

Glycans are tree-like molecules, which decorate the surface of proteins. Also known as sugars or carbohydrates, they play a critical role in biological processes differentially so in healthy vs. pathological conditions. As such, they can potentially be used as diagnosis or prognosis biomarkers. Growing interest in this class of molecules prompts the need for an intuitive web interface where they can be easily drawn prior to querying bioinformatics resources.

[![glycanDrawing.jpg](https://s23.postimg.org/9m89ckv1n/glycan_Drawing.jpg)](https://postimg.org/image/lbc90jm07/)

A tool like GlycanBuilder already provides a solution, but it was designed for users with a fair knowledge of glycobiology. As such it lacks intuitiveness for naïve users and, more importantly, is hardly ever updated. In this context, we started the development of a new online framework called SugarBuider.

[![sugarbuilder.png](https://s29.postimg.org/bzwydr47r/sugarbuilder.png)](https://postimg.org/image/v507niivn/)

SugarBuilder is composed of two components: (1) a JavaScript library designed to handle glycan information in a graph-like data structure; (2) a web interface, developed with D3js, which allows the user to draw glycan structures in a browser.


##### Approach

SugarBuilder is currently a prototype in which many aspects are only drafted or need refinement and improvement. In this context, a few milestones could be reached through the Google Summer of Code (GSoC):

-	Add features, debug and enrich the prototyped web interface

-	Enhance the JavaScript library by adding parsers and writers for different glycan encoding standards.

-	Possibly create a Web component using Google Polymer.


The candidate will first review the existing code and since we strongly support creativity and welcome new input, we will consider any suggestion improving usability and code efficiency.




##### Challenges

The work combines creativity and programming challenges. The candidate should come up with new ideas for the user interface to enhance its usability and flexibility (creativity challenges). Then, the implementation phase will bring out unforeseen problems related to software development (programming challenges).



##### Requirements

The candidate should have a good knowledge in web development, especially with JavaScript and D3js. Creativity and design skills related to web interface development are considered an advantage. Prior knowledge of glycobiology is not a requisite and documentation will be sent ahead of the GSoC time to provide the candidate with minimal information regarding this class of molecules and its formal representations.

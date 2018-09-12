Bagi anak-anak dan siswa, belajar program menjadi semakin mudah diakses
melalui platform pemrograman seperti Open Roberta Lab dan Code.org, dll.
Sementara platform ini menyediakan sumber daya dan lingkungan bagi pemula untuk menjelajah dan belajar,
sifat browser-sentris dari latihan dan toolchain membuatnya sulit untuk mengambil konten,
belajar tentang struktur proyek yang tepat, dan menggunakan alat pihak ketiga
semakin banyak digunakan oleh developer, seperti static code analysis dan code generation.

Proyek yang diusulkan ini adalah lebih ke tentang memuat sumber online
daripada memasukkan file lokal ke one-click linter di homepage coala.
Ini akan memberi siswa kesempatan untuk memeriksa gaya pengkodean dan sifat menarik lainnya
dari proyek mereka di browser, tanpa melompat keluar lingkaran untuk mengambil pekerjaan mereka
dari sumber jarak jauh, dan menginstal dan belajar menggunakan command line interface coala.

[penerjemahan belum selesai]

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

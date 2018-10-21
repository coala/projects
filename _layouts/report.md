---
---

<!DOCTYPE html>
<html>
    <head>
        <title>{{ page.student }} | Project Report </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <link rel="stylesheet" href="/resources/css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css">
        <link rel="stylesheet" href="https://rawgit.com/coala/coalaCSS/master/coala.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,300i,400,400i,700,700i|Roboto:100,200,300,400,500,600,700,800,900|Ubuntu+Mono|Overpass+Mono|Inconsolata" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body class='report'>
        <div class="container">
        <br>
            <div class="row no-margin">
                <div class="col m12">
                    <h4 class="left light">Google Summer of Code {{ page.date | date: '%Y' }} Work Product Submission </h4>
                </div>
                <br>
            </div> 
            <br>
            <div class="row no-margin">
                <div class="col m6">
                    <div class="card flex1">
                        <div class="card-content">
                            <h5 class="light no-margin"><a href="{{page.organisation_link}}">{{ page.organisation }}</a></h5>
                            <h3 class="light">{{ page.student }}</h3>
                            <p>{{page.bio | markdownify}}</p>
                        </div>
                    </div>
                </div>
                <div class="col m3">
                    <div class="card flex1">
                        <div class="card-content">
                            <div class="center"><h4 class="light no-margin">Project Title</h4></div>
                            <br>
                            <div class="center"><a href="{{page.project_link}}">{{ page.project }}</a></div>
                        </div>
                    </div>
                    <div class="card flex1">
                        <div class="card-content">
                            <div class="center"><h4 class="light no-margin">GSoC Blog</h4></div>
                            <br>
                            <div class="center"><a class="blog-link" href="{{ page.blog }}">{{ page.blog }}</a></div>
                        </div>
                    </div>
                </div>
                <div class="col m3">
                    <div class="card flex1">
                        <div class="card-content links-section">
                            {% for ih in page.social %}
                                <div class="link">
                                {% for item in ih %}
                                    <div class="row no-margin ">
                                        <div class="col m6">{{item[0]}}</div>
                                        <div class="col m6"><a href="{{item[1][1]['link']}}">{{item[1][0]['username']}}</a></div>
                                    </div>
                                {% endfor %}
                                </div>
                                {% if forloop.last == false %}<div class="divider"></div>{% endif%}
                            {% endfor %}
                            <br>
                            <div class="row no-margin center">
                                <div class="col m3"><i class="fa fa-envelope-o"></i></div>
                                <div class="col m9"><a href="mailto:{{ page.email }}">{{ page.email }}</a></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row no-margin">
                <div class="col m2">
                    <div class="card flex1">
                        <div class="card-content">
                            <div class="center"><h5 class="light no-margin">Patches Tarball</h5></div>
                            <br>
                            <div class="center"><a href="{{ page.tarball }}">Download</a></div>
                        </div>
                    </div>
                </div>
                {% for ih in page.phase %}
                    {% for item in ih %}
                        <div class="col m2">
                            <div class="card flex1">
                                <div class="card-content">
                                <div class="center"><h5 class="light no-margin">{{item[0]}}</h5></div>
                                <br>
                                <div class="center"><a href="{{item[1]}}">View Milestone</a></div>
                                </div>
                            </div>
                        </div>
                    {% endfor %}
                {% endfor %}
                <div class="col m2">
                    <div class="card flex1">
                        <div class="card-content">
                        <div class="center"><h5 class="light no-margin">Mentors</h5></div>
                        <br>
                        <div class="center">{{ page.mentors  | markdownify }}</div>
                        </div>
                    </div>
                </div>
            </div>  
            <br>
             <div class="row no-margin">
                <div class="col m12">
                    <h5 class="left light">Links to commits and repositories I've worked on:</h5>
                </div>
                <br>
            </div>
            <div class="no-margin">
                <table class="padding-table">
                    <thead class="no-border">
                        <tr class="blue-grey-text text-lighten-2">
                            <td></td>
                            <td>Repository</td>
                            <td>Link to Commit/s</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody class="card activity">
                        {% for commits in page.activity %}
                        {% for c in commits %} 
                           <tr>
                                <td class="fl">{{ c[1][0]["repo"] | slice: 0 }}</td>
                                <td class="">&nbsp;{{ c[1][0]["repo"] }}</td>
                                <td><a href='{{ c[1][1]["link"] }}'>View</a></td>
                                <td>{{ c[1][2]["details"] | markdownify}}</td>
                           </tr>
                        {% endfor %}                      
                        {% endfor %}
                    </tbody>
                </table>
            </div>
            <br>
            <div class="content card">
                <div class="card-content">
                    {{page.content  | markdownify }}
                </div>
            </div>
            <br><br>
        </div>
    </body>
</html> 

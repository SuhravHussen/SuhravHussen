const fs = require("fs");

const Mustache = require("mustache");

const articlesData = [
  { title: "My First Blog Post", url: "https://myblog.com/first-post" },
  { title: "Understanding Jinja2", url: "https://myblog.com/jinja2" },
];

const weatherData = [
  { date: "2023-09-15", forecast: "Sunny" },
  { date: "2023-09-16", forecast: "Cloudy" },
];

const template = `
<h1 align="center"><b>Hi , I'm Suhrav Hussen </b><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
<!--  -->
<p align="center">
  <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Assalamu+O+Alaikum+Warahmatullah..&hearts;++;I'm a self-taught+developer;++;I'm from  from moulvibazar, sylhet "></a>
</p>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>
<!--  -->

<h3>My resent articles</h3>
<table>
{{#articles}}
        <tr>
            <td width="300px">
                <a href="https://suhravhussen.xyz/blogs/{{id}}">
                    <img src={{image}} alt="thumbnail">
                </a>
            </td>
            <td>
            <a href="https://suhravhussen.xyz/blogs/{{id}}">{{title}}</a>
                <div>{{text}}</div>
                <div><i>26/10/2023</i></div>
            </td>
        </tr>
        {{/articles}}
</table>

<div align="right">

*Updated at: 2023-12-09T06:27:54Z - by **[Suhrav Hussen](https://suhravhussen.xyz)***
</div>

`;

const renderedReadme = Mustache.render(template, {
  articles: articlesData,
  weathers: weatherData,
});

fs.writeFileSync("README.md", renderedReadme);

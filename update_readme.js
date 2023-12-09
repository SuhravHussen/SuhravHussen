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
<!DOCTYPE html>

<html
 
lang="en">

<head>

  
<meta
 
charset="UTF-8">

  
<meta
 
name="viewport"
 
content="width=device-width, initial-scale=1.0">

  
<title>{{title}}</title>

</head>

<body>
  <header>
    <img src="{{cover_image}}" alt="{{title}}">
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  </header>

  <main>
    ## Articles

    {{#articles}}
      <article>
        <h2>{{title}}</h2>
        <p>By Suhrav Hussen on 2023</p>
        <img src="{{image}}" alt="{{title}}">
      
      </article>
    {{/articles}}

  </main>


</body>
</html>
`;

const renderedReadme = Mustache.render(template, {
  articles: articlesData,
  weathers: weatherData,
});

fs.writeFileSync("README.md", renderedReadme);

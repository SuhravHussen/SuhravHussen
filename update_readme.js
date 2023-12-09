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
# My Awesome Blog

## Articles

{{#articles}}
* **[{{title}}]({url})**
{{/articles}}

## Weather Forecast

{{#weathers}}
* **{{date}}:** {{forecast}}
{{/weathers}}
`;

const renderedReadme = Mustache.render(template, {
  articles: articlesData,
  weathers: weatherData,
});

fs.writeFileSync("README.md", renderedReadme);

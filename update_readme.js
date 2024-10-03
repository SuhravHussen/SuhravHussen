const fs = require("fs");
const Mustache = require("mustache");

async function fetchBlogs(currentPage) {
  try {
    const response = await fetch(
      `${process.env.BASEURL}/api/blog/allblogs?pageNumber=${currentPage}&perPage=7`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response;
  } catch (error) {
    console.error("Error fetching blogs :", error);
    throw error;
  }
}

fetchBlogs(1)
  .then((res) => res.json())
  .then((articlesData) => {
    // Preprocess data to format dates
    articlesData.blogs.forEach((article) => {
      const date = new Date(article.createdAt);
      article.createdAt = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    });

    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const template = `
<h1 align="center"><b>Hi , I'm Suhrav Hussen </b><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
<!--  -->
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=25&duration=3000&pause=1000&vCenter=true&random=false&width=435&lines=Assalamualaikum+warahmatullah;I'm+Suhrav+Hussen+Sourov;I'm+from+moulvibazar%2C+Sylhet+;Working+with+javascript+" alt="Typing SVG" /></a>
<!--  -->

<h1>My recent articles</h3>
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
                <div><i>{{createdAt}}</i></div>
            </td>
        </tr>
        {{/articles}}
</table>

<br/>


<p align="center">
  <a href="https://github.com/SuhravHussen">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SuhravHussen&theme=radical" alt="Al Siam's GitHub Contribution"/>
  </a>
</p>
<br/>
<h3 align="center" > <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30" height="30" style="margin-right: 10px;">Connect with me 🤝 </h3>

<!--  -->
<p align="center">
<div align="center"  class="icons-social" style="margin-left: 10px;"><a style="margin-left: 10px;"  target="_blank" href="https://www.linkedin.com/in/suhravhussen/">
			  <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png">
       </a>
        <a style="margin-left: 10px;" target="_blank" href="https://github.com/SuhravHussen">
          <img src="https://img.icons8.com/doodle/40/000000/github--v1.png">
        </a>
	  	<a style="margin-left: 10px;" target="_blank" href="https://suhravhussen.xyz">
      <img src="https://img.icons8.com/dusk/40/domain.png"> 
      </a>
	  	<a style="margin-left: 10px;" target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&to=suhravshan@gmail.com&tf=cm">
		  <img src="https://img.icons8.com/plasticine/40/gmail-new.png" >
      </a>
 </div>
</p>
`;

    const renderedReadme = Mustache.render(template, {
      articles: articlesData.blogs,
      currentDate,
    });

    fs.writeFileSync("README.md", renderedReadme);
  })
  .catch((e) => console.log(e));

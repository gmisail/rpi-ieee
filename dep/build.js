const frontmatter = require('@github-docs/frontmatter');
const fs = require('fs');

const posts = "./posts";

const schema = {
  properties: {
    title: {
      type: 'string',
      required: true
    }
  }
}

function render_post(name)
{
	fs.readFile(`${posts}/${name}`, (err, data) => {
  		if (err) {
    		throw err; 
  		}
  		
  		const { post_data, content, errors } = frontmatter(data.toString());
  		
	});
}

function render_posts(err, files)
{
	if(err)
	{
		console.error(err);
		return;
	}

	files.forEach(render_post);
}

function load_posts()
{
	try 
	{
    	fs.readdir(posts, render_posts);
  	} 
	catch (err) 
	{
  		console.error(err);
	}
}

load_posts();
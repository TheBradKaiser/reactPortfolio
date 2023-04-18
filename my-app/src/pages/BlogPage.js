
import React from 'react';
import "./BlogPage.css"
const BlogPost = (item,index) => {
        //return a list object of project name: year, then ul of points
        console.log(item.item)

        return <div class="div-container-2"><h2>{item.item.title}</h2>
        <p><i>{item.item.date}</i></p>
        
        <p>{item.item.body}</p>
        </div>
        
        }
        
const BlogPage = () => {
    let posts = require("..//static//blogPosts.json")

    posts = posts.sort((a,b)=>{
        if (a.date>b.date){
            return -1
        }
    })

    return <div><h1 class="h1-title">Blog</h1>
    <div class="div-container">
            {posts.map((item,index)=>(
                <BlogPost item={item} index={index} />
            ))}
</div>
    </div>

}

export default BlogPage;


import json
import os
from datetime import datetime
import shutil

#This function is run on start/deploy so the blog posts in the named directory will get formatted into json.

jsonDir="./src/static/blogPosts.json"
blogsDir="../blogs/blog_template.txt"
blogArchiveDir="../blogs/blogArchive/"
now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
def updateBlogs():
    print("checking for new blogs...")
    #1.  check for new blogs
    def check_for_new_blog()-> dict or False:
        with open(blogsDir, 'r') as f:
            lines = [line.strip() for line in f.readlines()]
        if len(lines)>1:
            return {"title":lines[0],"body":'\n'.join(lines[1:]), "date":now}
        return False
    
    def get_json_data()-> list:
        with open(jsonDir, "r") as f:
            jsonList = json.load(f)
        return jsonList

    def get_next_id(jsonList:dict)->int:
        return max(item["id"] for item in jsonList)+1

    def recompile_file(jsonList):
        with open(jsonDir,"w") as f:
            json.dump(jsonList,f,indent=4)

    def archive_blog():
        dest = blogArchiveDir+"blogPost_"+now.replace(":","")+'.txt'
        shutil.move(blogsDir,dest)

    def create_blog_template():
        with open(blogsDir,"w") as f:
            pass
            


    newBlog = check_for_new_blog()
    if newBlog == False:
        print("No new blogs found, aborting blog update.")
        return 500
    
    jsonList = get_json_data()
    newBlog["id"] = get_next_id(jsonList)
    print(newBlog)

    jsonList.append(newBlog)

    recompile_file(jsonList)

    archive_blog()
    create_blog_template()
    return 200

print(updateBlogs())
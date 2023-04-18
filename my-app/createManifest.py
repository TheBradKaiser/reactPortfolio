import json
import os
import shutil
import urllib.parse


directory = '..\\AI-Images-preprocessed\\'
try:
    cwd = os.getcwd()
    listOfData=[]

    for root, dirs, files in os.walk(directory):
        for file in files:
            tempDict={}
            # get the relative path of the file
            relative_path = os.path.relpath(os.path.join(root, file), cwd)
            
            print(relative_path)
            tempDict["category"]=relative_path.split("\\")[2]
            tempDict["Prompt"]=relative_path.split("-")[-1].split(",")[0]
            newFileName = relative_path.split("\\")[-1].replace(" ","-").replace(",","")
            newpath = ".\\public\\assets\\images\\"+tempDict["category"]+"-"+urllib.parse.quote(newFileName)
            print(newpath)
            print("before shutil")
            try:
                shutil.copyfile(relative_path,newpath)
            except Exception as e:
                print("error occured in copying")
                print(str(e))
                pass
            newpath = newpath[8:].replace("\\", "/")


            tempDict["path"]=newpath

            listOfData.append(tempDict)
            # print(relative_path)
    # print(listOfData)
    outputFile = ".\\src\\static\\imgmanifest.json"
    with open(outputFile, 'w+') as f:
        json.dump(listOfData,f,indent=4)
except Exception as e:
    print("error occured in whole script")
    print(str(e))
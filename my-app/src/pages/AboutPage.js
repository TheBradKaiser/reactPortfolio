
import React from 'react';
import './AboutPage.css'


const Skill = (item,index) => {
// console.log(item.item.subSkills.length)
//if the item has subitems, create a bolded entry that can be hovered over to see subskills
    if (item.item.subSkills.length > 0){
        return <li key={index} class='parent-item'> 
            <b>{item.item.skill}</b>
            {item.item.subSkills.length > 0 && (
                <ul class='sub-items'>
                    {item.item.subSkills.map((subSkill,subIndex) => (
                    <li key={subIndex}>{subSkill}</li>
                ))}
                </ul>
                )}
                </li>
    }
    else
    {
        return <li key={index} class='parent-item-no-child'>
            {item.item.skill}
        </li>
    }
}
const Skills = () => {
    let skills = require("..//static//skillList.json")
    skills = skills.sort((a,b)=>{
        if (a.skill<b.skill){
            return -1
        }
    })
    
    return <div class="skill-list div-container">
        <h2>Skills</h2>
        <div class="div-container-2">
    <ul class="parent-list">
    {skills.map((item,index) => (
        <Skill item={item} index={index} />
    ))}
  </ul></div></div>
}

const Project = (item,index)=>{
//return a list object of project name: year, then ul of points
console.log(item.item)
return <li key={index}>
    <b>{item.item.project}</b> - <i>{item.item.year}</i> 
    {item.item.points.length > 0 && (
        <ul>
            {item.item.points.map((point,pointIndex) =>(
                <li key={pointIndex}>{point}</li>
            ))}
        </ul>
    )}
</li>

}

const Projects = () => {
    let projects = require("..//static//projectList.json")

    projects = projects.sort((a,b)=>{
        if (a.year>b.year){
            return -1
        }
    })
    let personalProjects = projects.filter(item=>item.type ==="Personal")
    personalProjects = personalProjects.sort((a,b)=>{
        if (a.year>b.year){
            return -1
        }
    })
    let professionalProjects = projects.filter(item=>item.type ==="Professional")
    professionalProjects = professionalProjects.sort((a,b)=>{
        if (a.year>b.year){
            return -1
        }
    })

    return <div class="project-list">
        <h2>Projects</h2>
        <div class='pro-projects'>
        <h3>Professional Projects</h3>
        <ul class="parent-list">
            {professionalProjects.map((item,index)=>(
                <Project item={item} index={index} />
            ))}
        </ul>
        </div>
        <br></br>
        <div class='pro-projects'>
        <h3>Personal Projects</h3>
        <ul class="parent-list">
            {personalProjects.map((item,index)=>(
                <Project item={item} index={index} />
            ))}
        </ul>
        </div>
    </div>

}

function AboutPage() {
    return <div><h1 class='h1-title'>Learn a little more about me!</h1>
    <div class='column-container'>
    <div class='left-column'><Skills /></div>
    <div class='right-column'><Projects /></div>
    </div>
    </div>
    ;
  }

export default AboutPage;


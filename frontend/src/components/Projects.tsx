import { useState, useEffect } from "react";
import api from "../api";

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project, i) => (
        <div key={i}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View</a>
        </div>
      ))}
    </div>
  );
}

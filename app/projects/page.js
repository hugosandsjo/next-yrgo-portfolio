// import projects from "@/app/api/projects.json";
import client from "../lib/contenful";

const getProjects = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  return res.items;
};

const data = await getProjects();

export default async function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      {data.map((project) => (
        <div key={project.fields.slug}>
          <h2>{project.fields.title}</h2>
          <p>{project.fields.github}</p>
          <p>{project.fields.demo}</p>
          <p>{project.fields.description}</p>
        </div>
      ))}
    </main>
  );
}

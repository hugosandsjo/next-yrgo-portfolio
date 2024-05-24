// import projects from "@/app/api/projects.json";
import client from "../../lib/contenful";

const getProjects = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  return res.items;
};

const data = await getProjects();

export default function Project({ params }) {
  const projectTitle = params.slug.toLowerCase();

  const matchingProject = data.find(
    (project) => project.fields.slug.toLowerCase() === projectTitle
  );

  if (matchingProject === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <h1>{matchingProject.fields.title}</h1>
        <p>{matchingProject.fields.description}</p>
        <a href={matchingProject.fields.github}>GitHub</a>
        <a href={matchingProject.fields.demo}>Live Demo</a>
      </div>
    </main>
  );
}

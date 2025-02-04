import React from "react";
import Link from "next/link";

const projects = [
  {
    id: "fm-global",
    name: "FM Global",
    description:
      "Developed risk analysis systems and predictive models for business continuity.",
    duration: "Sep 2022 - Present",
  },
  {
    id: "ups",
    name: "UPS",
    description:
      "Built logistics tools and migrated monolithic systems to GCP microservices.",
    duration: "Mar 2021 - Aug 2022",
  },
  {
    id: "state-of-rhode-island",
    name: "State of Rhode Island",
    description:
      "Migrated legacy systems to microservices with real-time Kafka data processing.",
    duration: "Dec 2019 - Feb 2021",
  },
  {
    id: "equifax",
    name: "Equifax",
    description:
      "Developed secure APIs and automated testing for customer service applications.",
    duration: "Sep 2018 - Nov 2019",
  },
  {
    id: "birlasoft",
    name: "BirlaSoft",
    description:
      "Developed web applications and migrated projects to Azure cloud environments.",
    duration: "May 2013 - Nov 2016",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-gray-500">Duration: {project.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

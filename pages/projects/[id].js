import { useRouter } from "next/router";

const projectDetails = {
  "fm-global": {
    name: "FM Global",
    description:
      "Developed risk analysis systems and predictive models for business continuity.",
    details: `
      - Built risk analysis systems using Angular, React, and Node.js.
      - Developed microservices architecture using Spring Boot.
      - Designed ETL pipelines with Google Cloud Platform and Apache Flink.
    `,
    technologies: ["Angular", "React", "Node.js", "Spring Boot", "GCP"],
    duration: "Sep 2022 - Present",
  },
  ups: {
    name: "UPS",
    description:
      "Built logistics tools and migrated monolithic systems to GCP microservices.",
    details: `
      - Designed REST APIs for shipping and logistics tools.
      - Migrated legacy systems to GCP microservices using Spring Boot.
      - Implemented CI/CD pipelines using Jenkins and Kubernetes.
    `,
    technologies: ["Spring Boot", "GCP", "Jenkins", "Kubernetes"],
    duration: "Mar 2021 - Aug 2022",
  },
  "state-of-rhode-island": {
    name: "State of Rhode Island",
    description:
      "Migrated legacy systems to microservices with real-time Kafka data processing.",
    details: `
      - Migrated legacy systems to cloud-native microservices.
      - Implemented Kafka streaming for real-time data processing.
      - Built dashboards using Angular 8 and Grails.
    `,
    technologies: ["Kafka", "Angular 8", "Grails", "AWS"],
    duration: "Dec 2019 - Feb 2021",
  },
  equifax: {
    name: "Equifax",
    description:
      "Developed secure APIs and automated testing for customer service applications.",
    details: `
      - Developed REST APIs using Spring MVC and Hibernate.
      - Automated tests using Selenium and JUnit.
      - Deployed services to AWS and Azure environments.
    `,
    technologies: ["Spring MVC", "Hibernate", "AWS", "Azure"],
    duration: "Sep 2018 - Nov 2019",
  },
  birlasoft: {
    name: "BirlaSoft",
    description:
      "Developed web applications and migrated projects to Azure cloud environments.",
    details: `
      - Designed web applications using JSP, Servlets, and Struts.
      - Migrated applications to Azure and implemented REST APIs.
      - Integrated Google Maps and Bing APIs into web pages.
    `,
    technologies: ["JSP", "Struts", "Azure", "Google Maps API"],
    duration: "May 2013 - Nov 2016",
  },
};

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="text-lg text-gray-300 mb-4">{project.description}</p>
        <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
        <p className="text-gray-300 whitespace-pre-line mb-4">{project.details}</p>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <ul className="list-disc pl-5 text-gray-300 mb-4">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <p className="text-gray-500">Duration: {project.duration}</p>
        <a
          href="/projects"
          className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full transition"
        >
          Back to Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-300 max-w-4xl text-center mb-6">
        With over 9 years of experience in software development, I specialize in
        creating dynamic, scalable, and secure web applications. I'm proficient
        in full-stack development using technologies like Angular, React, Node.js,
        and Spring Boot. I’ve worked extensively with RESTful APIs, Microservices,
        and cloud technologies like AWS and Docker.
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-4xl">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Frontend Skills</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>React.js, Angular</li>
            <li>HTML, CSS, TailwindCSS</li>
            <li>JavaScript, TypeScript</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Backend Skills</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Spring Boot, Node.js</li>
            <li>Hibernate, JPA</li>
            <li>Microservices Architecture</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tools</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Docker, Kubernetes</li>
            <li>JIRA, IntelliJ</li>
            <li>GitHub, Bitbucket</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Databases</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>MongoDB, Cassandra</li>
            <li>Oracle, SQL Server</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

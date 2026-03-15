import { useState } from "react"

export default function ProjectsField() {

	const projects = [
		{
			title: "Leets",
			tech: "TypeScript, Express, React, Next.js, Tailwind, MongoDB, WebSockets",
			description: "Block-based writing tool with embedded chat combining documentation, collaboration, and blogging in one seamless experience.",
			tasks: [
				"Engineered a secure authentication system using JWT, session management and password hashing in a microservices architecture, strengthening platform security and login reliability.",
				"Delivered a real-time chat system using Socket.IO, implementing an event-driven architecture with persistent storage that resulted in a responsive social messaging."
			]
		},
		{
			title: "Inception",
			tech: "Docker, Docker Compose",
			description: "",
			tasks: [
				"Deployed a multi-service web app with Docker, Nginx, MySQL, and WordPress managing containers, service communication, and SSL security."
			]
		},
		{
			title: "HTTP Server",
			tech: "C++, Sockets",
			description: "",
			tasks: [
				"Developed an HTTP/1.1 web server in C++ from scratch that mimics NGINX behavior handling multiple client requests and serving static and dynamic content."
			]
		},
		{
			title: "Unix CLI",
			tech: "C, Bash",
			description: "",
			tasks: [
				"Implemented a custom Unix shell supporting command execution, pipes, redirections, and built-in commands with reliable parsing and error handling."
			]
		}
	];

	const toRender = projects.map((project, idx) => (
		<div key={idx}>
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-semibold">{project.title}</h3>
				<p className="italic text-gray-500 text-sm"> {project.tech} </p>
			</div>
			<p className="text-gray-500 text-sm">{project.description} </p>
			{project.tasks.map((task, idx) => (
				<div className="flex" key={idx}>
					<p className="text-gray-700 ml-4 mt-1.5 text-[9px]">&#9679;</p>
					<p className="text-gray-700 ml-2">{task}</p>
				</div>
			))}
		</div>
	))

	return (
		<>
			{toRender}
		</>
	);
}
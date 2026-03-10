export default function Projects() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-1">Projects</h2>
      <hr className='mb-3'></hr>

      <div className="space-y-3">

        <div>
          <h3 className="font-semibold">Inception</h3>
          <p className="text-sm text-gray-500 mb-1">
            Docker, Docker Compose
          </p>
          <p className="text-gray-700">
            Deployed a multi-service web app with Docker, Nginx, MySQL, and
            WordPress managing containers, service communication, and SSL
            security.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">HTTP Server</h3>
          <p className="text-sm text-gray-500 mb-1">
            C++, Sockets
          </p>
          <p className="text-gray-700">
            Developed an HTTP/1.1 web server that mimics NGINX behavior in C++
            handling multiple client requests and serving static and dynamic
            content with CGI execution.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Unix CLI</h3>
          <p className="text-sm text-gray-500 mb-1">
            C, Bash
          </p>
          <p className="text-gray-700">
            Implemented a custom Unix shell supporting command execution,
            pipes, redirections, and built-in commands with reliable parsing
            and error handling.
          </p>
        </div>

      </div>
    </section>
  )
}
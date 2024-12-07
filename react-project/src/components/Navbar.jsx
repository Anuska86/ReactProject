export default function Navbar() {
  return (
    <header>
      <nav>
        <img
          className="react-facts"
          src="src/imgs/react-facts.png"
          alt="React Facts"
        />
        <h1>Navbar goes here</h1>
        <ul>
          <li>
            React was initially developed by Jordan Walke, a software engineer
            at Facebook, and it was first deployed on Facebook’s newsfeed in
            2011.{" "}
          </li>
          <li>It was later open-sourced in 2013.</li>
          <li>
            React’s primary goal was to solve the problem of efficiently
            updating the user interface in large-scale applications.
          </li>
          <li>
            In the React universe, there lies a mysterious concept known as the
            React Fiber.
          </li>
        </ul>
      </nav>
    </header>
  );
}

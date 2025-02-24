import React from "react";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div>
      <h1>Our Services</h1>
      <ServiceCard title="Web Development" description="Building modern and responsive website" />
      <ServiceCard title="Graphic Design" description="Creating stunning visual and brand design" />
    </div>
  );
}

export default App;
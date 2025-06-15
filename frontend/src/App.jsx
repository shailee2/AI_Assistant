import { useState } from "react";

function App() {
  
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit() {
    try {
      const res = await fetch("http://localhost:3001/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setResponse(data.answer || "No response.");
    } catch (err) {
      console.error("Error:", err);
      setResponse("❌ Error connecting to backend.");
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>AI Assistant (Mixtral via DeepInfra)</h1>
      <textarea
        rows="5"
        style={{ width: "100%", padding: "0.5rem" }}
        placeholder="Ask something which can be understood by a language model..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        Submit
      </button>
      <pre style={{ marginTop: "1rem", background: "#f4f4f4", padding: "1rem" }}>
        {response}
      </pre>
    </div>
  );
}

export default App;

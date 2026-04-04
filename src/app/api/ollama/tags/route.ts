
const OLLAMA_BASE = "http://localhost:11434";

export async function GET() {
    try {
        const res = await fetch(`${OLLAMA_BASE}/api/tags`);
        if (res.ok) {
            const data = await res.json();
            return Response.json(data);
        }
        return new Response("Ollama not reachable", { status: 502 });
    } catch {
        return new Response("Ollama not reachable", { status: 502 });
    }
}

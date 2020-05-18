import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import "https://deno.land/x/dotenv/mod.ts";

const PORT = Deno.env.get('PORT') || 8080;
const s = serve(`0.0.0.0:${PORT}`);
const body = new TextEncoder().encode("Hello World, this is Deno\n");

console.log(`Server started on port ${PORT}`);
for await (const req of s) {
  req.respond({ body });
}
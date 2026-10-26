Deno.serve({ port: 3000 }, (_req) => {

  // console.log("Deno req log");
  
  return new Response("Hello from Deno on Anzar!");
});


console.log("Deno server listening on port 3000...");

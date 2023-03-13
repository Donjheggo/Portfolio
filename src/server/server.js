import { createServer, Response } from "miragejs";

createServer({

    routes() {
        this.namespace = 'api';
        this.logging = false;
        // this.timing = 2000;
        this.passthrough("https://firestore.googleapis.com/**")
        
        this.get("/projects", (schema) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.vans.all();
        })
        this.get("/project/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
    
})
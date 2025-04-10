import express from "express";
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'


const app = express();


app.use(express.json());
app.use('/api',employeesRoutes);
app.use(indexRoutes);




const port = 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
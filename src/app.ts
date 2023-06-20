import express from 'express';
import productsRouter from './routers/product.routes';
import ordersRouter from './routers/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/orders', ordersRouter);

export default app;
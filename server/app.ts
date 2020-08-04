import koa from 'koa';
import next from 'next';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app
  .prepare()
  .then(() => {
    const server = new koa();
    const router = new Router();

    // 通配符注入

    // 其余未匹配路由处理
		router.get('*', async ctx => {
			await app.render(ctx.req, ctx.res, '/', ctx.query)
      ctx.status = 200;
      ctx.respond = false;
    });

    // 中间件注入

    server.use(bodyParser());
		server.use(router.routes());
  })

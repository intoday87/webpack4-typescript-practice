import * as Koa from 'koa'
import * as mount from 'koa-mount'
import * as serve from 'koa-static'
import * as path from 'path'

const app = new Koa()

app.use(
    mount(
        '/',
        serve(path.join(process.cwd(), 'public'), {
            extensions: ['html'],
        }),
    ),
)

const port = 3000;
app.listen(port, () => {
    console.log(`running server on ${port} port...`)
})

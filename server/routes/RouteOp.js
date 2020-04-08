module.exports = (app) => {
    app.get("/op", (req, res) => {
            res.send("<h1>HELLO QASIM!! It's OP</h1>");
        }),
        app.get('/newop', (req, res) => {
            res.send(`<div style="color:green">
			THIS IS NEW OP
	</div>`)
        })
}
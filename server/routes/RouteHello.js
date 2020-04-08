module.exports = (app) => {
    app.get("/hello", (req, res) => {
        res.send("<h1>HELLO QASIM!!</h1>");
    })
    app.get('/helloNew', (req, res) => {
        res.send(`<div style="color:red">
			THIS IS NEW HELLO
	</div>`)
    })
}
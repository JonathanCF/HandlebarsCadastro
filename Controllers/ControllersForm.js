
var clientes = []


module.exports = class ControllerForm {
	static index(req, res)
	 {
		res.render('home')
	 }

	static lista(req, res, next)
	{
		res.render('lista', {
			cliente: clientes
	  })
	}
	
	static cadastro(req, res)
	 {
		let nome = req.body.cliente
		let cliente = {
			nome: nome
		}	

			clientes.push(cliente)

    res.render('home', {
        cliente: clientes
    })
	 }
	
	static deletar(req, res)
	{

	}

	}
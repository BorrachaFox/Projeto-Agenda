exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: req.csrfToken()
    });
    return;
};

exports.paginaPost = (req, res) => {
    res.send(req.body)
};

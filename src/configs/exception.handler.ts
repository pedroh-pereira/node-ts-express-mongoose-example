import HttpException from '~/exceptions/HttpException'

function exceptionHandler (err, _, res, __) {
  const { code, title, message } = err
  if (err instanceof HttpException) {
    res.status(err.code).json({ code, title, message })
  }

  res.status(500).json({
    title: 'Erro interno',
    message: err.message
  })
}

export { exceptionHandler }

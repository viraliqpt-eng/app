import multer from 'multer';

export function apiNotFound(request, response, next) {
  if (request.path.startsWith('/api/')) {
    return response.status(404).json({ message: 'Rota da API não encontrada' });
  }
  next();
}

export function errorHandler(error, request, response, next) {
  if (response.headersSent) return next(error);

  if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
    return response.status(413).json({ message: 'A imagem ultrapassa o limite permitido' });
  }

  const status = Number(error.status) || 500;
  if (status >= 500) console.error(error);
  response.status(status).json({
    message: status >= 500 ? 'Ocorreu um erro interno' : error.message
  });
}

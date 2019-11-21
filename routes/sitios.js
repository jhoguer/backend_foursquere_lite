const express = require('express');
const { sitiosMock } = require('../utils/mocks/sitios');

function sitiosApi(app) {
  const router = express.Router();
  app.use('/api/sitios', router);

  router.get('/', async function(req, res, next) {
    try {
      const sitios = await Promise.resolve(sitiosMock);

      res.status(200).json({
        data: sitios,
        message: 'sitios listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:sitioId', async function(req, res, next) {
    try {
      const sitios = await Promise.resolve(sitiosMock[0]);

      res.status(200).json({
        data: sitios,
        message: 'sitio listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    try {
      const createSitioId = await Promise.resolve(sitiosMock[0].id);

      res.status(201).json({
        data: createSitioId,
        message: 'site created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:sitioId', async function(req, res, next) {
    try {
      const updateSiteId = await Promise.resolve(sitiosMock[0].id);

      res.status(200).json({
        data: updateSiteId,
        message: 'sitios update',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:sitioId', async function(req, res, next) {
    try {
      const deletedSiteId = await Promise.resolve(sitiosMock[0].id);

      res.status(200).json({
        data: deletedSiteId,
        message: 'sitios deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = sitiosApi;


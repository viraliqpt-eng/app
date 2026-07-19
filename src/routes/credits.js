import { Router } from 'express';

export function createCreditsRouter({ store, generationCost }) {
  const router = Router();

  router.get('/', async (request, response, next) => {
    try {
      const wallet = await store.getOrCreate(request.walletId);
      response.json({
        wallet: store.toPublic(wallet),
        generationCost,
        freeVideoAvailable: wallet.balance >= generationCost
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}

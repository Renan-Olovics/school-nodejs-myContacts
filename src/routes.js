import { Router } from 'express'

import { contactController } from './app/controllers'

const router = Router()

router.get('/contacts', contactController.index)
router.get('/contacts/:id', contactController.show)
router.delete('/contacts/:id', contactController.delete)

export { router }
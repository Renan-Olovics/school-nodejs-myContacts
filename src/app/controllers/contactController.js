import { contactRepository } from '../repositories'

class ContactController {
  async index (req, res) {
    const contacts = await contactRepository.findAll()
    res.json(contacts)
  }

  async show (req, res) {
    const { id } = req.params

    const contact = await contactRepository.findById(id)

    if (!contact) return res.status(404).json({ error: 'Contact not found' })

    res.json(contact)
  }

  store () {
    // Criar um registro
  }

  update () {
    // Atualizar um registro
  }

  async delete (req, res) {
    const { id } = req.params

    const contact = await contactRepository.findById(id)

    if (!contact) return res.status(404).json({ error: 'Contact not found' })

    await contactRepository.delete(id)
    res.sendStatus(204)
  }
}

// Singleton - https://refactoring.guru/pt-br/design-patterns/singleton
const contactController = new ContactController()

export { contactController }

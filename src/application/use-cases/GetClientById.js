export default class GetClientById {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(id) {
    return await this.clientRepository.findById(id);
  }
}
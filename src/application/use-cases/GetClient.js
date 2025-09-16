export default class GetClients {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute() {
    return await this.clientRepository.findAll();
  }
}

export default class CreateClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(data) {
    return await this.clientRepository.create(data);
  }
}

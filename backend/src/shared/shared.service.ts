import { Repository } from 'typeorm';

export abstract class SharedService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async save(entityToCreate) {
    return this.repository.save(entityToCreate);
  }

  async update(entityToUpdate) {
    return this.repository.update(entityToUpdate.id, entityToUpdate);
  }

  async delete(id) {
    return this.repository.delete(id);
  }

  async find(findOptions) {
    return this.repository.find(findOptions);
  }

  async findOne(findOptions) {
    return this.repository.findOne(findOptions);
  }
}

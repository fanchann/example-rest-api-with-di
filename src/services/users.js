class UsersService {
    constructor(repository) {
      this.repository = repository;
    }

    // create a new user
    async createUser(user) {
      if (!user.name || !user.email) {
        throw new Error('Name and email are required');
      }
      return await this.repository.create(user);
    }
  
    // get all users
    async getAllUsers() {
      return await this.repository.readAll();
    }
  
    // get a user by ID
    async getUserById(id) {
      if (!id) {
        throw new Error('User ID is required');
      }
      return await this.repository.readById(id);
    }
  
    // update a user
    async updateUser(id, updatedData) {
      if (!id || !updatedData) {
        throw new Error('User ID and updated data are required');
      }
      return await this.repository.update(id, updatedData);
    }
  
    // delete a user
    async deleteUser(id) {
      if (!id) {
        throw new Error('User ID is required');
      }
      return await this.repository.delete(id);
    }
  }
  
  module.exports = UsersService;
  
class UsersController {
    constructor(service) {
      this.service = service;
    }
  
    // create a new user
    async createUser(req, res) {
      try {
        const user = req.body;
        const createdUser = await this.service.createUser(user);
        res.status(201).json(createdUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  
    // get all users
    async getAllUsers(req, res) {
      try {
        const users = await this.service.getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  
    // get a user by ID
    async getUserById(req, res) {
      try {
        const { id } = req.params;
        const user = await this.service.getUserById(Number(id));
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  
    // update a user
    async updateUser(req, res) {
      try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedUser = await this.service.updateUser(Number(id), updatedData);
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json("success update user");
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  
    // delete a user
    async deleteUser(req, res) {
      try {
        const { id } = req.params;
        const success = await this.service.deleteUser(Number(id));
        if (!success) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  }
  
  module.exports = UsersController;
  
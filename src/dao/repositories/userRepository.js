// dao/repositories/userRepository.js
import UserDAO from '../../persistence/mongo/user.dao.js';

class UserRepository {
  async getUserByEmail(email) {
    return UserDAO.getUserByEmail(email);
  }

  async createUser(user) {
    return UserDAO.createUser(user);
  }

}

export default new UserRepository();

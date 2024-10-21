import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu thông tin người dùng mới
export const storeUserData = async (phoneNumber, name) => {
  try {
    const userData = {
      phoneNumber,
      name,
      lastLogin: new Date().toISOString(),
    };
    
    // Lấy danh sách người dùng hiện có
    const existingUsers = await getAllUsers();
    
    // Kiểm tra xem số điện thoại đã tồn tại chưa
    const userIndex = existingUsers.findIndex(user => user.phoneNumber === phoneNumber);
    
    if (userIndex !== -1) {
      // Cập nhật thông tin nếu số điện thoại đã tồn tại
      existingUsers[userIndex] = {
        ...existingUsers[userIndex],
        lastLogin: new Date().toISOString(),
      };
    } else {
      // Thêm người dùng mới nếu chưa tồn tại
      existingUsers.push(userData);
    }
    
    // Lưu lại danh sách người dùng
    await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Lưu người dùng hiện tại
    await AsyncStorage.setItem('currentUser', JSON.stringify(userData));
    
    return true;
  } catch (error) {
    console.error('Error storing user data:', error);
    return false;
  }
};

// Lấy thông tin người dùng hiện tại
export const getCurrentUser = async () => {
  try {
    const userData = await AsyncStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Lấy danh sách tất cả người dùng
export const getAllUsers = async () => {
  try {
    const users = await AsyncStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
};

// Lấy thông tin người dùng bằng số điện thoại
export const getUserData = async (phoneNumber) => {
  try {
    const allUsers = await getAllUsers();
    const user = allUsers.find(user => user.phoneNumber === phoneNumber);
    return user || null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

export const removeCurrentUser = async () => {
  try {
    await AsyncStorage.removeItem('currentUser');
    return true;
  } catch (error) {
    console.error('Error removing current user:', error);
    return false;
  }
};

export const updateUserData = async (phoneNumber, updatedData) => {
  try {
    const users = await getAllUsers();
    const userIndex = users.findIndex(user => user.phoneNumber === phoneNumber);
    
    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        ...updatedData,
      };
      await AsyncStorage.setItem('users', JSON.stringify(users));
      
      const currentUser = await getCurrentUser();
      if (currentUser && currentUser.phoneNumber === phoneNumber) {
        await AsyncStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating user data:', error);
    return false;
  }
};
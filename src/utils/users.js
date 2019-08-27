const users = [];

const addUser = ({ id, username, room }) => {
  const tmpUsername = username.trim().toLowerCase();
  const tmpRoom = room.trim().toLowerCase();
  if (!tmpUsername || !tmpRoom) {
    return { error: "Username and room are required!" };
  }
  const existingUser = users.find(
    user => user.room === tmpRoom && user.username === tmpUsername
  );

  if (existingUser) {
    return {
      error: "Username is in use"
    };
  }

  const user = { id, username: tmpUsername, room: tmpRoom };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => {
  const tmpRoom = room.trim().toLowerCase();
  return users.filter(user => user.room === tmpRoom);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};

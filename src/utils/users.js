const users = [];
const rooms = new Set();

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
  rooms.add(tmpRoom);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    const { room } = users[index];
    const result = users.splice(index, 1)[0];
    if (!users.some(user => user.room === room)) {
      rooms.delete(room);
    }
    return result;
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => {
  const tmpRoom = room.trim().toLowerCase();
  return users.filter(user => user.room === tmpRoom);
};

const getRoomList = () => Array.from(rooms);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getRoomList
};

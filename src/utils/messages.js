const generateMessage = (username, text) => ({
  username,
  text,
  createdAt: new Date().getTime()
});

const generateLocationMessage = (username, { longitude, latitude }) => ({
  username,
  url: `https://google.com/maps?q=${latitude},${longitude}`,
  createdAt: new Date().getTime()
});

module.exports = { generateMessage, generateLocationMessage };

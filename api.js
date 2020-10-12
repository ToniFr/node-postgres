const inMemoryHorrors = [
  {
    name: 'The Hills Have Eyes',
    rating: 7.8
  },
  {
    name: 'The Night of Living Dead',
    rating: 9.0
  },
  {
    name: 'The Scream',
    rating: 7.2
  }
];

const getAllHorrors = async (request, response) => {
  response.status(200).json(inMemoryHorrors);
};

const getHorrorById = (request, response) => {
  response.status(200).json(inMemoryHorrors[0]);
};

const addHorror = async (request, response) => {
  const { name, rating } = request.body;
  inMemoryHorrors.push({ name, rating });
  response.status(201).send(`Horror added successfuly.`);
};

const updateHorror = (request, response) => {
  const { name, rating } = request.body;
  inMemoryHorrors[0] = { name, rating };
  response.status(200).send(`First horror in list is updated.`);
};

const deleteHorror = (request, response) => {
  inMemoryHorrors.shift();
  response.status(200).send(`First horror in list is deleted.`);
};

module.exports = {
  getAllHorrors,
  getHorrorById,
  addHorror,
  updateHorror,
  deleteHorror
};

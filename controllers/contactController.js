const getContact = (req, res) => {
  res.status(200).send("getting contacts from controller");
};

const postContact = (req, res) => {
  res.status(201).send("post contacts from controller");
};

module.exports = { getContact, postContact };

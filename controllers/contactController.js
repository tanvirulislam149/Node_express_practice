const getContact = async (req, res) => {
  res.status(200).send("getting contacts from controller");
};

const postContact = async (req, res) => {
  console.log("body", req.body);
  res.status(201).send("post contacts from controller");
};

module.exports = { getContact, postContact };

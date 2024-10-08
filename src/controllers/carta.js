const naipe_controller = require("./naipe.js");
const db = [];
let proxId = 1;

const model = (body, id = proxId) => {
  if (body.nome != "" && body.nome != undefined &&
      body.naipe_id != undefined && naipe_controller.show(carta.naipe_id)
  ) {
    return {
      id: id,
      nome: body.nome,
      naipe_id: carta.naipe_id
    };
  }
};

const store = (body) => {
  const elemento = model(body);
  if (elemento) {
    db.push(elemento);
    return 201;
  }
  return 400;
};

const show = (id) => db.find((el) => id == el.id);

const index = () => db;

const update = (id, body) => {
  const index = db.find((el) => id == el.id);
  const novo = model(body, index);
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  const index = db.find((el) => el.id == id);
  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  store,
  show,
  index,
  update,
  destroy,
};

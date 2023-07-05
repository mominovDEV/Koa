const getClients = (ctx) => {
  ctx.body = "Clients";
};

const getClient = (ctx) => {
  ctx.body = "ID=" + ctx.params.id;
};

const addClient = (ctx) => {
  ctx.status = 201;
  ctx.body = ctx.request.body;
};

module.exports = {
  getClients,
  getClient,
  addClient,
};

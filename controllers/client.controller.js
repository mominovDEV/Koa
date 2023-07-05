const getClients = (ctx) => {
  ctx.body = "Clients";
};

const getClient = (ctx) => {
  ctx.body = "ID=" + ctx.params.id;
};

const addClient = async (req, res) => {
  try {
    const {
      client_last_name,
      client_first_name,
      client_phone_number,
      client_info,
      client_photo,
    } = ctx.request.body;

    const newClient = await pool.query(
      `
        insert into client (client_last_name,client_first_name,client_phone_number,client_info,client_photo)
        values($1,$2,$3,$4,$5) returning *
        `,
      [
        client_last_name,
        client_first_name,
        client_phone_number,
        client_info,
        client_photo,
      ]
    );
    ctx.status = 201;
    ctx.body = newClient.rows[0];
  } catch (error) {
    console.log(error);
    res.status(500).json("Serverda xatolik");
  }
};

module.exports = {
  getClients,
  getClient,
  addClient,
};

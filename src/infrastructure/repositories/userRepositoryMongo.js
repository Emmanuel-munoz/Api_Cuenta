import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  documento: { type: String, required: true, unique: true },
  nombreCompleto: { type: String, required: true },
  numeroDeCuenta : { type: Number, required: true },
  saldo: { type: String, required: true}
  
});
// Aquí se registra el modelo en mongoose
const ClientModel = mongoose.model("Client", clientSchema);

export class ClientRepositoryMongo {
  async create(data) {
    return await ClientModel.create(data);
  }

  async findAll() {
    return await ClientModel.find();
  }

  async findById(id) {
    return await ClientModel.findById(id);
  }

  async update(id, data) {
    return await ClientModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await ClientModel.findByIdAndDelete(id);
  }
}

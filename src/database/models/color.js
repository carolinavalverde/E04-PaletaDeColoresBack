import mongoose from "mongoose";

const { Schema } = mongoose;

const colorSchema = new Schema({
  color: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return (
          /^[a-zA-Z]+$/.test(value) || /^#([0-9A-Fa-f]{3}){1,2}$/.test(value)
        );
      },
      message:
        "El color debe ser un nombre de color en inglés o un código de color en hexa",
    },
  },
});

const Color = mongoose.model("Color", colorSchema);

export default Color;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const webHooksDataSchema = new Schema(
  { },
  { timestamps: true }
);

webHooksDataSchema.methods.toJSON = function () {
  const hookData = this;
  const hookDataObject = hookData.toObject();

  return hookDataObject;
};

export default model('webHooksData', webHooksDataSchema);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ManufactureDocument = HydratedDocument<Manufacture>;

@Schema({ timestamps: true })
export class Manufacture {
  _id: string;

  @Prop()
  workCode: string;

  @Prop()
  referenceId: string;

  @Prop()
  dateReceipt: Date;

  @Prop()
  customer: string;

  @Prop()
  deadline: Date;

  @Prop()
  condition: string;

  @Prop()
  mat: string;

  @Prop()
  platingType: string;

  @Prop()
  otherPro: string;

  @Prop()
  price: number;

  @Prop()
  amountBill: number;

  @Prop()
  balance: number;

  @Prop()
  invenUpdate: number;

  @Prop()
  workShift: string;

  @Prop()
  jig: string;

  @Prop()
  chub: string;

  @Prop()
  productOrder: string;
}

export const ManufactureSchema = SchemaFactory.createForClass(Manufacture);

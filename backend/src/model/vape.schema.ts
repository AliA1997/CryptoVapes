/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Flavor } from './flavor.schema';
import { User } from './user.schema';
export type VapeDocument = Vape & Document;

@Schema()
export class Vape {
    @Prop({ required: true })
    name: string;
    @Prop()
    thumbnail: string;
    @Prop()
    customEthereumPrice: number;
    @Prop()
    customBitcoinPrice: number;
    @Prop()
    customUsdcPrice: number;
    @Prop({ required: true })
    price: number;
    @Prop()
    clearancePrice: number;
    @Prop()
    clearanceDate: Date;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Flavor'})
    flavor: Flavor;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    createdBy: User;
}

export const VapeSchema = SchemaFactory.createForClass(Vape);
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Flavor {
    @Prop()
    name: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: User;
}

export const FlavorSchema = SchemaFactory.createForClass(Flavor);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  link: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {

    @Prop(
        {
            required: true,
            unique: true
        }
    )
    title: string;

    @Prop(
        {
            required: true,
            unique: true
        }
    )
    excerpt: string;

    @Prop(
        {
            required: true,
            unique: true
        }
    )
    description: string;
};

export const BlogSchema = SchemaFactory.createForClass(Blog)
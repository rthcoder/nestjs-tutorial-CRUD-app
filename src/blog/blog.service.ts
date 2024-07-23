import { Injectable } from '@nestjs/common';
import { Dto } from './dto/dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
    blogs: Dto[]

    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) { }

    async getAllBlogs() {
        return this.blogModel.find()
    };

    async getById(id: string) {
        return this.blogModel.findById(id)
    };

    async create(dto: Dto) {
        return this.blogModel.create(dto)
    };

    async update(id: string, dto: Dto) {
        return this.blogModel.findByIdAndUpdate(
            {
                _id: id
            },
            {
                $set: {
                    title: dto.title,
                    excerpt: dto.excerpt,
                    description: dto.description
                }
            },
            {
                new: true,
                useFindAndModify: false
            }

        )
    };

    async delete(id: string) {
        return this.blogModel.findByIdAndDelete(id)
    };
};
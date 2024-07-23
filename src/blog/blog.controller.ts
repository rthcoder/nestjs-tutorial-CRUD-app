import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Dto } from './dto/dto'
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }


    @HttpCode(201)
    @Get()
    async getAll() {
        return this.blogService.getAllBlogs();
    };

    @HttpCode(201)
    @Get(":id")
    async getById(@Param("id") id: string) {
        return this.blogService.getById(id);
    };;

    @HttpCode(201)
    @Post()
    async create(@Body() dto: Dto) {
        return this.blogService.create(dto);
    };

    @HttpCode(201)
    @Put(":id")
    async update(@Param("id") id: string, @Body() dto: Dto) {
        return this.blogService.update(id, dto);
    };

    @HttpCode(201)
    @Delete(":id")
    async delete(@Param("id") id: string) {
        return this.blogService.delete(id);
    };
}
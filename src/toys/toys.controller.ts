// jatekok.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { JatekokService } from './toys.service';
import { Jatek } from '@prisma/client';

@Controller('jatekok')
export class JatekokController {
  constructor(private readonly jatekokService: JatekokService) {}

  @Post()
  async create(@Body() body: { megnevezes: string; anyag: string; suly: number }): Promise<Jatek> {
    return this.jatekokService.create(body);
  }

  @Get()
  async findAll(): Promise<Jatek[]> {
    return this.jatekokService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Jatek> {
    return this.jatekokService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: { megnevezes?: string; anyag?: string; suly?: number }): Promise<Jatek> {
    return this.jatekokService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Jatek> {
    return this.jatekokService.remove(id);
  }
}

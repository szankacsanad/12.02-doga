// gyerekek.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GyerekekService } from './gyerek.service';
import { Gyerek } from '@prisma/client';

@Controller('gyerekek')
export class GyerekekController {
  constructor(private readonly gyerekekService: GyerekekService) {}

  @Post()
  async create(@Body() body: { nev: string; cim: string; joE: boolean }): Promise<Gyerek> {
    return this.gyerekekService.create(body);
  }

  @Get()
  async findAll(): Promise<Gyerek[]> {
    return this.gyerekekService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Gyerek> {
    return this.gyerekekService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: { nev?: string; cim?: string; joE?: boolean }): Promise<Gyerek> {
    return this.gyerekekService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Gyerek> {
    return this.gyerekekService.remove(id);
  }

  @Post(':gyerekId/jatek/:jatekId')
  async addJatekToGyerek(@Param('gyerekId') gyerekId: number, @Param('jatekId') jatekId: number) {
    return this.gyerekekService.addJatekToGyerek(gyerekId, jatekId);
  }
}

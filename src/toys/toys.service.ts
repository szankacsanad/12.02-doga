// jatekok.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Jatek } from '@prisma/client';

@Injectable()
export class JatekokService {
  constructor(private prisma: PrismaService) {}

  async create(data: { megnevezes: string; anyag: string; suly: number }): Promise<Jatek> {
    return this.prisma.jatek.create({
      data,
    });
  }

  async findAll(): Promise<Jatek[]> {
    return this.prisma.jatek.findMany();
  }

  async findOne(id: number): Promise<Jatek> {
    return this.prisma.jatek.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { megnevezes?: string; anyag?: string; suly?: number }): Promise<Jatek> {
    return this.prisma.jatek.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Jatek> {
    return this.prisma.jatek.delete({
      where: { id },
    });
  }
}

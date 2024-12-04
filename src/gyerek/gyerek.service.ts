// gyerekek.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Gyerek } from '@prisma/client';

@Injectable()
export class GyerekekService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nev: string; cim: string; joE: boolean }): Promise<Gyerek> {
    return this.prisma.gyerek.create({
      data,
    });
  }

  async findAll(): Promise<Gyerek[]> {
    return this.prisma.gyerek.findMany();
  }

  async findOne(id: number): Promise<Gyerek> {
    return this.prisma.gyerek.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { nev?: string; cim?: string; joE?: boolean }): Promise<Gyerek> {
    return this.prisma.gyerek.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Gyerek> {
    return this.prisma.gyerek.delete({
      where: { id },
    });
  }

  // Játék hozzárendelése gyerekhez
  async addJatekToGyerek(keroId: number, jatekId: number) {
    return this.prisma.keres.create({
      data: {
        keroId,
        jatekId,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor(private readonly config: ConfigService) {
    super({
      datasource: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}

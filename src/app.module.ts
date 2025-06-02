import { Module, Controller, Get } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Controller()
class RootController {
  @Get()
  getRoot() {
    return {
      message: 'Home Library API',
      documentation: '/doc',
      users: '/users',
    };
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [RootController],
})
export class AppModule {}

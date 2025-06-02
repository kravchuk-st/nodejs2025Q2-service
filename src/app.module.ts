import { Module, Controller, Get } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TracksModule } from './tracks/tracks.module';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';

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
    TracksModule,
    ArtistsModule,
    AlbumsModule,
  ],
  controllers: [RootController],
})
export class AppModule {}

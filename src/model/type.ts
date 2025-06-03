import { User } from 'src/users/entities/user.entity';
import { Track } from 'src/tracks/entities/track.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Album } from 'src/albums/entities/album.entity';

export interface Database {
  users: User[];
  artists: Artist[];
  tracks: Track[];
  albums: Album[];
  favorites: Favorites;
}

export interface Favorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}

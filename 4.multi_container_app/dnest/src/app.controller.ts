import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';


@Controller()
export class AppController {
  constructor(
    @InjectRepository(Movie) 
    private readonly repository: Repository<Movie>
  ) { }

  @Get()
  async getMovies(): Promise<Movie[]> {
    return await this.repository.find();
  }
}

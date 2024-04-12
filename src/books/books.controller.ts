import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBookdto } from './dto/create-book.dto';
import { UpdateBookdto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  // get books
  @Get()
  getBooks() {
    return [];
  }
  // get single book/:id -->{}
  @Get(':id')
  getSingleBook(@Param('id') id: string) {
    return {
      id,
    };
  }

  // post book
  @Post()
  createBook(@Body() createBookdto: CreateBookdto) {
    return {
      title: createBookdto.title,
    };
  }

  // patch book /:id -->
  @Put()
  updateBook(@Param('id') id: string, @Body() updateBookdto: UpdateBookdto) {
    return {
      id,
      title: updateBookdto.title,
    };
  }
  //  delete book /:id -->
  @Delete()
  deleteBook(@Param('id') id: string) {
    return {
      id,
    };
  }
}

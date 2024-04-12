import { PartialType } from '@nestjs/mapped-types';
import { CreateBookdto } from './create-book.dto';

export class UpdateBookdto extends PartialType(CreateBookdto) {}

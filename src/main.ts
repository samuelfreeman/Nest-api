import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(port, () => {
    console.log(`Server started listening at port ${port}`);
  });
}
bootstrap();

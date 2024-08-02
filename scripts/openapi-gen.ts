import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { register } from 'tsconfig-paths';

async function generateApiClient() {
  console.log('Started api client generation');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { AppModule } = require('../src/app.module');
  const app = await NestFactory.create(AppModule, { logger: false });
  const config = new DocumentBuilder().addTag('api').build();

  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('./api.json', JSON.stringify(document));

  await app.close();
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsConfig = require('../tsconfig.json');
register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

generateApiClient()
  .then(() => {
    console.log('Api client generated');

    process.exit(0);
  })
  .catch((error) => {
    console.log('Failed to generate api client');
    console.error(error);
    process.exit(1);
  });

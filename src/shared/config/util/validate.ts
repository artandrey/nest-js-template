import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { AppConfigModel } from '../models/app-config.model';

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(AppConfigModel, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

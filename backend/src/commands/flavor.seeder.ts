import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { FlavorService } from '../shared/flavor.service';
import * as flavorData from '../shared/flavorData.json';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const flavorService = app.get(FlavorService);
  for (let i = 0; i < flavorData.data.length; i++) {
    const currentFlavor = flavorData.data[i];
    await flavorService.save(currentFlavor);
  }

  process.exit();
})();

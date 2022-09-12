import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { FlavorService } from '../shared/flavor.service';
import flavorData from '../shared/flavorData.json';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const flavorService = app.get(FlavorService);
  for (let i = 0; i < flavorData.length; i++) {
    const currentFlavor = flavorData[i];
    flavorService.save(currentFlavor);
  }

  process.exit();
})();

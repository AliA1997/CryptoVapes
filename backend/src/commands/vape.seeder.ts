import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Flavor } from '../model/flavor';
import { FlavorService } from '../shared/flavor.service';
import { VapeService } from '../vape/vape.service';
import * as vapeData from '../shared/vapeData.json';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const flavorService = app.get(FlavorService);
  const vapeService = app.get(VapeService);
  const flavors = await flavorService.find({});
  for (let i = 0; i < vapeData.data.length; i++) {
    const vape = vapeData.data[i];
    const flavor = flavors.find((flav: Flavor) =>
      vape.name.includes(flav.name),
    );
    await vapeService.save({
      ...vape,
      thumbnail: flavor.thumbnail,
      flavor: flavor.id,
    });
  }

  process.exit();
})();

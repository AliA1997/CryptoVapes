import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Flavor } from 'src/model/flavor';
import { FlavorService } from 'src/shared/flavor.service';
import { VapeService } from 'src/vape/vape.service';
import vapeData from '../shared/vapeData.json';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const flavorService = app.get(FlavorService);
  const vapeService = app.get(VapeService);
  const flavors = await flavorService.find({});
  for (let i = 0; i < vapeData.length; i++) {
    const vape = vapeData[i];
    const flavor = flavors.find((flav: Flavor) =>
      vape.name.includes(flav.name),
    );
    await vapeService.save({
      ...vape,
      flavor: flavor.id,
    });
  }

  process.exit();
})();

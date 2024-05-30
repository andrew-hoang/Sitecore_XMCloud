import { generateComponentBuilder } from '@sitecore-jss/sitecore-jss-dev-tools/nextjs';
import {
  ComponentBuilderPluginConfig,
  ComponentBuilderPlugin as ComponentBuilderPluginType,
} from '..';
import { getComponentList } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Generates the component builder file.
 */
class ComponentBuilderPlugin implements ComponentBuilderPluginType {
  order = 9999;

  exec(config: ComponentBuilderPluginConfig) {
    const filesToExclude = [
      '.stories',
      '.props',
      '.mock',
      '.test',
      '.query',
      '.context',
      '.util',
      '.string',
      '.dictionary',
    ];

    config.components = getComponentList('src/components').filter((c) => {
      return !filesToExclude.some((v) => c.componentName?.includes(v));
    });

    generateComponentBuilder(config);

    return config;
  }
}

export const componentBuilderPlugin = new ComponentBuilderPlugin();

import type { Schema, Struct } from '@strapi/strapi';

export interface About0About extends Struct.ComponentSchema {
  collectionName: 'components_about0_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    info: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about0.about': About0About;
    }
  }
}

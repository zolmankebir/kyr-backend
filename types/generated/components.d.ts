import type { Schema, Attribute } from '@strapi/strapi';

export interface RepresentativeInfoRepresentativeInfo extends Schema.Component {
  collectionName: 'components_representative_info_representative_infos';
  info: {
    displayName: 'Representative_Info';
    icon: 'book';
    description: '';
  };
  attributes: {
    Role: Attribute.Enumeration<['Senator', 'Mp', 'MCA']>;
    Party: Attribute.String;
    Photo: Attribute.Media<'images' | 'videos'>;
  };
}

export interface ContactContactInfo extends Schema.Component {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'Contact_info';
    icon: 'envelop';
  };
  attributes: {
    Phone: Attribute.String;
    Email: Attribute.Email;
    Website: Attribute.String;
    Social_Media_Links: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'representative-info.representative-info': RepresentativeInfoRepresentativeInfo;
      'contact.contact-info': ContactContactInfo;
    }
  }
}

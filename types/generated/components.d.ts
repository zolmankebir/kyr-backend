import type { Schema, Attribute } from '@strapi/strapi';

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

export interface RepresentativeInfoRepresentativeInfo extends Schema.Component {
  collectionName: 'components_representative_info_representative_infos';
  info: {
    displayName: 'Representative_Info';
    icon: 'book';
  };
  attributes: {
    Name: Attribute.String;
    Role: Attribute.Enumeration<['Senator', 'Mp', 'MCA']>;
    Party: Attribute.String;
    Photo: Attribute.Media<'images' | 'videos'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact-info': ContactContactInfo;
      'representative-info.representative-info': RepresentativeInfoRepresentativeInfo;
    }
  }
}

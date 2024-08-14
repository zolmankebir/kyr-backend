import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    Createdat: Attribute.DateTime;
    Updatedat: Attribute.DateTime;
    reviews: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::review.review'
    >;
    Date_Of_Bierth: Attribute.Date;
    Gender: Attribute.Enumeration<['Male', 'Female']>;
    member: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::member.member'
    >;
    legal_assistance_requests: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::legal-assistance-request.legal-assistance-request'
    >;
    timeline_posts: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::timeline-post.timeline-post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommentComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Comment: Attribute.String;
    Date_Time: Attribute.DateTime;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConstituencyConstituency extends Schema.CollectionType {
  collectionName: 'constituencies';
  info: {
    singularName: 'constituency';
    pluralName: 'constituencies';
    displayName: 'Constituency';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    members: Attribute.Relation<
      'api::constituency.constituency',
      'oneToMany',
      'api::member.member'
    >;
    Counties: Attribute.Enumeration<
      [
        'Mombasa',
        'Kwale',
        'Kilifi',
        'Tana River',
        'Lamu',
        'Taita-Taveta',
        'Garissa',
        'Wajir',
        'Mandera',
        'Marsabit',
        'Isiolo',
        'Meru',
        'Tharaka-Nithi',
        'Embu',
        'Kitui',
        'Machakos',
        'Makueni',
        'Nyandarua',
        'Nyeri',
        'Kirinyaga',
        "Murang'a",
        'Kiambu',
        'Turkana',
        'West Pokot',
        'Samburu',
        'Trans Nzoia',
        'Uasin Gishu',
        'Elgeyo-Marakwet',
        'Nandi',
        'Baringo',
        'Laikipia',
        'Nakuru',
        'Narok',
        'Kajiado',
        'Kericho',
        'Bomet',
        'Kakamega',
        'Vihiga',
        'Bungoma',
        'Busia',
        'Siaya',
        'Kisumu',
        'Homa Bay',
        'Migori',
        'Kisii',
        'Nyamira',
        'Nairobi City'
      ]
    >;
    Constituency_name: Attribute.Enumeration<
      [
        'Changamwe',
        'Jomvu',
        'Kisauni',
        'Nyali',
        'Likoni',
        'Mvita',
        'Msambweni',
        'Lunga Lunga',
        'Matuga',
        'Kinango',
        'Kilifi North',
        'Kilifi South',
        'Kaloleni',
        'Rabai',
        'Ganze',
        'Malindi',
        'Magarini',
        'Garsen',
        'Galole',
        'Bura',
        'Lamu East',
        'Lamu West',
        'Taveta',
        'Wundanyi',
        'Mwatate',
        'Voi',
        'Garissa Township',
        'Balambala',
        'Lagdera',
        'Dadaab',
        'Fafi',
        'Ijara',
        'Wajir North',
        'Wajir East',
        'Tarbaj',
        'Wajir West',
        'Eldas',
        'Wajir South',
        'Mandera West',
        'Banissa',
        'Mandera North',
        'Mandera South',
        'Mandera East',
        'Lafey',
        'Moyale',
        'North Horr',
        'Saku',
        'Laisamis',
        'Isiolo North',
        'Isiolo South',
        'Igembe South',
        'Igembe Central',
        'Igembe North',
        'Tigania West',
        'Tigania East',
        'North Imenti',
        'Buuri',
        'Central Imenti',
        'South Imenti',
        'Maara',
        "Chuka/Igambang'ombe",
        'Tharaka',
        'Manyatta',
        'Runyenjes',
        'Mbeere South',
        'Mbeere North',
        'Mwingi North',
        'Mwingi West',
        'Mwingi Central',
        'Kitui West',
        'Kitui Rural',
        'Kitui Central',
        'Kitui East',
        'Kitui South',
        'Masinga',
        'Yatta',
        'Kangundo',
        'Matungulu',
        'Kathiani',
        'Mavoko',
        'Machakos Town',
        'Mwala',
        'Mbooni',
        'Kilome',
        'Kaiti',
        'Makueni',
        'Kibwezi West',
        'Kibwezi East',
        'Kinangop',
        'Kipipiri',
        'Ol Kalou',
        'Ol Jorok',
        'Ndaragwa',
        'Tetu',
        'Kieni',
        'Mathira',
        'Othaya',
        'Mukurweini',
        'Nyeri Town',
        'Mwea',
        'Gichugu',
        'Ndia',
        'Kirinyaga Central',
        'Kangema',
        'Mathioya',
        'Kiharu',
        'Kigumo',
        'Maragwa',
        'Kandara',
        'Gatanga',
        'Gatundu South',
        'Gatundu North',
        'Juja',
        'Thika Town',
        'Ruiru',
        'Githunguri',
        'Kiambu',
        'Kiambaa',
        'Kabete',
        'Kikuyu',
        'Limuru',
        'Lari',
        'Turkana North',
        'Turkana West',
        'Turkana Central',
        'Loima',
        'Turkana South',
        'Turkana East',
        'Kapenguria',
        'Sigor',
        'Kacheliba',
        'Pokot South',
        'Samburu West',
        'Samburu North',
        'Samburu East',
        'Kwanza',
        'Endebess',
        'Saboti',
        'Turbo',
        'Soy',
        'Moiben',
        'Ainabkoi',
        'Kapseret',
        'Kesses',
        'Marakwet East',
        'Marakwet West',
        'Keiyo North',
        'Keiyo South',
        'Tinderet',
        'Aldai',
        'Nandi Hills',
        'Chesumei',
        'Emgwen',
        'Mosop',
        'Tiaty',
        'Baringo North',
        'Baringo Central',
        'Baringo South',
        'Mogotio',
        'Eldama Ravine',
        'Laikipia West',
        'Laikipia East',
        'Laikipia North',
        'Molo',
        'Njoro',
        'Naivasha',
        'Gilgil',
        'Kuresoi South',
        'Kuresoi North',
        'Subukia',
        'Rongai',
        'Bahati',
        'Nakuru Town West',
        'Nakuru Town East',
        'Kilgoris',
        'Emurua Dikirr',
        'Narok North',
        'Narok East',
        'Narok South',
        'Narok West',
        'Kajiado North',
        'Kajiado Central',
        'Kajiado East',
        'Kajiado West',
        'Kajiado South',
        'Kipkelion East',
        'Kipkelion West',
        'Ainamoi',
        'Bureti',
        'Belgut',
        'Sigowet/Soin',
        'Sotik',
        'Chepalungu',
        'Bomet East',
        'Bomet Central',
        'Konoin',
        'Lugari',
        'Likuyani',
        'Malava',
        'Lurambi',
        'Navakholo',
        'Mumias West',
        'Mumias East',
        'Matungu',
        'Butere',
        'Khwisero',
        'Shinyalu',
        'Ikolomani',
        'Vihiga',
        'Sabatia',
        'Hamisi',
        'Luanda',
        'Emuhaya',
        'Mt. Elgon',
        'Sirisia',
        'Kabuchai',
        'Bumula',
        'Kanduyi',
        'Webuye East',
        'Webuye West',
        'Kimilili',
        'Tongaren',
        'Teso North',
        'Teso South',
        'Nambale',
        'Matayos',
        'Butula',
        'Funyula',
        'Budalangi',
        'Ugenya',
        'Ugunja',
        'Alego Usonga',
        'Gem',
        'Bondo',
        'Rarieda',
        'Kisumu East',
        'Kisumu West',
        'Kisumu Central',
        'Seme',
        'Nyando',
        'Muhoroni',
        'Nyakach',
        'Kasipul',
        'Kabondo Kasipul',
        'Karachuonyo',
        'Rangwe',
        'Homa Bay Town',
        'Ndhiwa',
        'Suba North',
        'Suba South',
        'Rongo',
        'Awendo',
        'Suna East',
        'Suna West',
        'Uriri',
        'Nyatike',
        'Kuria West',
        'Kuria East',
        'Bonchari',
        'South Mugirango',
        'Bomachoge Borabu',
        'Bobasi',
        'Bomachoge Chache',
        'Nyaribari Masaba',
        'Nyaribari Chache',
        'Kitutu Chache North',
        'Kitutu Chache South',
        'Kitutu Masaba',
        'West Mugirango',
        'North Mugirango',
        'Borabu',
        'Westlands',
        'Dagoretti North',
        'Dagoretti South',
        'Langata',
        'Kibra',
        'Roysambu',
        'Kasarani',
        'Ruaraka',
        'Embakasi South',
        'Embakasi North',
        'Embakasi Central',
        'Embakasi East',
        'Embakasi West',
        'Makadara',
        'Kamukunji',
        'Starehe',
        'Mathare',
        'Pumwani',
        'Njiru'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::constituency.constituency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::constituency.constituency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountyCounty extends Schema.CollectionType {
  collectionName: 'counties';
  info: {
    singularName: 'county';
    pluralName: 'counties';
    displayName: 'County';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    constituencies: Attribute.Relation<
      'api::county.county',
      'oneToMany',
      'api::constituency.constituency'
    >;
    Counties: Attribute.Enumeration<
      [
        'Mombasa',
        'Kwale',
        'Kilifi',
        'Tana River',
        'Lamu',
        'Taita-Taveta',
        'Garissa',
        'Wajir',
        'Mandera',
        'Marsabit',
        'Isiolo',
        'Meru',
        'Tharaka-Nithi',
        'Embu',
        'Kitui',
        'Machakos',
        'Makueni',
        'Nyandarua',
        'Nyeri',
        'Kirinyaga',
        "Murang'a",
        'Kiambu',
        'Turkana',
        'West Pokot',
        'Samburu',
        'Trans Nzoia',
        'Uasin Gishu',
        'Elgeyo-Marakwet',
        'Nandi',
        'Baringo',
        'Laikipia',
        'Nakuru',
        'Narok',
        'Kajiado',
        'Kericho',
        'Bomet',
        'Kakamega',
        'Vihiga',
        'Bungoma',
        'Busia',
        'Siaya',
        'Kisumu',
        'Homa Bay',
        'Migori',
        'Kisii',
        'Nyamira',
        'Nairobi City'
      ]
    >;
    Name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::county.county',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::county.county',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInstitutionInstitution extends Schema.CollectionType {
  collectionName: 'institutions';
  info: {
    singularName: 'institution';
    pluralName: 'institutions';
    displayName: 'Institution';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    members: Attribute.Relation<
      'api::institution.institution',
      'oneToMany',
      'api::member.member'
    >;
    legal_assistance_requests: Attribute.Relation<
      'api::institution.institution',
      'oneToMany',
      'api::legal-assistance-request.legal-assistance-request'
    >;
    Description: Attribute.Blocks;
    Government: Attribute.Enumeration<
      ['Executive', 'Legislature', 'Judiciary']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::institution.institution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::institution.institution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLegalAssistanceRequestLegalAssistanceRequest
  extends Schema.CollectionType {
  collectionName: 'legal_assistance_requests';
  info: {
    singularName: 'legal-assistance-request';
    pluralName: 'legal-assistance-requests';
    displayName: 'legal-assistance-request';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Comment: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::legal-assistance-request.legal-assistance-request',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    Date_And_Time: Attribute.DateTime;
    institution: Attribute.Relation<
      'api::legal-assistance-request.legal-assistance-request',
      'manyToOne',
      'api::institution.institution'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal-assistance-request.legal-assistance-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legal-assistance-request.legal-assistance-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMemberMember extends Schema.CollectionType {
  collectionName: 'members';
  info: {
    singularName: 'member';
    pluralName: 'members';
    displayName: 'Member';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    organization: Attribute.Relation<
      'api::member.member',
      'manyToOne',
      'api::organization.organization'
    >;
    institution: Attribute.Relation<
      'api::member.member',
      'manyToOne',
      'api::institution.institution'
    >;
    Email: Attribute.Email & Attribute.Required & Attribute.Unique;
    Phone_Number: Attribute.BigInteger & Attribute.Required;
    constituency: Attribute.Relation<
      'api::member.member',
      'manyToOne',
      'api::constituency.constituency'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationOrganization extends Schema.CollectionType {
  collectionName: 'organizations';
  info: {
    singularName: 'organization';
    pluralName: 'organizations';
    displayName: 'Organization';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    reviews: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::review.review'
    >;
    organization_type: Attribute.Relation<
      'api::organization.organization',
      'manyToOne',
      'api::organization-type.organization-type'
    >;
    members: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationTypeOrganizationType
  extends Schema.CollectionType {
  collectionName: 'organization_types';
  info: {
    singularName: 'organization-type';
    pluralName: 'organization-types';
    displayName: 'Organization-Type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    organizations: Attribute.Relation<
      'api::organization-type.organization-type',
      'oneToMany',
      'api::organization.organization'
    >;
    Description: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization-type.organization-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization-type.organization-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: 'reviews';
  info: {
    singularName: 'review';
    pluralName: 'reviews';
    displayName: 'Review';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    users_permissions_user: Attribute.Relation<
      'api::review.review',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    organization: Attribute.Relation<
      'api::review.review',
      'manyToOne',
      'api::organization.organization'
    >;
    Rating: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTimelinePostTimelinePost extends Schema.CollectionType {
  collectionName: 'timeline_posts';
  info: {
    singularName: 'timeline-post';
    pluralName: 'timeline-posts';
    displayName: 'Timeline-Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::timeline-post.timeline-post',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    Publication_Timestamp: Attribute.DateTime;
    Upvote: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
    comments: Attribute.Relation<
      'api::timeline-post.timeline-post',
      'oneToMany',
      'api::comment.comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::timeline-post.timeline-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::timeline-post.timeline-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::comment.comment': ApiCommentComment;
      'api::constituency.constituency': ApiConstituencyConstituency;
      'api::county.county': ApiCountyCounty;
      'api::institution.institution': ApiInstitutionInstitution;
      'api::legal-assistance-request.legal-assistance-request': ApiLegalAssistanceRequestLegalAssistanceRequest;
      'api::member.member': ApiMemberMember;
      'api::organization.organization': ApiOrganizationOrganization;
      'api::organization-type.organization-type': ApiOrganizationTypeOrganizationType;
      'api::review.review': ApiReviewReview;
      'api::timeline-post.timeline-post': ApiTimelinePostTimelinePost;
    }
  }
}

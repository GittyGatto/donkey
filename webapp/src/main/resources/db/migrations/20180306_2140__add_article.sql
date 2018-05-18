create table article (
  article_id bigserial primary key,
  article_uuid varchar(80) not null unique,
  category_id bigint,
  article_name varchar(100) not null unique
);

insert into article (article_uuid, article_name, category_id) VALUES ('fcac29e7-f16e-4d37-a783-9547065dac7b', 'Kaffee', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('d3aefa4f-7f9e-4faa-a614-aa4956212bda', 'Espresso', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('59120433-dc56-4580-9ce4-2b265ec95228', 'Bier', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('dee8f939-e825-4757-861a-354bfaae4585', 'Apfelsaft', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('c29e009f-1514-4c06-bfc4-4bc1de8e3c94', 'Milch', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('e0cd18eb-069f-4162-ae51-a1085e5ae839', 'Milch (bio)', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('9b9be20a-d095-4786-960f-959ac4af7942', 'Alc. Free Weizen', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('9adbd197-a983-4423-91c2-61d1f5b4bd99', 'Sekt', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('87e7f210-c372-42c7-9b8f-04566d3125a0', 'Weißwein', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('33bcca2e-9df9-49d7-a4d4-87ffa70f1791', 'Rotwein', 1);
insert into article (article_uuid, article_name, category_id) VALUES ('48d2bf0f-6e96-425c-8caa-2cb624ae7c0b', 'Banana', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('ab524f47-4af1-4124-a68b-22ef561487bd', 'Äpfel', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('3ec3d276-0af8-4eb8-ab9b-e6fef70725e5', 'Hack', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('bc152815-5955-4fd2-8bd1-ca1bfc11d74d', 'Nudeln', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('527333b9-228c-4ab8-b1e6-3d97a2ca22aa', 'Reis', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('8788b0d1-93ee-4e65-bda4-c40a57479da8', 'Joghurt', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('87bdc7d7-914f-4074-97b4-aaba97293109', 'Toast', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('884671af-7189-4e4d-833f-03ed61d048d7', 'Brot', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('ea62796e-aeb7-432d-97a9-4014a77da282', 'Müsli', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('938c3917-2e88-48ec-9774-e9255c9c91e5', 'Cheddar', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('2507e490-b31c-4e2c-80cf-6b951447dd62', 'Stinkekäse', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('9c738a1c-5d1c-454f-a91c-556fa93cd089', 'Baguette', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('fd42d001-99e6-4257-a0d7-ceb27945d4d5', 'Pizza', 2);
insert into article (article_uuid, article_name, category_id) VALUES ('0da5d892-26b5-46f5-9f1a-3b96c5ead826', 'Tobacco', 3);
insert into article (article_uuid, article_name, category_id) VALUES ('b50300b3-4acc-4c5b-9fca-754b1ab40dcb', 'Papers', 3);

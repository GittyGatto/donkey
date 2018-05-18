create table cart_article (
  cart_article_id bigserial primary key,
  cart_article_uuid varchar(80) not null unique,
  cart_id bigint,
  article_id bigint,
  amount integer not null
);

insert into cart_article (cart_id, cart_article_uuid, article_id, amount) VALUES (1, '02376075-5569-4829-88f3-1a63eb6061d9',1,2);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (1,'b1f0206e-01cf-40a3-8de6-2623ad5370eb', 2,5);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (1,'6086e26f-e65e-45e7-89a6-08ce2783c4e33', 3,2);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (1, '9315bfc8-aac7-4bb2-8288-fd163c4458e5', 4,4);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (1,'b0cd9e68-0a2f-4a3b-87f1-2ecba7502120', 5,1);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (1,'1f394fb5-c6c7-490e-9d3c-deb793e2bfcb',6,12);



insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (2,'4870b056-c0a2-44d0-b2f8-7c9bed702c16',3,3);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (2,'7fa2d593-3e6a-49fa-bc6a-e22da937af1a',6,1);
insert into cart_article (cart_id, cart_article_uuid,article_id, amount) VALUES (2,'fb054965-0952-4963-a4b8-0e77bfaceaff',9,5);

create table category (
  category_id bigserial primary key,
  category_uuid varchar(80) not null unique,
  category_name varchar(100) not null unique
);

insert into category (category_uuid, category_name) VALUES ('f4d014d0-b1bf-48e3-b2b5-0b75072f5d64', 'Trinken');
insert into category (category_uuid, category_name) VALUES ('a7714d9d-3069-4999-b515-cbd7feda2791', 'Essen');
insert into category (category_uuid, category_name) VALUES ('ed0f67f4-14a6-4c54-b2a4-15a42f4cd57a', 'Rauchen');

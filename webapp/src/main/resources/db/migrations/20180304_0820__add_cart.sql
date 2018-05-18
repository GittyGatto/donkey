create table cart (

  cart_id bigserial primary key,
  cart_uuid varchar(80) not null unique,
  cart_name varchar(100) not null unique
);

insert into cart (cart_uuid, cart_name) VALUES ('b80ed04d-ed2f-4cee-9078-754cb598821f','Bring mal mit');
insert into cart (cart_uuid, cart_name) VALUES ('90945d47-38e6-4fa4-b8c8-b8226ea183ac', 'Männerabend');

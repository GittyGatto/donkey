create table category (
  category_id bigserial primary key,
  category_uuid varchar(80) not null unique,
  category_name varchar(100) not null unique
);
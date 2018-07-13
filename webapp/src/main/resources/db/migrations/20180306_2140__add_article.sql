create table article (
  article_id bigserial primary key,
  article_uuid varchar(80) not null unique,
  category_id bigint,
  article_name varchar(100) not null unique
);


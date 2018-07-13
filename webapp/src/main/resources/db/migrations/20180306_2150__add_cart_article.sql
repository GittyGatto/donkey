create table cart_article (
  cart_article_id bigserial primary key,
  cart_article_uuid varchar(80) not null unique,
  cart_id bigint,
  article_id bigint,
  amount integer not null
);

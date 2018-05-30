
alter table cart_article add column done boolean default false not null;

update cart_article set done = false;
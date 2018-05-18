
alter table article add constraint fk_category foreign key (category_id) references category (category_id);
alter table cart_article add constraint fk_ca_cart foreign key (cart_id) references cart (cart_id);
alter table cart_article add constraint fk_ca_article foreign key (article_id) references article (article_id);

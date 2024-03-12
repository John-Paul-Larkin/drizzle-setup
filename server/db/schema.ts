import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
});


export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  bio: varchar("bio", { length: 256 }),
  userId: integer("user_id")
  .notNull()
  .references(() => users.id),
});

export const userRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  posts: many(posts),
}));















export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 256 }),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.id),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

export const postOnCategories = pgTable('post_categories',{
  postId: integer('post_id').notNull().references(() => posts.id),
  categoriesId: integer('category_id').notNull().references(() => categories.id),
}, (t) => ({
  pk: primaryKey(t.postId, t.categoriesId),
}),

)

export const postRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),

  postCategories:many(postOnCategories)

}));



export const categoriesRelations = relations(categories, ({ many }) => ({
  posts:many(postOnCategories)

}));


export const postOnCategoriesRelations = relations(postOnCategories,({one})=>({
    post: one(posts,{
      fields:[postOnCategories.postId],
      references:[posts.id]
    }),
    category: one(categories,{
      fields:[postOnCategories.categoriesId],
      references:[categories.id]
    }),

}))


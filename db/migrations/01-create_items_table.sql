/* This is an example of an SQL DDL migration. It creates an `items` table and
 * then calls an `electric.electrify` procedure to expose the table to the
 * ElectricSQL replication machinery.
 *
 * Note that these statements are applied directly to the *Postgres* database.
 * Electric then handles keeping the local SQLite database schema in sync with
 * the electrified subset of your Postgres database schema.
 *
 * See https://electric-sql.com/docs/usage/data-modelling for more information.
 */

-- Create a simple items table.

CREATE TABLE IF NOT EXISTS random1(
 id integer PRIMARY KEY NOT NULL ,
  task TEXT NOT NULL, 
  checked integer NOT NULL
);

CREATE TABLE IF NOT EXISTS testdocument(
  doc_id integer PRIMARY KEY NOT NULL ,
  experiment_name TEXT NOT NULL, 
  type TEXT,
  createdTime text NOT NULL, 
  x_position integer,
  y_position integer,
  width integer,
  height integer
);

CREATE TABLE IF NOT EXISTS images (
  image_id integer PRIMARY key NOT NULL, 
  link text, 
  descr text, 
  FOREIGN KEY (image_id) REFERENCES testdocument(doc_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS todolist(
  doc_id integer NOT NULL, 
  item_id integer PRIMARY KEY NOT NULL, 
  checked integer , 
  task text,
  FOREIGN KEY (doc_id) REFERENCES testdocument(doc_id) ON DELETE CASCADE
);


-- ⚡
-- Electrify the items table
ALTER TABLE random1 ENABLE ELECTRIC;
ALTER TABLE testdocument ENABLE ELECTRIC;
ALTER TABLE images ENABLE ELECTRIC;
ALTER TABLE todolist ENABLE ELECTRIC;




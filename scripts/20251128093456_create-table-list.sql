-- Description: create-table-list
--      Script: 20251128093456_create-table-list.sql 
--   File name: 20251128093456
--  Created at: 28/11/2025 09:34
--      Author: vinicius

CREATE TABLE list (id uuid NOT NULL PRIMARY KEY DEFAULT UUID(),
                   title VARCHAR(120) NOT NULL,
                   owner_id uuid NOT NULL,
                   created_at DATETIME NOT NULL DEFAULT current_timestamp(),
                   updated_at DATETIME,
                   deleted_at DATETIME,
                   FOREIGN KEY (owner_id) REFERENCES users (id)
                   ) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
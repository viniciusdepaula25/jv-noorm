-- Description: create-table-task
--      Script: 20251128095041_create-table-task.sql 
--   File name: 20251128095041
--  Created at: 28/11/2025 09:50
--      Author: vinicius

CREATE TABLE task (id uuid NOT NULL PRIMARY KEY DEFAULT UUID(),
                   list_id uuid NOT NULL,
                   title VARCHAR(120) NOT NULL,
                   description VARCHAR(1000),
                   is_completed CHAR(1) NOT NULL DEFAULT '0',
                   assingned_to_id uuid NOT NULL,
                   created_at DATETIME NOT NULL DEFAULT current_timestamp(),
                   updated_at DATETIME,
                   deleted_at DATETIME,
                   FOREIGN KEY (list_id) REFERENCES list (id),
                   FOREIGN KEY (assingned_to_id) REFERENCES users (id)
                   )
ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;